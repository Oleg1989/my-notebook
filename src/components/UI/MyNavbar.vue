<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-light shadow p-3 m-2 bg-body rounded">
    <div class="container">
      <router-link to="/" class="navbar-brand fs-2 text-uppercase link-primary fw-bolder">{{
        $t('navbar.title')
      }}</router-link>
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
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="myLists"
              class="nav-link text-uppercase link-success fw-bold"
              aria-current="page"
              >{{ $t('navbar.list') }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="myNotes" class="nav-link text-uppercase link-success fw-bold">{{
              $t('navbar.notes')
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="myGoals" class="nav-link text-uppercase link-success fw-bold">{{
              $t('navbar.goals')
            }}</router-link>
          </li>
          <li class="nav-item d-flex justify-content-end ms-5">
            <select class="form-select w-auto" aria-label="Switch language" v-model="selected">
              <option>En</option>
              <option>Ua</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'my-navbar',
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const selected = ref(locale.value === 'en' ? 'En' : 'Ua')

    watch(selected, (lang) => {
      locale.value = lang.toLowerCase()
      localStorage.setItem('lang', lang.toLowerCase())
    })
    return {
      selected
    }
  }
}
</script>

<style></style>
