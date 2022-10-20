<template>
    <div class="min-h-screen">
        <section>
            <RewardNavbar title="我的任务"/>
        </section>
        <div class="mx-12">
            <section>
                <TaskMain/>
            </section>
        </div>
    </div>
</template>

<script>
import RewardNavbar from '../components/reward/RewardNavbar.vue'
import TaskMain from '../components/task/TaskMain.vue'
export default {
    name: "TaskView",
    components: {TaskMain, RewardNavbar}
}
</script>

<style scoped>

</style>