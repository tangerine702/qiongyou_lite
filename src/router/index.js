import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import Layout from '../views/layout/Layout.vue'
import Login from '../views/login/Login.vue'

import Strategy from '../views/community/Strategy.vue'
import And from '../views/community/and.vue'

// import { component } from 'vue/types/umd'

//import { component } from 'vue/types/umd'
//const About = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const Destination = () =>import('../views/destination/Index.vue')
const Travel = () =>import('../views/travel/Travel.vue')
const Community = () =>import('../views/community/Community.vue')



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/dest',
        //name: 'about',
        component: Destination,
        meta:{isLogin:true}
      },
      {
        path: '/travel',
        //name: 'about',
        component: Travel ,
        meta:{isLogin:true}
      },
      {
        path: '/community',
        //name: 'about',
        component: Community ,
        meta:{isLogin:true},
        children:[
          {path:'/community/strategy',component:Strategy},
          {path:'/community/and',component:And}
        ],redirect:'/community/strategy'
      },
      
    ]
  },
  
  {
    path:'/login',
    component:Login
  },
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})
//路由全局守卫
router.beforeEach((to,from,next)=>{
  //判断需不需要登录
  if(to.meta.isLogin == true){
    //next('/login')
    next()
  }else{
    next()
  }
})

export default router
