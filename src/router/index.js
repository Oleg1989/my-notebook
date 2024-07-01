import { createRouter, createWebHistory } from 'vue-router'

import MyMain from '@/components/pages/MyMain.vue'
import MyToDoList from '@/components/pages/MyToDoList.vue'
import MyNotes from '@/components/pages/MyNotes.vue'
import MyGoals from '@/components/pages/MyGoals.vue'

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
      path: '/myGoals',
      name: 'goals',
      component: MyGoals
    }
  ]
})

export default router
