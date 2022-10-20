<template>
    <div class="min-h-screen my-bg">
        <section class="my-header py-3">
            <MyHeader/>
        </section>
        <section>
            <MyMainPage/>
        </section>
    </div>
</template>

<script>
import MyHeader from '../components/my/MyHeader.vue'
import MyMainPage from '../components/my/MyMainPage.vue'
export default {
    name: "MyView",
    components: {MyMainPage, MyHeader}
}
</script>

<style scoped>
    .my-header{
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(24px);
    }

    .my-bg {
        background-image: url("../assets/images/MyBgImage.png");
        background-size: cover;
    }
</style>