import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/stores/helper.js'

export const useMyGoalsStore = defineStore('myGoals', () => {
  const myGoals = ref(getData('goals'))

  // const doubleCount = computed(() => count.value * 2)

  const addGoal = (goalParams) => {
    const newGoal = {
      id: String(Date.now()),
      title: goalParams.title,
      date: goalParams.date,
      isChecked: false
    }
    myGoals.value.push(newGoal)
  }

  const checkedGoal = (id) => {
    myGoals.value.forEach((goal) => {
      if (goal.id === id) {
        goal.isChecked = !goal.isChecked
      }
    })
  }

  const deleteGoal = (id) => {
    myGoals.value = myGoals.value.filter((goal) => goal.id !== id)
  }

  const updateGoal = (goal) => {
    myGoals.value.forEach((item) => {
      if (item.id === goal.id) {
        item.title = goal.title
        item.date = goal.date
      }
    })
  }

  watch(
    () => myGoals,
    (state) => {
      localStorage.setItem('goals', JSON.stringify(state))
    },
    { deep: true }
  )

  return { myGoals, addGoal, checkedGoal, deleteGoal, updateGoal }
})
