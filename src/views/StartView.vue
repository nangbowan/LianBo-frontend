<script setup>

import {useRouter} from 'vue-router/dist/vue-router'
import {useAntStore} from '../stores/antStore.js'
import {computed, onMounted} from 'vue'
import {ElMessage} from 'element-plus'

const router = useRouter()

const jumpToHome = () => {
    if(!antStore.accountInfo){
        ElMessage({
            showClose: true,
            message: '请先连接蚂蚁链!',
            type: 'error',
            duration: 2500,
        })
        return
    }

    router.push({name: 'home'})
}

const antStore = useAntStore()

const connectBtnText = computed(()=>{
    if (!antStore.accountInfo){
        return '连接蚂蚁链'
    }else{
        return '已连接蚂蚁链'
    }
})
</script>

<template>
    <div class="start-bg min-h-screen">
        <div class="text-white text-center mt-[50vh]">
            <h1 class="text-3xl">成为新世界的领跑者</h1>
            <p class="mx-24 mt-4">新世界的诞生，你一定要在场——创建专属于你的区块链形象</p>
            <button @click="jumpToHome()" style="letter-spacing: 0.4rem;"
                    class=" mt-8 text-3xl font-bold px-12 py-2 rounded-lg bg-gray-800/80 focus:bg-gray-600">
                一起开始吧!
            </button>

            <div>
                <button @click="antStore.connectAntchain()"
                        :class="['mt-8 text-xl font-bold px-12 py-2 rounded-lg bg-gray-800/80 focus:bg-gray-600',
                        !antStore.accountInfo?'':'pointer-events-none opacity-50']">
                    {{ connectBtnText }}
                </button>
            </div>
<!--            <button class="bg-red-300" @click="antStore.initMint()">InitMint Test Button</button>
            <br/>
            <button class="bg-green-300" @click="antStore.getRandomSeed()">getRandomSeed Test Button</button>-->
        </div>


    </div>
</template>

<style scoped>
.start-bg {
    background-image: url("../assets/images/startBgImage.png");
    background-size: cover;
}
</style>