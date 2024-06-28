import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyNotesStore = defineStore('myNotes', () => {
  const myNotes = ref([
    {
      id: '1',
      title: 'My things',
      date: '2024-05-20T19:12',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae minus vero, dicta est facere neque sapiente vel illo labore mollitia explicabo, eveniet cupiditate dolorum quidem obcaecati libero voluptas magnam dolores, recusandae saepe soluta nihil perspiciatis optio! Voluptates dolorem odit reiciendis sint, repudiandae illo, commodi assumenda nesciunt sit laudantium mollitia perspiciatis doloribus esse corrupti tempora quo nulla, natus dolor velit incidunt maiores! Voluptates soluta blanditiis, itaque minus in fuga corporis accusamus pariatur eaque quaerat quis voluptas iusto natus, molestias sint ut dolore temporibus ipsam quisquam at consequatur ea neque amet! Atque optio, laborum consectetur earum maiores explicabo architecto voluptas ipsa fugit.'
    }
  ])

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

  return { myNotes, addNote, deleteNote, updateNote }
})
