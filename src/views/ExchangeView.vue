<template>
    <div class="min-h-screen">
        <section class="bg-gray-200 py-3">
            <MyHeader class=""/>
        </section>
        <section class="exchange-bg backdrop-brightness-50 px-2">
            <ExchangeMain/>
        </section>
    </div>
</template>

<script setup>
import MyHeader from '../components/my/MyHeader.vue'
import ExchangeMain from '../components/exchange/ExchangeMain.vue'

</script>

<style scoped>
    .exchange-bg{
        background-image: url("../assets/images/black1.png");
        background-size: cover;
        background-position: center;
    }
</style>