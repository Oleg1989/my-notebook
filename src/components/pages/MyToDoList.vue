u
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-center">My to-do list!</h1>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-8">
        <h2>Total my to-do list:</h2>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <my-modal-form-list></my-modal-form-list>
      </div>
    </div>
    <div class="card mt-4">
      <ul class="list-group list-group-flush">
        <my-to-do></my-to-do>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
