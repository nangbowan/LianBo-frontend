<script setup>

import HomeNavBar from '../components/home/HomeNavBar.vue'
import HomeInitPage from '../components/home/HomeInitPage.vue'
import {useAntStore} from '../stores/antStore'
import HomeExchanged from '../components/home/HomeExchange.vue'
import {onBeforeMount} from 'vue'

const antStore = useAntStore()


onBeforeMount(() => {
    if (antStore.allParts.length < 3) {
        antStore.setParts()
    }
})
</script>

<template>
    <div class="min-h-screen">
        <HomeNavBar/>
        <section>
            <HomeInitPage v-if="!antStore.isInit"/>
            <HomeExchanged v-else/>
        </section>
    </div>
</template>
