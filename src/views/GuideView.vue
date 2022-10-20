<template>
    <div class="min-h-screen bg-white CangErShuYuan">
        <section>
            <GuideHeader/>
        </section>
        <div class="mx-12">
            <section class="mt-12">
                <div class="mb-4 h-1 bg-gray-400/50"></div>
                <GuideMain/>
            </section>
        </div>
    </div>
</template>

<script setup>
import GuideHeader from '../components/guide/GuideHeader.vue'
import GuideMain from '../components/guide/GuideMain.vue'
</script>

<style scoped>

</style>