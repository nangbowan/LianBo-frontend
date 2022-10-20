<template>
    <div class="relative">
        <div class="header-bg">
            <button @click="goPrevious"
                    class="bg-gray-400/80 hover:bg-gray-600 absolute top-4 left-4 p-1 rounded-lg flex justify-center items-center">
                <img class="w-8 h-8" src="../../assets/images/svgs/returnArrow.png" alt=""/>
            </button>
        </div>

        <div class="absolute left-1/2 -bottom-8 -translate-x-1/2">
            <div class=" mx-auto play-bg text-center py-4 w-72 d-flex justify-center items-center">
                <div class="text-black text-2xl font-bold tracking-[0.2rem]">玩法攻略</div>
            </div>
        </div>

    </div>
</template>

<script setup>

import {useRouter} from 'vue-router/dist/vue-router'

const router = useRouter()
const goPrevious = () => {
    router.go(-1)
}

</script>

<style scoped>
.header-bg {
    background-image: url("../../assets/images/guideHeaderBg.png");
    background-size: cover;
    height: 250px;
}

.play-bg {

    background-image: linear-gradient(180deg, rgba(136, 139, 244, 0.8) 0%, rgba(136, 139, 244, 0) 100%);
    /* Regular shadow */
    box-shadow: 0px 4px 40px rgba(38, 41, 43, 0.07);;
    border-radius: 8px;
}

</style>