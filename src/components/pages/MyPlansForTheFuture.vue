<template>
  <div class="container text-secondary">
    <div class="row">
      <div class="col">
        <h1 class="text-center">My plans for the future!</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2>Total my plans for the future: {{ myNotebookStore.myPlans.length }}</h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-plan></my-modal-form-plan>
      </div>
    </div>
    <div class="card mt-4">
      <ul class="list-group list-group-flush">
        <my-plan
          v-for="myPlan of myNotebookStore.myPlans"
          :key="myPlan.id"
          :title="myPlan.title"
          :date="myPlan.date"
          :is-checked="myPlan.isChecked"
        ></my-plan>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useMyNotebookStore } from '@/stores/myNotebookStore'
const myNotebookStore = useMyNotebookStore()
</script>
<style></style>
