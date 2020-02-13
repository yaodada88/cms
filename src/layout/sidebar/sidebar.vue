<template>
  <div class="left-sidebar">
    <el-menu
       mode="vertical"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
       :collapse="isCollapse"
    >
      <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
    </el-menu>
  </div>
</template>
<script>
import Vuex from 'vuex';
import SidebarItem from './sidebar-item'
export default {
  components:{
    SidebarItem
  },
   data() {
      return {
        isCollapse: false
      }
    },
  computed:{
    ...Vuex.mapGetters({
      routers:'routers'
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.left-sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  min-height: 500px;
  left: 0;
  top: 56px;
  .el-menu {
    height: 100%;
  }
}
</style>