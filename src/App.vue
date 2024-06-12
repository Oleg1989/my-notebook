<template>
  <div>
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue'

export default {
  components: {
    MyNavbar
  }
}
</script>

<style></style>
