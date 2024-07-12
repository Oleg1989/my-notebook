import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useMyGoalsStore } from '@/stores/myGoalsStore'

describe('My goals store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('that the myGoals starts at []', () => {
    const myGoalsStore = useMyGoalsStore()

    expect(myGoalsStore.myGoals).toEqual([])

    myGoalsStore.myGoals.length = 0
  })

  test('that the myGoals add goal', () => {
    const myGoalsStore = useMyGoalsStore()

    myGoalsStore.addGoal({ title: 'First goal', date: '2024-07-14T00:00' })

    expect(myGoalsStore.myGoals).not.toEqual([])
    expect(myGoalsStore.myGoals.length).toBe(1)

    myGoalsStore.myGoals.length = 0
  })

  test('that the myGoals check goal', () => {
    const myGoalsStore = useMyGoalsStore()

    myGoalsStore.addGoal({ title: 'First goal', date: '2024-07-14T00:00' })
    myGoalsStore.checkedGoal(myGoalsStore.myGoals[0].id)

    expect(myGoalsStore.myGoals[0].isChecked).toBe(true)

    myGoalsStore.myGoals.length = 0
  })

  test('that the myGoals delete goal', () => {
    const myGoalsStore = useMyGoalsStore()

    myGoalsStore.addGoal({ title: 'First goal', date: '2024-07-14T00:00' })
    myGoalsStore.deleteGoal(myGoalsStore.myGoals[0].id)

    expect(myGoalsStore.myGoals).toEqual([])

    myGoalsStore.myGoals.length = 0
  })

  test('that the myGoals update goal', () => {
    const myGoalsStore = useMyGoalsStore()

    myGoalsStore.addGoal({ title: 'First goal', date: '2024-07-14T00:00' })
    const goal = {
      id: myGoalsStore.myGoals[0].id,
      title: 'Update goal',
      text: '2024-08-14T00:00'
    }
    myGoalsStore.updateGoal(goal)

    expect(myGoalsStore.myGoals[0].title).toBe(goal.title)
    expect(myGoalsStore.myGoals[0].date).toBe(goal.date)

    myGoalsStore.myGoals.length = 0
  })
})
