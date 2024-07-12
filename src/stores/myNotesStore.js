import { ref, watch, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useMyNotesStore = defineStore('myNotes', () => {
  const myNotes = ref([])

  const getLengthMyNotes = computed(() => myNotes.value.length)

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
    myNotes,
    (state) => {
      localStorage.setItem('notes', JSON.stringify(state))
    },
    { deep: true }
  )

  onMounted(() => {
    const dataString = JSON.parse(localStorage.getItem('notes'))
    if (dataString) myNotes.value = dataString
  })

  return { myNotes, getLengthMyNotes, addNote, deleteNote, updateNote }
})
