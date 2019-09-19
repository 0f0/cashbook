import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const Login = () => import('@/views/login')
const Manage = () => import('@/views/manage')
const Home = () => import('@/views/home')

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/manage',
      component: Manage,
      children: [{
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          component: Home,
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
