<template>
    <div>
        <div class="purple-bg text-white text-center px-4 py-4 JiangXiZhuoKai">
            <div class="flex justify-between text-xl px-2">
                <span>蚂蚁链积分</span>
                <span><img class="w-6 h-6" src="../../assets/images/svgs/eth.png" alt=""/></span>
            </div>
            <h1 class="text-[2.5rem] my-4">
                {{ antStore.antScores.toFixed(2) }} ANT
            </h1>
            <h1 class="opacity-70 text-sm">最近积分来源: 分享每日知识海报 + 6 ANT</h1>
        </div>

        <div class="purple-bg text-white text-center px-4 py-4 mt-12 text-xl space-y-5 JiangXiZhuoKai">
            <h1>大使身份固定奖励：</h1>
            <h1 class="flex justify-center items-center">
                <span><img class="w-6 h-6 mr-2" src="../../assets/images/svgs/rewardCrown.png" alt=""/></span>
                区块链工程师课程免费学
            </h1>
            <h1 class="flex justify-center items-center">
                <span><img class="w-6 h-6 mr-2" src="../../assets/images/svgs/rewardCrown.png" alt=""/></span>
                每周 +88ANT
            </h1>
        </div>

        <div class="mt-12">
            <div class="font-bold text-white flex justify-between">
                <h1 class="text-xl">兑换奖励</h1>
                <h1 class="opacity-70">+更多</h1>
            </div>

            <div class="space-y-3 py-4 text-sm">
                <div
                    class="bg-gray-800 border border-gray-600 rounded-2xl px-4 py-4 text-white
                    flex justify-between items-center">
                    <div class="flex">
                        <div class="mr-3 avatar hover:cursor-pointer">
                            <div class="w-12 h-12 rounded-full">
                                <img src="../../assets/images/avatar.jpg" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold">淘宝免单权</p>
                            <p class="opacity-70">(200元以内)</p>
                        </div>
                    </div>

                    <button class="purple-btn font-bold">368 ANT</button>
                </div>
                <div
                    class="bg-gray-800 border border-gray-600 rounded-2xl px-4 py-4 text-white
                    flex justify-between items-center">
                    <div class="flex">
                        <div class="mr-3 avatar hover:cursor-pointer">
                            <div class="w-12 h-12 rounded-full">
                                <img src="../../assets/images/avatar.jpg" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold">蚂蚁链专属NFT</p>
                            <p class="opacity-70">(全球限量188份)</p>
                        </div>
                    </div>

                    <button class="purple-btn font-bold">1888 ANT</button>
                </div>
                <div
                    class="bg-gray-800 border border-gray-600 rounded-2xl px-4 py-4 text-white
                    flex justify-between items-center">
                    <div class="flex">
                        <div class="mr-3 avatar hover:cursor-pointer">
                            <div class="w-12 h-12 rounded-full">
                                <img src="../../assets/images/avatar.jpg" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold">花呗免还券</p>
                            <p class="opacity-70">(1000元以内)</p>
                        </div>
                    </div>

                    <button class="purple-btn font-bold">1288 ANT</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import {useAntStore} from '../../stores/antStore'

const antStore = useAntStore()
</script>

<style scoped>
.purple-bg {
    background-image: url("../../assets/images/rewardPurpleBg.png");
    background-size: cover;
    border-radius: 20px;
}

.purple-btn {

    /* 紫粉色 */
    background: linear-gradient(-90deg, rgba(77, 11, 239, 1) 0%, rgba(214, 69, 237, 1) 100%);
    border-radius: 20px;


    /* 自动布局 */

    padding: 9px 24px 9px 24px;
}
</style>