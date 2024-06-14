<template>
  <li class="list-group-item">
    <h6 class="fs-6 text-danger">Execute to - <time>01.01.2025</time></h6>
    <div class="row align-items-center">
      <div class="col-12">
        <div class="row align-items-center">
          <div class="col-7">
            <div class="form-check align-items-center">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <span class="text-decoration-line-through">Learn English</span>
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
  name: 'my-plan'
}
</script>
<style></style>
