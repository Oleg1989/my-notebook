<template>
  <div class="card w-100 mt-4">
    <div class="card-body">
      <div class="row">
        <div class="col-9">
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <div class="col-3 text-end">
          <time class="fw-lighter">{{ date }}</time>
        </div>
      </div>
      <p class="card-text">{{ text }}</p>
    </div>
    <div class="d-flex justify-content-end m-2">
      <button type="button" class="btn btn-success mx-2 btn-sm">Change</button>
      <button type="button" class="btn btn-danger mx-2 btn-sm">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-note',
  props: {
    title: String,
    text: String,
    date: String
  }
}
</script>
<style></style>
