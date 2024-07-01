<template>
  <div class="container text-secondary">
    <div class="row">
      <div class="col">
        <h1 v-if="myGoalsStore.myGoals.length" class="text-center">My goals for the future!</h1>
        <h1 v-else class="text-center">My list goals for the future is empty!</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2 v-if="myGoalsStore.myGoals.length">
          Total my goals: <span class="text-primary">{{ myGoalsStore.myGoals.length }}</span>
        </h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-goal></my-modal-form-goal>
      </div>
    </div>
    <div v-if="myGoalsStore.myGoals.length" class="card mt-4">
      <ul class="list-group list-group-flush">
        <my-goal
          v-for="myGoal of myGoalsStore.myGoals"
          :key="myGoal.id"
          :id="myGoal.id"
          :title="myGoal.title"
          :date="myGoal.date"
          :is-checked="myGoal.isChecked"
        ></my-goal>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useMyGoalsStore } from '@/stores/myGoalsStore'

const myGoalsStore = useMyGoalsStore()
</script>
<style></style>
