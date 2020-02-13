// 全局权限检测   路由守卫

import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {getToken} from './common/auth';
NProgress.configure({ showSpinner: false })
// 路由全局前置守卫

const whiteList = ['/login']  //白名单

router.beforeEach((to,from,next)=>{
    NProgress.start();
    if(getToken()){
        //有token访问login页面,就跳到首页
        if(to.path === '/login'){
            next({path:'/'});
            NProgress.done();
        }else{
            //有token 没有permission
            if(store.getters.permissions.length===0){
                store.dispatch('getUserInfo').then(res=>{
                    const permissions= res.permissions;
                    store.dispatch("GenerateRoutes",{permissions}).then(()=>{
                        router.addRoutes(store.getters.addRouters);
                        next({
                            ...to,
                            replace:true
                        })
                    })
                }).catch(err=>{
                    store.dispatch('logout').then(res=>{
                        next('/login')
                    })
                })
            }else{
                next();
            } 
        }
    }else{
        if(whiteList.includes(to.path)){ //白名单免密登录
            next();
        }else{
            next('/login');
            NProgress.done();
        }
    }
})

router.afterEach(()=>{
    NProgress.done();
})
