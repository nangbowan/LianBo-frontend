import {createRouter, createWebHistory} from 'vue-router'
import StartView from '../views/StartView.vue'
import {useAntStore} from '../stores/antStore.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '/',
            component: StartView
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/my',
            name: 'my',
            component: () => import('../views/MyView.vue')
        },
        {
            path: '/reward',
            name: 'reward',
            component: () => import('../views/RewardView.vue')
        },
        {
            path: '/task',
            name: 'task',
            component: () => import('../views/TaskView.vue')
        },
        {
            path: '/guide',
            name: 'guide',
            component: () => import('../views/GuideView.vue')
        },
        {
            path:'/exchange',
            name:'exchange',
            component: () => import('../views/ExchangeView.vue')
        },
        {
            path:'/share',
            name:'share',
            component:()=>import('../views/ShareView.vue')
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(!localStorage.getItem('isLogin') && to.name !== '/'){
        next({
            path:'/'
        })
    }else{
        next()
    }
})

export default router
