<template>
  <div class="container text-secondary">
    <div class="row">
      <div class="col">
        <h1 v-if="myGoalsStore.getLengthMyGoals" class="text-center">{{ $t('goals.title') }}</h1>
        <h1 v-else class="text-center">{{ $t('goals.titleEmpty') }}</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2 v-if="myGoalsStore.getLengthMyGoals">
          {{ $t('main.goals') }}
          <span class="text-primary">{{ myGoalsStore.getLengthMyGoals }}</span>
        </h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-goal></my-modal-form-goal>
      </div>
    </div>
    <div v-if="myGoalsStore.getLengthMyGoals" class="card mt-4 mb-4">
      <TransitionGroup name="goal" tag="ul" class="list-group list-group-flush">
        <my-goal
          v-for="myGoal of myGoalsStore.myGoals"
          :key="myGoal.id"
          :id="myGoal.id"
          :title="myGoal.title"
          :date="myGoal.date"
          :is-checked="myGoal.isChecked"
        ></my-goal>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import { useMyGoalsStore } from '@/stores/myGoalsStore'

const myGoalsStore = useMyGoalsStore()
</script>
<style>
.goal-enter-active,
.goal-leave-active {
  transition: all 0.4s ease;
}
.goal-enter-from,
.goal-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
