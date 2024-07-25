<template>
  <li class="list-group-item" :id="id">
    <h6 class="fs-6 text-danger">
      {{ $t('executeTo') }} <time>{{ date }}</time>
    </h6>
    <div class="align-items-center">
      <div class="row align-items-center">
        <div class="col-12">
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
      </div>
      <div class="d-flex justify-content-end">
        <my-goal-change-button
          :id="id"
          :inputDate="date"
          :inputTitle="title"
          :changeButtonTitle="$t('formTitle.changeGoal')"
        ></my-goal-change-button>
        <my-delete-button
          :id="id"
          :deleteElement="myGoalsStore.deleteGoal"
          :deleteButtonTitle="$t('formTitle.deleteGoal')"
        ></my-delete-button>
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
