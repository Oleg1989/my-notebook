import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyToDoListsStore = defineStore('myToDoLists', () => {
  const myToDoLists = ref([
    {
      id: '1',
      title: 'Buy some bread',
      isChecked: true
    },
    {
      id: '2',
      title: 'Buy some sugar',
      isChecked: true
    }
  ])

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

  const getToDo = (id) => {
    const toDo = myToDoLists.value.find((toDo) => toDo.id === id)
    return toDo
  }

  const updateToDo = (toDo) => {
    myToDoLists.value.forEach((item) => {
      if (item.id === toDo.id) {
        item.title = toDo.title
      }
    })
  }

  return { myToDoLists, addToDo, checkedToDo, deleteToDo, getToDo, updateToDo }
})
