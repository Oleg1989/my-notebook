<template>
  <div class="container text-secondary">
    <div class="row">
      <div class="col">
        <h1 v-if="myToDoListsStore.getLengthMyToDoLists" class="text-center">
          {{ $t('list.title') }}
        </h1>
        <h1 v-else class="text-center">{{ $t('list.titleEmpty') }}</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2 v-if="myToDoListsStore.getLengthMyToDoLists">
          {{ $t('main.to-do') }}
          <span class="text-primary">{{ myToDoListsStore.getLengthMyToDoLists }}</span>
        </h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-list></my-modal-form-list>
      </div>
    </div>
    <div v-if="myToDoListsStore.getLengthMyToDoLists" class="card mt-4 mb-4">
      <TransitionGroup name="list" tag="ul" class="list-group list-group-flush">
        <my-to-do
          v-for="myToDo of myToDoListsStore.myToDoLists"
          :key="myToDo.id"
          :id="myToDo.id"
          :title="myToDo.title"
          :is-checked="myToDo.isChecked"
        ></my-to-do>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import { useMyToDoListsStore } from '@/stores/myToDoListsStore'

const myToDoListsStore = useMyToDoListsStore()
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
