<template>
    <div>
        <h1 class="bg-gray-800 border border-gray-600 py-2 text-white flex justify-center items-center">
            您的身份 : {{ antStore.antIdentity }}
        </h1>

        <div class="grid grid-cols-2 gap-6 pt-6 pb-12">
            <div v-for="infos in taskStore.tasks" class="h-64 bg-gray-800 rounded-xl text-white">
                <img class="w-full h-[66%] rounded-xl" :src="infos.imageUrl" alt="No found"/>
                <h1 class="text-xs text-center py-3">{{ infos.description }}</h1>
                <div class="mx-2 text-sm flex justify-between items-center">
                    <div class="flex items-center opacity-70">
                        <img class="w-4 h-4 mr-1" src="../../assets/images/svgs/taskNotification.png" alt=""/>
                        {{ infos.finished === infos.quantity ? '已' : '未' }}完成
                        ({{ infos.finished }}/{{ infos.quantity }})
                    </div>
                    <div>
                        <IconRight my-class="h-8 w-8" :is-finished="infos.finished === infos.quantity"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {useAntStore} from '../../stores/antStore'
import {useTaskStore} from '../../stores/taskStore'
import {onMounted} from 'vue'
import IconRight from '../icons/IconRight.vue'

const antStore = useAntStore()
const taskStore = useTaskStore()

onMounted(() => {
    console.log('task', taskStore.tasks)
})
</script>

<style scoped>

</style>