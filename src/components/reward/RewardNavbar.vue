<template>
    <div class="flex justify-between items-center px-6 py-8">
        <button @click="goPrevious" class="p-3 bg-gray-800/80 hover:bg-gray-600 rounded-full flex justify-center items-center">
            <img class="w-6 h-6" src="../../assets/images/svgs/returnArrowWhite.png" alt=""/>
        </button>

        <h1 class="text-white font-bold text-2xl">{{ title }}</h1>

        <div class="flex">
            <div @click="goMyView" class="mr-3 avatar hover:cursor-pointer rounded-full">
                <div class="w-10 h-10 rounded-full">
                    <img src="../../assets/images/avatar.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})


import {useRouter} from 'vue-router/dist/vue-router'

const router = useRouter()

const goPrevious = () => {
    router.go(-1)
}

const goMyView = () => {
    router.push({name: 'my'})
}

</script>

<style scoped>

</style>