<template>
    <div>
        <div class="grid grid-cols-2 gap-6 pt-12 pb-12">
            <div v-for="parts in antStore.allParts">
                <div class="h-48 bg-gray-300/70 rounded-xl text-white">
                    <img class="w-full rounded-x rounded-xl" :src="parts.imageUrl" alt="No found"/>
                </div>

                <div class="flex justify-center">
                    <button @click="antStore.changeOnePart(parts.trait_type)"
                            class=" choose-btn text-center text-lg py-2 w-full mx-3 rounded-lg mt-2">
                        选择: {{ transformValueType(parts.value) }}#{{ transformTraitType(parts.trait_type) }}
                    </button>
                </div>
            </div>
            <div class="text-center my-auto text-white">
                1. 轻触页面外以退出
                <br/>
                2. 点击图片即选择
            </div>
        </div>
    </div>
</template>

<script setup>

import {useAntStore} from '../../stores/antStore'
import {useTaskStore} from '../../stores/taskStore'
import {computed, onBeforeMount, onMounted} from 'vue'
import IconRight from '../icons/IconRight.vue'

const antStore = useAntStore()

onBeforeMount(() => {
    if (antStore.allParts.length < 3) {
        antStore.setParts()
    }
})

onMounted(async () => {
    // console.log('task', taskStore.tasks)
})

const transformTraitType = (type) => {
    switch (type) {
        case 'background':
            return '背景'
        case 'clothes':
            return '衣服'
        case 'hair':
            return '头发'
        case 'hat':
            return '帽子'
        case 'accessories':
            return '眼镜'
        default:
            return type
    }
}

const transformValueType = (type) => {
    switch (type) {
        case 'antchain':
            return '蚂蚁链'
        case 'carbon':
            return '碳中和'
        default:
            return type
    }
}
</script>

<style scoped>
.choose-btn {
    background: linear-gradient(-90deg, rgba(123, 30, 238, 1) 0%, rgba(52, 49, 102, 1) 100%);
}
</style>