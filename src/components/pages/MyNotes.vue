<template>
  <div class="container text-secondary">
    <div class="row">
      <div class="col">
        <h1 class="text-center">My notes!</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2>Total my notes: {{ myNotebookStore.myNotes.length }}</h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-note></my-modal-form-note>
      </div>
    </div>
    <div>
      <my-note
        v-for="myNote of myNotebookStore.myNotes"
        :key="myNote.id"
        :title="myNote.title"
        :text="myNote.text"
        :date="myNote.date"
      ></my-note>
    </div>
  </div>
</template>
<script setup>
import { useMyNotebookStore } from '@/stores/myNotebookStore'
const myNotebookStore = useMyNotebookStore()
</script>
<style></style>
