import {constantRouterMap,asyncRouterMap} from '@/router'

//递归过滤异步路由表,返回符合用户角色权限的路由表
/** 
* @param asyncRouterMap
* @param routersMap
*/

const SET_ROUTERS = 'SET_ROUTERS';

function filterAsyncRouter(asyncRouterMap,routersMap){
    const accessedRouters = asyncRouterMap.filter(route=>{
        return routersMap.includes(route.path)
    })
    return accessedRouters
}
export default {
    state:{
        addRouters:'',
        routers:constantRouterMap
    },
    mutations:{
        [SET_ROUTERS](state,routers){
            state.addRouters=routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions:{
        GenerateRoutes({commit},routers){
            return new Promise((resolve,reject)=>{
                const {permissions:p} =routers;
                const routersMap = p.split(',');
                let accessedRouters=filterAsyncRouter(asyncRouterMap,routersMap);
                commit(SET_ROUTERS,accessedRouters);
                resolve();
            })
        }
    },
    getters:{
        addRouters:state=>state.addRouters,
        routers:state=>state.routers
    }
}