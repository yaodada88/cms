<template>
    <div class="main-app">
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dosc:"这里是右侧主界面"
        }
    }
}
</script>
<style lang="scss" scoped>
    .main-app{
        padding: 5px;
    }
</style>