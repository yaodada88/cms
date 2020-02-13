import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout/layout'
Vue.use(VueRouter)

export const constantRouterMap = [
    {
      path:"/login",
      name:"login",
      hidden: true,
      component:Login
    },
    {
      path:"/",
      redirect:"/home",
      hidden: true,
      component:Layout,
      children:[
        {
          path:"home",
          name:"home",
          component:()=>import("@/views/home"),
          meta:{
            title:"首页"
          }
        }
      ]
    },
    {
      path:"/introduction",
      component:Layout,
      redirect:"/introduction/index",
      meta:{
        icon:'help',
        title:"简述"
      },
      children:[
        {
          path:"index",
          name:"Introduction",
          component:()=>import("@/views/introduction/index"),
          meta:{
            icon:"help",
            title:"简述"
          }
        }
      ]
    }
]

const router = new VueRouter({
  routes:constantRouterMap
})

export const asyncRouterMap=[
  {
    path:"/excel",
    component:Layout,
    redirect:"/excel/export-excel",
    alwaysShow:true,
    meta:{
      icon:'date',
      title:"表格"
    },
    children:[
      {
        path:"export-excel",
        name:"export-excel",
        component:()=>import("@/views/excel/export-excel"),
        meta:{
          icon:"download",
          title:"导出表格"
        }
      }
    ]
  },
  {
    path:"/clipboard",
    component:Layout,
    redirect:"index",
    meta:{
      icon:"document",
      title:"剪切板"
    },
    children:[
      {
        path:'index',
        name:"clipboard",
        component:()=>import("@/views/clipboard"),
        meta:{
          icon:"document",
          title:"剪切板"
        }
      }
    ]
  },
  {
    path:"/theme",
    component:Layout,
    meta:{
      icon:"goods",
      title:"主题"
    },
    children:[
      {
        path:'index',
        name:"theme",
        component:()=>import("@/views/theme"),
        meta:{
          icon:'goods',
          title:"主题"
        }
      }
    ]
  }
]



export default router
