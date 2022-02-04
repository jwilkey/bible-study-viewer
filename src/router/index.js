import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Overview from '../views/Overview'
import BookChooser from '../views/BookChooser'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: BookChooser
  },
  {
    path: '/overview',
    name: 'overview',
    component: Overview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
