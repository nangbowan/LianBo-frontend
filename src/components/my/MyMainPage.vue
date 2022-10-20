<template>
    <div class="mt-24">
        <div class="text-center">
            <button class="my-btn rounded-full w-24 h-24 text-xl font-bold">设置</button>
        </div>
        <div class="flex justify-between px-4 mt-8">
            <button class="my-btn rounded-full w-24 h-24 text-xl font-bold">小世界</button>

            <div class="relative top-12 avatar hover:cursor-pointer rounded-full">
                <div class="w-36 h-36 rounded-full">
                    <img src="../../assets/images/avatar.jpg" alt=""/>
                </div>
            </div>

            <button class="my-btn rounded-full w-24 h-24 text-xl font-bold">探索</button>
        </div>
        <div class="flex justify-around mt-20">
            <button class="my-btn rounded-full w-24 h-24 text-xl font-bold"></button>
            <button class="my-btn rounded-full w-24 h-24 text-xl font-bold"></button>
        </div>
    </div>

    <div class="mt-20 address-bg py-4 px-8 rounded-2xl">
        <h1 class="text-center text-white font-bold">我的蚂蚁链地址:</h1>
        <el-input :value="antAddress" @click="copyAddress()"/>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useAntStore} from '../../stores/antStore.js'

const antStore = useAntStore()
const antAddress = computed(()=>{
    if (!antStore.accountInfo) {
        return ''
    }else{
        return antStore.accountInfo.accountAddress
    }
})

const copyAddress = ()=>{
    if (!antStore.accountInfo) {
        return
    }

    antStore.copyToClipboard(antStore.accountInfo.accountAddress)
}
</script>

<style scoped>
.my-btn {
    background: rgba(196, 196, 196, 0.4);
    border: 1px solid rgb(118, 118, 118);
}

.address-bg {
    background-image: url("../../assets/images/addressBgImage.png");
    background-size: cover;
}
</style>