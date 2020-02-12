import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout/layout'
Vue.use(VueRouter)

const routes = [
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/",
      redirect:"/home",
      name:"home",
      component:()=>import("@/views/home")
    }
]

const router = new VueRouter({
  routes
})

export default router
