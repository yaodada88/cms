<template>
    <div class="app-wrapper">
        <Sidebar/>
        <Navbar/>
        <div class="main-container">
            <Tabsview />
            <AppMain />
        </div>
    </div>
</template>
<script>
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar';
import Tabsview from './tabs-view';
import AppMain from './app-main'
export default {
    components:{
        Sidebar,
        Navbar,
        Tabsview,
        AppMain
    }
}
</script>
<style lang="scss" scoped>
    .app-wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        .main-container{
            padding-left: 201px;
            padding-top: 61px;
        }
    }
</style>