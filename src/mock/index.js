import Mock from 'mockjs'
import * as loginApi from './login'
import * as userApi from './user'
import * as homepageAPI from './homepage'
  Mock.setup({
      timeout:'300-600'
  })

  //登录相关接口
  Mock.mock('/login/login','post',loginApi.login);
  Mock.mock('/login/logout','post',loginApi.logout);

  //用户信息相关接口
  Mock.mock('/user/getInfo','post',userApi.pullUserInfo);

  // 首页 homepage 相关的接口
Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal)
// 首页 homepageDetailItem 接口
Mock.mock('/homepage/detailItem', 'post', homepageAPI.getHomeDetailItem)
// 首页 investmentRank 接口
Mock.mock('/homepage/investmentRank', 'post', homepageAPI.getHomeInvestmentRank)

  export default Mock;