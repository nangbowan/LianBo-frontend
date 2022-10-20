<template>
    <div class="mt-">
        <div class="w-[95%] mx-auto mt-28">
            <el-carousel indicator-position="none" :interval="10000000" type="card" height="300px">
                <el-carousel-item :class="['rounded-lg']" v-for="i in 3" :key="i">
                    <div :class="['bg-cover bg-center min-h-full', initImageStyle(i)]"
                         :style="{backgroundImage:'url('+images[i-1]+')'}"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="text-center space-y-3 text-white mt-6">
            <h1 class="font-bold text-xl">欢迎加入新世界</h1>
            <div class="opacity-70">
                <p>快点击生成你的区块链个人专属形象吧!</p>
                <p>(使用算法随机生成,无稀有度之分)</p>
            </div>
            <div class="flex justify-center pt-3">
                <button @click="antStore.initMint()"
                        class="text-lg flex items-center justify-center gen-btn px-16 py-4">
                    <img class="w-6 h-6 mr-2" src="../../assets/images/svgs/generateRandom.png" alt=""/>
                    生成随机形象
                </button>

            </div>

        </div>
    </div>
</template>

<script>
import {useAntStore} from '../../stores/antStore.js'

export default {
    name: "HomeInitPage",
    setup() {
        const antStore = useAntStore()
        return {
            antStore
        }
    },
    data() {
        return {
            images: [
                '/src/assets/images/startBgImage.png',
                '/src/assets/images/black1.png',
                '/src/assets/images/black1.png',
            ]
        }
    },
    methods: {
        initImageStyle(index) {
            if (index === 2) {
                return 'flip-img'
            }
        },
    }
}
</script>

<style scoped>
.flip-img {
    transform: rotateY(180deg);
}
</style>