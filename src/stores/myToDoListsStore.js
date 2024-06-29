import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/stores/helper.js'

export const useMyToDoListsStore = defineStore('myToDoLists', () => {
  const myToDoLists = ref(getData('lists'))

  // const getLengthMyToDoLists = computed(() => myToDoLists.value.length)

  const addToDo = (title) => {
    const newToDo = {
      id: String(Date.now()),
      title: title,
      isChecked: false
    }
    myToDoLists.value.push(newToDo)
  }

  const checkedToDo = (id) => {
    myToDoLists.value.forEach((toDo) => {
      if (toDo.id === id) {
        toDo.isChecked = !toDo.isChecked
      }
    })
  }

  const deleteToDo = (id) => {
    myToDoLists.value = myToDoLists.value.filter((toDo) => toDo.id !== id)
  }

  const updateToDo = (toDo) => {
    myToDoLists.value.forEach((item) => {
      if (item.id === toDo.id) {
        item.title = toDo.title
      }
    })
  }

  watch(
    () => myToDoLists,
    (state) => {
      localStorage.setItem('lists', JSON.stringify(state))
    },
    { deep: true }
  )
  return { myToDoLists, addToDo, checkedToDo, deleteToDo, updateToDo }
})
