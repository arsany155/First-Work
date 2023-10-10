import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SearchView from '../views/SearchView.vue'
import ArticalView from '../views/ArticalView.vue'
import NotFound from '../views/NotFound.vue'
import MostRead from '../views/MostRead.vue'
import TheNewest from '../views/TheNewest.vue'
import ArticalType from '../views/ArticalType.vue'
import Register from '../views/Autentication/Register.vue'
import Login from '../views/Autentication/Login.vue'
import ResetPassword from '../views/Autentication/ResetPassword.vue'
import ForgetPassword from '../views/Autentication/ForgetPassword.vue'
import OTP from '../views/Autentication/OTP.vue'
import Dashboard from '../views/Dashboard.vue'
import Add from '../views/Add.vue'
import HomeDashboard from '../views/HomeDashboard.vue'
import profile from '../views/profile.vue'
import Tables from '../views/Tables.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUsView
  },

  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  
  {
    path: '/artical/:id',
    name: 'artical',
    component: ArticalView,
    props:true
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },

  {
    path: '/MostRead',
    name: 'MostRead',
    component: MostRead
  },

  {
    path: '/TheNewest',
    name: 'TheNewest',
    component: TheNewest
  },

  {
    path: '/ArticalType',
    name: 'ArticalType',
    component: ArticalType
  },

  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  
  {
    path: '/Login',
    name: 'Login  ',
    component: Login  
  },

  {
    path: '/ResetPassword',
    name: 'ResetPassword  ',
    component: ResetPassword  
  },

  {
    path: '/ForgetPassword',
    name: 'ForgetPassword  ',
    component: ForgetPassword  
  },

  {
    path: '/OTP',
    name: 'OTP  ',
    component: OTP  
  },

  {
    path: '/Dashboard',
    name: 'Dashboard  ',
    component: Dashboard,
    children:[
      {
        path: '/HomeDashboard',
        name: 'HomeDashboard  ',
        component: HomeDashboard
      },
    
      {
        path: '/profile',
        name: 'profile  ',
        component: profile
      },
    
      {
        path: '/Tables',
        name: 'Tables  ',
        component: Tables,
        children:[
          {
            path: '/Add',
            name: 'Add  ',
            component: Add
          } 
        ]
      },
    ]
  },

  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
