<template>
  <div class="layout">
    <header-layout />
    <div class="layout__wrapper">
      <sidebar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/sidebar/Sidebar.vue'
import HeaderLayout from '~/components/layouts/header/Header.vue'
export default {
  middleware: 'auth',
  components: { Sidebar, HeaderLayout },
}
</script>

<style>
.layout__wrapper {
  padding-top: 4rem;
}
</style>
