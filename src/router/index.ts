import { createRouter, createWebHistory } from 'vue-router'
import EmpleadosStack from '@/views/EmpleadosStack.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/empleados-electro'
    },
    {
      path: '/empleados-electro',
      name: 'Electro',
      component: EmpleadosStack
    }
    /*  {
      path: '/',
      name: 'home',
      component: HomeView
    }, */
    /*  {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
