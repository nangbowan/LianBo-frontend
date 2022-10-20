<template>
    <div class="min-h-screen bg-gray-300">
        <section class="mx-auto my-8">
            <div class="bg-img h-[500px]"></div>
        </section>
        <section class="pt-8 bg-white text-gray-600">
            <div class="flex justify-around">
                <button class="rounded-full w-24 h-24 border-2 border-gray-400">
                    <IconWechat class="mx-auto w-12 h-12"/>
                    微信好友
                </button>
                <button class="rounded-full w-24 h-24 border-2 border-gray-400">
                    <IconFriendsCycle class="mx-auto w-12 h-12"/>
                    朋友圈
                </button>
                <button class="rounded-full w-24 h-24 border-2 border-gray-400">
                    <IconWeiBo class="mx-auto w-12 h-12"/>
                    微博
                </button>
            </div>
            <hr class="mt-6"/>
            <button @click="jumpToLast()" class="py-4 w-full text-3xl text-gray-400 active:bg-gray-200">
                取消
            </button>
        </section>
    </div>
</template>

<script setup>

import IconWechat from '../components/icons/IconWechat.vue'
import IconFriendsCycle from '../components/icons/IconFrinedsCycle.vue'
import IconWeiBo from '../components/icons/IconWeiBo.vue'
import {useRouter} from 'vue-router/dist/vue-router'

const router = useRouter()
const jumpToLast = () => {
    router.go(-1)
}
</script>

<style scoped>
    .bg-img{
        background-image: url("../assets/images/lanlain.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>