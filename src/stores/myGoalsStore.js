import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyGoalsStore = defineStore('myGoals', () => {
  const myGoals = ref([
    {
      id: 1,
      title: 'Buy some bread',
      date: '01.01.2025',
      isChecked: false
    }
  ])

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { myGoals }
})
