<template>
  <div class="tabs-view">
    <router-link
      tag="span"
      class="tags-view-item"
      :class="isActive(tag)?'active':''"
      :to="tag.path"
      v-for="(tag,index) in visitedTabsView"
      :key="index"
    >
      <el-tag closable :disable-transitions="false" @close="handleClose(tag)">{{tag.name}}</el-tag>
    </router-link>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.addTabsView();
  },
  computed: {
    ...Vuex.mapGetters({
      visitedTabsView: "visitedTabsView"
    })
  },
  methods: {
    ...Vuex.mapActions({
      addVisitedTabsView: "addVisitedTabsView",
      delVisitedTabsView:'delVisitedTabsView'
    }),
    addTabsView() {
      const route = this.generateRout();
      if (!route) {
        return false;
      }
      this.addVisitedTabsView(this.generateRout());
    },
    generateRout() {
      if (this.$route.name) {
        return this.$route;
      }
      return false;
    },
    isActive(route) {
      return route.path == this.$route.path || route.name == this.$route.name;
    },
    handleClose(tag) {
      this.delVisitedTabsView(tag).then(tags=>{
        if(this.isActive(tag)){
          const lastTag=tags.slice(-1)[0];
          if(lastTag){
            this.$router.push(lastTag.path);
          }else{
            this.$router.push("/")
          }
        }
      })
    }
  },
  watch: {
    $route() {
      this.addTabsView();
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-view {
  height: 40px;
  padding: 5px;
  border-bottom: 1px solid #dfdfdf;
  color: #fff;
  .tags-view-item {
    display: inline-block;
    cursor: pointer;
    .el-tag {
      margin-left: 10px;
    }
  }
}
.active > .el-tag {
  background: #00b4aa;
  color: #fff;
  .el-tag__close {
    color: #fff;
  }
}
.tags-view-item.active .el-tag i.el-icon-close {
  color: #fff;
}
.active .el-tag::before {
  position: relative;
  content: "";
  background: #fff;
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>