<template>
  <li class="list-group-item">
    <h6 class="fs-6 text-danger">
      Execute to - <time>{{ date }}</time>
    </h6>
    <div class="row align-items-center">
      <div class="col-12">
        <div class="row align-items-center">
          <div class="col-7">
            <div class="form-check align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                :checked="isChecked"
              />
              <span :class="isChecked ? 'text-decoration-line-through' : ''">{{ title }}</span>
            </div>
          </div>
          <div class="col-5 d-flex justify-content-end">
            <button type="button" class="btn btn-success mx-2 btn-sm">Change</button>
            <button type="button" class="btn btn-danger mx-2 btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'my-goal',
  props: {
    title: String,
    date: String,
    isChecked: Boolean
  }
}
</script>
<style></style>
