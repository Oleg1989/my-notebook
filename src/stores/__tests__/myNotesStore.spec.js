import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useMyNotesStore } from '@/stores/myNotesStore'

describe('My notes store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('that the myNotes starts at []', () => {
    const myNotesStore = useMyNotesStore()

    expect(myNotesStore.myNotes).toEqual([])

    myNotesStore.myNotes.length = 0
  })

  test('that the myNotes add note', () => {
    const myNotesStore = useMyNotesStore()

    myNotesStore.addNote({ title: 'First note', text: 'Note text' })

    expect(myNotesStore.myNotes).not.toEqual([])
    expect(myNotesStore.myNotes.length).toBe(1)

    myNotesStore.myNotes.length = 0
  })

  test('that the myNotes delete note', () => {
    const myNotesStore = useMyNotesStore()

    myNotesStore.addNote({ title: 'First note', text: 'Note text' })
    myNotesStore.deleteNote(myNotesStore.myNotes[0].id)

    expect(myNotesStore.myNotes).toEqual([])

    myNotesStore.myNotes.length = 0
  })

  test('that the myNotes update note', () => {
    const myNotesStore = useMyNotesStore()

    myNotesStore.addNote({ title: 'First note', text: 'Note text' })
    const note = {
      id: myNotesStore.myNotes[0].id,
      title: 'Update title',
      text: 'Update text'
    }
    myNotesStore.updateNote(note)

    expect(myNotesStore.myNotes[0].title).toBe(note.title)
    expect(myNotesStore.myNotes[0].text).toBe(note.text)

    myNotesStore.myNotes.length = 0
  })
})
