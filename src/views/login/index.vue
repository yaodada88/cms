<template>
  <div class="loginWrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix cardHead">
        <img src="../../../public/common/img/login-logo.png" alt />
        <h2 class="login-title">后台管理系统</h2>
      </div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off" @keyup.enter.native="goToPwdInput"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off" ref="pwd" @keyup.enter.native="onLogin('loginForm')"></el-input>
        </el-form-item>
        <el-form-item label="记住密码" label-width="80px">
          <el-switch v-model="remember" ></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  name:"login",
  data() {
    const validatePwd = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      remember:false,
      loading:false,
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { required: true, trigger: "blur" },
          { required: true, trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { required: true, trigger: "blur", validator: validatePwd },
          { required: true, trigger: "change", validator: validatePwd }
        ]
      }
    };
  },
  created(){
    if(window.sessionStorage.getItem("remember")=='true'){
      this.loginForm.username=window.sessionStorage.getItem("username");
      this.loginForm.password=window.sessionStorage.getItem("password");
    }else{
      this.loginForm.username='';
      this.loginForm.password='';
    }
  },
  methods: {
    ...Vuex.mapActions({
      getLogin:"user/getLogin"
    }),
    //用户名输入框回车后切换到密码输入框
    goToPwdInput(){
      this.$refs.pwd.$el.getElementsByTagName("input")[0].focus();
    },
    onLogin(){
      this.$refs.pwd.$el.getElementsByTagName("input")[0].blur();
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          this.loading=true;
          this.getLogin(this.loginForm).then((res)=>{
            if(this.remember){
              window.sessionStorage.setItem("username",this.loginForm.username);
              window.sessionStorage.setItem("password",this.loginForm.password);
              window.sessionStorage.setItem("remember",true);
            }else{
              window.sessionStorage.setItem("username",'');
              window.sessionStorage.setItem("password",'');
              window.sessionStorage.setItem("remember",false);
            }
            this.loading=false;
            this.$router.push({ path: '/' })
          }).catch(err=>{
            this.loading=false;
          })
        }else{
          return false;
        }
      })
    }
  }
};
</script>
<style lang="scss"  scoped>
.loginWrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: mix(#494166, #a5b8c2) url(../../../public/common/img/login-bg.jpg)
    center no-repeat;
  background-size: cover;
  .el-card {
    width: 400px;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -200px;
    background: #fff;
    .cardHead {
      text-align: center;
    }
    .el-button--primary {
      width: 100%;
    }
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}
</style>