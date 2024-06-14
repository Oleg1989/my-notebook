<template>
  <nav class="navbar navbar-expand-lg bg-light shadow p-3 m-2 bg-body rounded">
    <div class="container">
      <router-link to="/" class="navbar-brand fs-2 text-uppercase">My notebook</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="myLists" class="nav-link text-uppercase" aria-current="page"
              >My to-do list</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="myNotes" class="nav-link text-uppercase">My notes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="myPlans" class="nav-link text-uppercase"
              >My plans for the future</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'my-navbar'
}
</script>

<style></style>
