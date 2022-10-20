<template>
    <div class="mt-16 overflow-x-hidden">
        <h1 class="font-bold text-white text-xl text-center mt-4">{{ title }}: {{ antStore.maxNumber }}/5</h1>
        <h1 :class="['text-center mt-2 opacity-50 text-white', antStore.maxNumber ===5 ?'':'hidden']">成功合成套装，快去铸造你的身份吧！</h1>
        <div class="w-[95%] mx-auto mt-8">
            <el-carousel indicator-position="none" :interval="10000000" type="card" height="300px">
                <el-carousel-item :class="['rounded-lg']" v-for="i in 3" :key="i">
                    <div :class="['bg-top min-h-full bg-no-repeat bg-cover']"
                         :style="{backgroundImage:'url('+images[i-1]+')'}"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="text-center space-y-3 text-white mt-6">
            <div class="opacity-70">
                <p class="mx-12">{{ message }}</p>
            </div>
            <div class="pt-3 space-y-6">
                <div class="flex justify-center">
                    <router-link :to="{name:'exchange'}"
                                 class="text-lg flex items-center justify-center gen-btn px-16 py-4">
                        <img class="w-6 h-6 mr-2" src="../../assets/images/svgs/swapPart.png" alt=""/>
                        交换部件
                    </router-link>
                </div>

                <div class="flex justify-center" v-if="antStore.maxNumber === 5" >
                    <button @click="antStore.exchangeMint()" class="text-lg flex items-center justify-center gen-btn px-10 py-4">
                        <img class="w-6 h-6 mr-2" src="../../assets/images/svgs/generateRandom.png" alt=""/>
                        铸造区块链身份
                    </button>
                </div>

            </div>
        </div>
        <p :class="['text-center mt-8 opacity-50', antStore.maxNumber < 5?'':'hidden']">通过交换部件凑成特定套装，可铸造大使身份</p>
    </div>
</template>

<script>

import {useAntStore} from '../../stores/antStore.js'

export default {
    name: "HomeExchanged",
    setup() {
        const antStore = useAntStore()
        return {
            antStore
        }
    },
    data() {
        return {
            images: [
                `/src/assets/ant/images/${this.antStore.randomSeed}.png`,
                '/src/assets/images/black1.png',
                '/src/assets/images/butterFly.png',
            ]
        }
    },
    computed: {
        title() {
            if (this.antStore.antIdentity === 'web3') {
                return 'web3概念官'
            }
            if (this.antStore.antIdentity === 'carbon') {
                return '碳中和生活官'
            }
            if (this.antStore.antIdentity === 'antchain') {
                return '蚂蚁链教育官'
            }

            return '未获取身份'
        },

        message(){
            if (this.antStore.antIdentity === 'web3') {
                return 'web3.0概念大使拥有着对于区块链常识的超常理解: 快去发挥你的特长吧！'
            }
            if (this.antStore.antIdentity === 'antchain') {
                return '蚂蚁链教育官是蚂蚁链的教育大使: 肩负着区块链教育的重任!'
            }
            if (this.antStore.antIdentity === 'carbon') {
                return '碳中和生活cc官是低碳生活的代言人：照顾地球，随手就好~'
            }

            return ''
        },
    }

}
</script>

<style scoped>


</style>