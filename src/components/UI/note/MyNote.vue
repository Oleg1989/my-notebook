<template>
  <li class="list-group-item" :id="id">
    <div class="row align-items-center">
      <div class="col-7">
        <h5 class="card-title">{{ title }}</h5>
      </div>
      <div class="col-5 text-end">
        <time class="fw-lighter">{{ date }}</time>
      </div>
    </div>
    <p class="card-text">{{ text }}</p>
    <div class="d-flex justify-content-end">
      <my-note-change-button
        :id="id"
        :inputTitle="title"
        :inputText="text"
        :changeButtonTitle="$t('formTitle.changeNote')"
      ></my-note-change-button>
      <my-delete-button
        :id="id"
        :deleteElement="myNotesStore.deleteNote"
        :deleteButtonTitle="$t('formTitle.deleteNote')"
      ></my-delete-button>
    </div>
  </li>
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
<style>
p {
  white-space: pre-wrap;
}
</style>
