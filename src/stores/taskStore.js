import {ref, computed, toRaw} from 'vue'
import {defineStore} from 'pinia'

let details = [
    {description: '小红书分享web3.0小知识', quantity: 1, finished: 0},
    {description: '日常打卡学习', quantity: 1, finished: 0},
    {description: '朋友圈转发专属推文', quantity: 2, finished: 0},
    {description: '探索蚂蚁链小世界', quantity: 1, finished: 1},
    {description: '分享每日知识海报', quantity: 1, finished: 1},
]


export const useTaskStore = defineStore('useTaskStore', () => {
    let tasks = []

    for (let i = 1; i <= 5; i++) {
        tasks.push({
            imageUrl: `/src/assets/images/tasks/task_${i}.png`,
            ...details[i - 1]
        })
    }


    return {
        tasks: ref(tasks)
    }
})
