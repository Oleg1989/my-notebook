<template>
  <li class="list-group-item">
    <h6 class="fs-6 text-danger">
      Execute to - <time>{{ date }}</time>
    </h6>
    <div class="row align-items-center">
      <div class="col-12">
        <div class="row align-items-center">
          <div class="col-7">
            <div class="form-check align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                :id="'flexCheckDefault' + id"
                :checked="isChecked"
                @click="myGoalsStore.checkedGoal(id)"
              />
              <span :class="isChecked ? 'text-decoration-line-through' : ''">{{ title }}</span>
            </div>
          </div>
          <div class="col-5 d-flex justify-content-end">
            <my-goal-change-button
              :id="id"
              :inputDate="date"
              :inputTitle="title"
              :changeButtonTitle="`Change goal?`"
            ></my-goal-change-button>
            <my-delete-button
              :id="id"
              :deleteElement="myGoalsStore.deleteGoal"
              :deleteButtonTitle="`Delete goal?`"
            ></my-delete-button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import { useMyGoalsStore } from '@/stores/myGoalsStore'

export default {
  name: 'my-goal',
  props: {
    id: String,
    title: String,
    date: String,
    isChecked: Boolean
  },
  setup() {
    const myGoalsStore = useMyGoalsStore()
    return {
      myGoalsStore
    }
  }
}
</script>
<style></style>
