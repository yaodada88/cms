<template>
  <div class="top-navbar">
    <el-menu  mode="horizontal" text-color="#fff">
      <router-link to="/home">
        <el-menu-item class="topTitle">{{topTitle}}</el-menu-item>
      </router-link>
      <div class="avatar-container">
        <el-dropdown trigger="click">
          <div class="avatar-wrapper">
            <img class="user-avatar" src="../../public/common/img/avatar/0.jpg" />
            <div class="username-wrapper">
              <span class="user-name">{{name}}</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link class="inlineBlock" to="/">
              <el-dropdown-item>{{userCenter}}</el-dropdown-item>
            </router-link>
            <router-link class="inlineBlock" to="/">
              <el-dropdown-item>{{cenalImg}}</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="logout">
              <span style="display:block;">{{loginOut}}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  data() {
    return {
      topTitle: "后台管理系统",
      userCenter:'个人中心',
      cenalImg:'修改头像',
      loginOut:'退出登录'
    };
  },
  computed: {
    ...Vuex.mapGetters({
      name:'name',
      avatar:'avatar'
    })
  },
  methods: {
      ...Vuex.mapActions({
          userLogout:'getLogout'
      }),
      logout(){
          this.userLogout().then(res=>{
              location.reload();
          }).catch(err=>{
              console.log(err);
          })
      }
  }
};
</script>
<style lang="scss" scoped>
.top-navbar {
  position: fixed;
  width: 100%;
  z-index: 10;
  .el-menu {
    border-bottom: none !important;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#1278f6),
      to(#00b4aa)
    );
    background-image: -webkit-linear-gradient(
      45deg,
      #1278f6,
      #00b4aa 50%,
      #1278f6
    );
    background-image: -moz-linear-gradient(
      45deg,
      #1278f6,
      #00b4aa 50%,
      #1278f6
    );
    background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
    .topTitle {
      font-size: 20px;
    }
    .avatar-container {
      position: absolute;
      top: 15px;
      right: 40px;
      .user-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .username-wrapper {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #fff;
        margin-left: 6px;
        cursor: pointer;
      }
    }
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background: inherit !important;
  }
}
</style>
