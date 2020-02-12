import Mock from 'mockjs'
import * as loginApi from './login'
import * as userApi from './user'
  Mock.setup({
      timeout:'300-600'
  })

  //登录相关接口
  Mock.mock('/login/login','post',loginApi.login);
  Mock.mock('/login/logout','post',loginApi.logout);

  //用户信息相关接口
  Mock.mock('/user/getInfo','post',userApi.pullUserInfo);

  export default Mock;