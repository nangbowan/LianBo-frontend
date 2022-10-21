import {ref, computed, toRaw} from 'vue'
import {defineStore} from 'pinia'
import {ElMessage} from 'element-plus'
import 'element-plus/es/components/message/style/css'

import LianBoABI from './LianBoABI.json'
import {SolContract, WasmContract} from '@antchain/jssdk'

const CONTRACT_NAME = "LianBo-Dapp1.1"
const IPFS_IMAGE_URL = 'https://lainbo-1310868664.cos.ap-nanjing.myqcloud.com/images/'
const RANDOM_SEED = 'randomSeed'

let components = ['background', 'hat', 'hair', 'clothes', 'accessories']
let identities = ['web3', 'carbon', 'antchain']

export const useAntStore = defineStore('useAntStore', {
    state() {

        return {
            // randomFromChain: undefined,
            isInit: false, //是否进行过初始化
            antScores: 2688, // 蚂蚁积分
            antIdentity: 'web3',
            maxNumber: 0, // 最大数量

            randomSeed: Math.ceil(Math.random() * 243), // 随机种子的变量
            allParts: [], // 部件
            accountInfo: undefined, // 连接钱包后返回的变量

            contract: undefined, // 合约
        }
    },

    actions: {
        async init_Antcahin() {
            // console.log('init success')
        },

        async connectAntchain() {
            if (!window.antchain) {
                ElMessage({
                    showClose: true,
                    message: '请安装蚂蚁链连接器!',
                    type: 'error',
                    duration: 2500,
                })
                return
            }

            let isLogin = localStorage.getItem('isLogin')
            if (!isLogin) {
                //设置isLogin，下次刷新自动登录
                localStorage.setItem('isLogin', true)
                localStorage.setItem(RANDOM_SEED, 111111)
            }

            // ---------- 合约相关操作----------------------------
            // 获取账户信息
            this.accountInfo = (await window.antchain.requestAccounts())[0]

            // 连接合约
            this.contract = new WasmContract({contractName: CONTRACT_NAME, abi: LianBoABI}, window.antchain)

            // 获取当前账户的随机数，即用户拥有的图片序号

            if (!isLogin) {
                this.randomSeed = await this.getRandomSeed()
                localStorage.setItem(RANDOM_SEED, this.randomSeed)
            } else {
                this.randomSeed = Number(localStorage.getItem(RANDOM_SEED))
                // console.log(' this.randomSeed ', this.randomSeed)
            }

            const sleep  = (time)=>{
                return new Promise(resolve => setTimeout(resolve,time))
            }
            await sleep(3000)

            this.isInit = this.randomSeed >= 0 && this.randomSeed <= 242// 是否已初始化

            // console.log('is init', this.isInit)
            //----------------------------------------------------------

        },

        async getRandomSeed() {
            let {returnValue} = await this.contract.call({
                methodName: 'getAmbassadorRandom'
            })
            // console.log('return type', returnValue)
            return Number(returnValue)
        },

        async initMint() {
            let random = this.generateRandomWithoutAmbassadors()

            let initMint = await this.contract.call({
                methodName: 'initMint',
                args: [random, IPFS_IMAGE_URL + `${random}.png`]
            })

            localStorage.setItem(RANDOM_SEED, random)
            this.isInit = true

            location.reload();
        },


        generateRandomWithoutAmbassadors() {
            //生成一个随机种子
            let random
            let arr = [0, 121, 242] // 不传入
            while (true) {
                random = Math.floor(Math.random() * 243)
                if (!arr.includes(random)) {
                    break
                }
            }
            return random
        },

        async changeOnePart(type) {
            let index = components.indexOf(type)
            if (index < 0) {
                return
            }

            let json = await import(`../assets/ant/json/${this.randomSeed}.json`)
            const weightArr = json.weightArr
            while (true) {
                let random = Math.floor(Math.random() * 3)
                if (random !== weightArr[index]) {
                    weightArr[index] = random
                    break
                }
            }
            // ----发送合约修改 randomSeed
            let random = 0
            for (let i = 0; i < weightArr.length; i++) {
                random += Math.pow(3, weightArr.length - i - 1) * weightArr[i]
            }

            let exchangeMint = await this.contract.call({
                methodName: 'exchangeMint',
                args: [random, IPFS_IMAGE_URL + `${random}.png`]
            })


            // console.log('exchange Mint', exchangeMint)
            /*
            * localStorage 更新随机数
            * 重置allParts
            * */
            localStorage.setItem(RANDOM_SEED, random)
            this.randomSeed = random
            this.allParts = []
            await this.setParts()
        },

        async exchangeMint() {
            await this.contract.call({
                methodName: 'exchangeMint',
                args: [this.randomSeed, IPFS_IMAGE_URL + `${this.randomSeed}.png`]
            })
        },

        async setParts() {
            let json = await import(`../assets/ant/json/${this.randomSeed}.json`)
            const weightArr = json.weightArr

            weightArr.forEach((value, index) => {
                this.allParts[index] = {
                    imageUrl: `/src/assets/ant/layers/${components[index]}/${identities[value]}.png`,
                    trait_type: components[index],
                    value: identities[value]
                }
            })

            let ID_infos = this.getMaxCountsType(weightArr)
            this.antIdentity = ID_infos.identity
            this.maxNumber = ID_infos.number
            // console.log('this antIdentity', this.antIdentity)
            // console.log('this maxNumber', this.maxNumber)
            //
            // console.log('random seed', this.randomSeed)
            // console.log('allparts', this.allParts)
        },

        getMaxCountsType(arr) {

            const getWordCnt = (arr) => {
                let obj = {};
                for (let i = 0, l = arr.length; i < l; i++) {
                    let item = arr[i];
                    obj[item] = (obj[item] + 1) || 1;
                }
                // console.log('objs', obj)
                return obj;
            }

            const getIndexMax = (arr) => {
                const maxNum = Math.max(...arr)
                const maxIndex = arr.indexOf(maxNum)
                return [maxIndex, maxNum]
            }

            let obj = getWordCnt(arr)
            let [maxIndex, maxNum] = getIndexMax(Object.values(obj))

            return {
                identity: identities[Object.keys(obj)[maxIndex]],
                number: maxNum
            }
        },


        copyToClipboard(value) {
            let input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', value);
            input.select(); // 选中文本
            document.execCommand("copy"); // 执行浏览器复制命令
            document.body.removeChild(input);
            ElMessage({
                showClose: true,
                message: '复制成功!',
                type: 'success',
                duration: 2500,
            })
        },


    }
})