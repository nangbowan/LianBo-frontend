<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {onBeforeMount} from 'vue'
import {useAntStore} from './stores/antStore.js'

const antStore = useAntStore()

onBeforeMount(() => {
    antStore.init_Antcahin()

    if (localStorage.getItem('isLogin')) { //自动连接
        antStore.connectAntchain()
    }
})

</script>

<template>
    <!--
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </header>
    -->
    <div class="allBgImage">
        <RouterView class="overflow-x-hidden max-w-[420px] mx-auto"/>
    </div>


</template>

<style>
.gen-btn {
    background: rgb(32, 23, 182);
    box-shadow: inset 4px 12px 40px rgba(151, 71, 255, 0.4), 0px 12px 40px rgba(35, 24, 212, 0.32);
    border-radius: 24px;
}

.allBgImage{
    background-image: url("./assets/images/wholeBg.jpg");
    background-size: cover;
}

</style>
