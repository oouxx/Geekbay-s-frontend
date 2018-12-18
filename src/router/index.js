import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/layout'
import login from '../views/login/login'
import register from '../views/login/register'
import canFind from '../views/errorPage/404'
import softwareRouter from './software'
import programRouter from './program'
import experienceRouter from './experience'
import tagList from '../views/tag/index'
import forgetPassword from '../views/forget-passwd/index'
import searchResult from '../components/search/searchResult'
import opensourceRouter from './opensource'
import homeList from '../views/home/index'
// 注册路由
Vue.use(Router)

// 配置路由
var router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: layout,
      redirect: '/home/index',
      children:[
        {
          path: 'index',
          component: homeList
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/forget-passwd',
      component: forgetPassword
    },
    {
      path: '/404',
      component: canFind
    },
    softwareRouter,
    programRouter,
    experienceRouter,
    opensourceRouter,
    {
      path: '/search/:keyword',
      component: searchResult
    },
    {
      path: '/tag',
      component: tagList
    }
  ]
})
// 抛出路由
export default router
