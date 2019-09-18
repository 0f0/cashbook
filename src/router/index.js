import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import('@/views/login')

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }]
})


export default router
