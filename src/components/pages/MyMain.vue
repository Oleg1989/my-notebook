<template>
  <div class="container text-secondary">
    <p class="fs-2 text-center">
      <router-link to="myLists" class="nav-link text-uppercase" aria-current="page"
        >Total my to-do:
        <span class="text-primary">{{ myToDoListsStore.myToDoLists.length }}</span></router-link
      >
    </p>
    <p class="fs-2 text-center">
      <router-link to="myNotes" class="nav-link text-uppercase" aria-current="page"
        >Total my notes:
        <span class="text-primary">{{ myNotesStore.myNotes.length }}</span></router-link
      >
    </p>
    <p class="fs-2 text-center">
      <router-link to="myGoals" class="nav-link text-uppercase" aria-current="page"
        >Total my goals:
        <span class="text-primary">{{ myGoalsStore.myGoals.length }}</span></router-link
      >
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
