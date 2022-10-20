<template>
    <div class="flex justify-between px-6">
        <button @click="goPrevious" class="px-1 header-btn flex justify-center items-center">
            <img class="w-8 h-8 mr-2" src="../../assets/images/svgs/returnArrow.png" alt=""/>
        </button>
        <div class="flex">
            <div class="mr-3 avatar hover:cursor-pointer rounded-full ring-2 ring-purple-600 ring-offset-1">
                <div class="w-12 h-12 rounded-full">
                    <img src="../../assets/images/avatar.jpg" alt=""/>
                </div>
            </div>
            <div class="text-black">
                <p class="font-bold">Full Name</p>
                <p class="opacity-50">修改昵称</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router/dist/vue-router'

const router = useRouter()

const goPrevious = () => { // 返回上一级路由
    router.go(-1)
}
</script>

<style scoped>
.header-btn {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
    border-radius: 6px;
}
</style>