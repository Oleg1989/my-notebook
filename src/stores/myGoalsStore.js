import { ref, watch, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useMyGoalsStore = defineStore('myGoals', () => {
  const myGoals = ref([])

  const getLengthMyGoals = computed(() => myGoals.value.length)

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
    myGoals,
    (state) => {
      localStorage.setItem('goals', JSON.stringify(state))
    },
    { deep: true }
  )

  onMounted(() => {
    const dataString = JSON.parse(localStorage.getItem('goals'))
    if (dataString) myGoals.value = dataString
  })

  return { myGoals, getLengthMyGoals, addGoal, checkedGoal, deleteGoal, updateGoal }
})
