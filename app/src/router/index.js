import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// import layout
import AuthLayout from '@/layouts/Auth'

// import auth pages
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import VerifyAccount from '@/views/auth/VerifyAccount'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: AuthLayout,
    children: [
      {
        path: '/',
        component: Login,
        name: 'login'
      },
      {
        path: 'register',
        component: Register,
        name: 'register'
      },
      {
        path: 'verify-account',
        component: VerifyAccount,
        name: 'verifyAccount'
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
