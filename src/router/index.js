import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ThreadView from '@/views/ThreadView'
import NotFound from '@/views/NotFound'

import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: ThreadView,
    beforeEnter: (to, from, next) => {
      // prettier-ignore
      return sourceData.threads.find((thread) => thread.id === to.params.id)
        ? next()
        : next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
