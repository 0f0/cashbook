import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const Login = () => import('@/views/login')
const Manage = () => import('@/views/manage')
const Home = () => import('@/views/home')
const Tallybook = () => import('@/views/tallybook/tallybook')
const Statement = () => import('@/views/statement/statement')
const Template = () => import('@/views/template/template')
const PersonProperty = () => import('@/views/property/personproperty')
const Classes = () => import('@/views/classes/classes')

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
        },
        {
          path: 'tallybook',
          component: Tallybook
        },
        {
          path: 'statement',
          component: Statement
        },
        {
          path: 'template',
          component: Template
        },
        {
          path: 'property',
          component: PersonProperty
        },
        {
          path: 'classes',
          component: Classes
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
