import {login,userInfo} from '@/api/login'
import {getToken,setToken,removeToken}  from '@/common/auth.js'
export default {
    namespaced:true,
    state:{
        token:getToken(),
        name:"",
        age:0,
        avatar:"",
        permissions:""
    },
    mutations:{
        setMutationsToken(state,params){
            state.token=params
        },
        getMutationUserInfo(state,params){
            state.name=params.name;
            state.age=params.age;
            state.avatar=params.avatar;
            state.permissions=params.permissions;
        }
    },
    actions:{
       getLogin({commit},userInfo){
           return new Promise((resolve,reject)=>{
            login(userInfo).then((res)=>{
                let data = res.data;
                setToken(data.token); 
                commit('setMutationsToken',data.token);
                return resolve()
            }).catch(err=>{
                return reject(err)
            })
           })
       },
       //拉取用户信息
       getUserInfo({commit}){
           return new Promise((resolve,reject)=>{
            userInfo().then((res)=>{
                let data = res.data;
                let obj = {};
                obj.name = data.name;
                obj.age=data.age;
                obj.avatar=data.avatar;
                obj.permissions = data.permissions;
                commit("getMutationUserInfo",obj);
            }).catch(err=>{
                return reject(err);
            })
           })
       }
    },
    getters:{
        token:state=>state.token,
        name:state=>state.name,
        age:state=>state.name,
        avatar:state=>state.avatar,
        permissions:state=>state.permissions
    }

}