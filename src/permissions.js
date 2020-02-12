// 全局权限检测   路由守卫

import router from './router';
import store from './store';
import {getToken} from './common/auth';

// 路由全局前置守卫

const whiteList = ['/login']  //白名单

router.beforeEach((to,from,next)=>{
    if(getToken()){
        //有token访问login页面,就跳到首页
        if(to.path === '/login'){
            next({path:'/'});
        }else{
            next();
        }
    }else{
        if(whiteList.includes(to.path)){ //白名单免密登录
            next();
        }else{
            next('/login')
        }
    }
})

