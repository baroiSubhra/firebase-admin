import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashbaordView.vue'
import localstorage from '../utils/localstorage_helper'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requires_auth: true
      }
    }
  ]
})

// Route guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requires_auth)) {
    if (localstorage.is_token_valid()) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
