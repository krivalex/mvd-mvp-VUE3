import { createRouter, createWebHistory } from 'vue-router'

const AdminPage = () => import('@/pages/AdminPage.vue')
const CardPage = () => import('@/pages/CardPage.vue')
const HomePage = () => import('@/pages/HomePage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/direct/:id',
    name: 'direct',
    component: CardPage,
    props: true,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
