import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TailwindView from '@/views/TailwindView.vue'
import BulmaView from '@/views/BulmaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tailwind',
      name: 'tailwind',
      component: TailwindView,
    },
    {
      path: '/bulma',
      name: 'bulma',
      component: BulmaView,
    },
  ],
})

export default router
