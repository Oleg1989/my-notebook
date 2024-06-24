<template>
  <div class="container text-secondary">
    <p class="fs-1 text-center">Total my to-do to-do: {{ myToDoListsStore.myToDoLists.length }}</p>
    <p class="fs-1 text-center">Total my notes: {{ myNotesStore.myNotes.length }}</p>
    <p class="fs-1 text-center">Total my goals: {{ myGoalsStore.myGoals.length }}</p>
  </div>
</template>
<script setup>
import { useMyToDoListsStore } from '@/stores/myToDoListsStore'
import { useMyNotesStore } from '@/stores/myNotesStore'
import { useMyGoalsStore } from '@/stores/myGoalsStore'
const myToDoListsStore = useMyToDoListsStore()
const myNotesStore = useMyNotesStore()
const myGoalsStore = useMyGoalsStore()
</script>
<style></style>
