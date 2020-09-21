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

<style lang="scss" scoped>
.layout__wrapper {
  padding-top: $header-height;
  padding-left: $sidebar-width;
  @include media-breakpoint-down(md) {
    padding-left: 0;
  }
}
.layout__content {
  padding: 2rem;
}
</style>
