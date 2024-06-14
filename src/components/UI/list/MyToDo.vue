<template>
  <li class="list-group-item">
    <div class="row align-items-center">
      <div class="col-7">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="form-check align-items-center">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <span class="text-decoration-line-through">Buy some bread</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <button type="button" class="btn btn-success mx-2 btn-sm">Change</button>
        <button type="button" class="btn btn-danger mx-2 btn-sm">Delete</button>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'my-to-do'
}
</script>
<style></style>
