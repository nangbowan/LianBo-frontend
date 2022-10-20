<template>
    <div class="min-h-screen">
        <section>
            <RewardNavbar title="我的奖励"/>
        </section>
        <div class="mx-12">
            <section>
                <RewardMain/>
            </section>
        </div>
    </div>
</template>

<script setup>
import RewardNavbar from '../components/reward/RewardNavbar.vue'
import RewardMain from '../components/reward/RewardMain.vue'
</script>

<style scoped>

</style>