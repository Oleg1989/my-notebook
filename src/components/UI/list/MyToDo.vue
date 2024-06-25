<template>
  <li class="list-group-item" :id="id">
    <div class="row align-items-center">
      <div class="col-7">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="form-check align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                :checked="isChecked"
                @click="myToDoListsStore.checkedToDo(id)"
              />
              <span :class="isChecked ? 'text-decoration-line-through' : ''">{{ title }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <my-list-change-button
          :id="id"
          :inputTitle="title"
          :changeButtonTitle="`Change to-do?`"
        ></my-list-change-button>
        <my-delete-button
          :id="id"
          :deleteElement="myToDoListsStore.deleteToDo"
          :deleteButtonTitle="`Delete to-do?`"
        ></my-delete-button>
      </div>
    </div>
  </li>
</template>
<script>
import { useMyToDoListsStore } from '@/stores/myToDoListsStore'

export default {
  name: 'my-to-do',
  props: {
    id: String,
    title: String,
    isChecked: Boolean
  },
  setup() {
    const myToDoListsStore = useMyToDoListsStore()
    return {
      myToDoListsStore
    }
  }
}
</script>
<style></style>
