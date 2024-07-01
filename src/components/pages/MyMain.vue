<template>
  <div class="container text-secondary">
    <p class="fs-1 text-center">
      Total my to-do: <span class="text-primary">{{ myToDoListsStore.myToDoLists.length }}</span>
    </p>
    <p class="fs-1 text-center">
      Total my notes: <span class="text-primary">{{ myNotesStore.myNotes.length }}</span>
    </p>
    <p class="fs-1 text-center">
      Total my goals: <span class="text-primary">{{ myGoalsStore.myGoals.length }}</span>
    </p>
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
