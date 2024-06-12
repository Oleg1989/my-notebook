import { createRouter, createWebHistory } from 'vue-router'

import MyMain from '@/components/pages/MyMain.vue'
import MyToDoList from '@/components/pages/MyToDoList.vue'
import MyNotes from '@/components/pages/MyNotes.vue'
import MyPlansForTheFuture from '@/components/pages/MyPlansForTheFuture.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MyMain
    },
    {
      path: '/myLists',
      name: 'list',
      component: MyToDoList
    },
    {
      path: '/myNotes',
      name: 'notes',
      component: MyNotes
    },
    {
      path: '/myPlans',
      name: 'plans',
      component: MyPlansForTheFuture
    }
  ]
})

export default router
