import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useMyToDoListsStore } from '@/stores/myToDoListsStore'

describe('My to-do lists store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('that the myToDoLists starts at []', () => {
    const myToDoListsStore = useMyToDoListsStore()

    expect(myToDoListsStore.myToDoLists).toEqual([])
  })

  test('that the myToDoLists add to-do', () => {
    const myToDoListsStore = useMyToDoListsStore()

    myToDoListsStore.addToDo('First to-do!')

    expect(myToDoListsStore.myToDoLists).not.toEqual([])
    expect(myToDoListsStore.myToDoLists.length).toBe(1)
  })

  test('that the myToDoLists check to-do', () => {
    const myToDoListsStore = useMyToDoListsStore()

    myToDoListsStore.checkedToDo(myToDoListsStore.myToDoLists[0].id)

    expect(myToDoListsStore.myToDoLists[0].isChecked).toBe(true)
  })

  test('that the myToDoLists delete to-do', () => {
    const myToDoListsStore = useMyToDoListsStore()

    myToDoListsStore.deleteToDo(myToDoListsStore.myToDoLists[0].id)

    expect(myToDoListsStore.myToDoLists).toEqual([])
  })

  test('that the myToDoLists update to-do', () => {
    const myToDoListsStore = useMyToDoListsStore()

    myToDoListsStore.addToDo('First to-do!')
    const toDo = {
      id: myToDoListsStore.myToDoLists[0].id,
      title: 'New title'
    }
    myToDoListsStore.updateToDo(toDo)

    expect(myToDoListsStore.myToDoLists[0].title).toBe(toDo.title)
  })
})

// import { describe, it, expect } from 'vitest'

// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })
