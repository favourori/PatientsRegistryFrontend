import Vue from 'vue'
import VueRouter from 'vue-router'

// import layout
import AuthLayout from '@/layouts/Auth'
import DefaultLayout from '@/layouts/Default'

// import auth pages
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import VerifyAccount from '@/views/auth/VerifyAccount'

// import dashboard views
import UserDashboard from '@/views/dashboard/UserDashboard'

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
    path: '/dashboard', component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        component: UserDashboard,
        name: 'userDashboard'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
