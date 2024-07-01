import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/stores/helper.js'

export const useMyNotesStore = defineStore('myNotes', () => {
  const myNotes = ref(getData('notes'))

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const addNote = (note) => {
    const newNote = {
      id: String(Date.now()),
      title: note.title,
      date:
        String(new Date().getFullYear()) +
        '-' +
        String(new Date().getMonth() + 1) +
        '-' +
        String(new Date().getDate()) +
        'T' +
        String(new Date().getHours()) +
        ':' +
        String(new Date().getMinutes()),
      text: note.text
    }
    myNotes.value.push(newNote)
  }

  const deleteNote = (id) => {
    myNotes.value = myNotes.value.filter((note) => note.id !== id)
  }

  const updateNote = (note) => {
    myNotes.value.forEach((item) => {
      if (item.id === note.id) {
        item.title = note.title
        item.text = note.text
      }
    })
  }

  watch(
    () => myNotes,
    (state) => {
      localStorage.setItem('notes', JSON.stringify(state))
    },
    { deep: true }
  )

  return { myNotes, addNote, deleteNote, updateNote }
})
