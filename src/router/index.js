import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/recommend'
      },
      {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('../views/recommend')
      }, {
        path: '/singer',
        name: 'Singer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/singer_page')
      }, {
        path: '/rank',
        name: 'Rank',
        component: () => import('../views/rank_page')
      }, {
        path: '/search',
        name: 'Search',
        component: () => import('../views/search_page')
      }]
  }, {
    path: '/user',
    name: 'User',
    component: () => import('../views/user')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
