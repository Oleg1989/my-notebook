<template>
  <div class="container text-secondary">
    <p class="fs-1 text-center">Total my to-do to-do: {{ myNotebookStore.myToDoLists.length }}</p>
    <p class="fs-1 text-center">Total my notes: {{ myNotebookStore.myNotes.length }}</p>
    <p class="fs-1 text-center">Total my plans: {{ myNotebookStore.myNotes.length }}</p>
  </div>
</template>
<script setup>
import { useMyNotebookStore } from '@/stores/myNotebookStore'
const myNotebookStore = useMyNotebookStore()
</script>
<style></style>
