<template>
  <div class="layout">
    <header-layout />
    <div class="layout__wrapper d-flex">
      <sidebar />
      <nuxt class="layout__content" />
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
  padding-left: 250px;
}
.layout__content {
  padding: 2rem;
}
</style>
