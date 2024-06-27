<template>
  <div class="card w-100 mt-4">
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <div class="col-3 text-end">
          <time class="fw-lighter">{{ date }}</time>
        </div>
      </div>
      <p class="card-text">{{ text }}</p>
    </div>
    <div class="d-flex justify-content-end m-2">
      <my-note-change-button
        :id="id"
        :inputTitle="title"
        :inputText="text"
        :changeButtonTitle="`Change note?`"
      ></my-note-change-button>
      <my-delete-button
        :id="id"
        :deleteElement="myNotesStore.deleteNote"
        :deleteButtonTitle="`Delete note?`"
      ></my-delete-button>
    </div>
  </div>
</template>
<script>
import { useMyNotesStore } from '@/stores/myNotesStore'

export default {
  name: 'my-note',
  props: {
    id: String,
    title: String,
    text: String,
    date: String
  },
  setup() {
    const myNotesStore = useMyNotesStore()
    return {
      myNotesStore
    }
  }
}
</script>
<style></style>
