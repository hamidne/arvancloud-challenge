<template>
  <div class="sidebar position-fixed text-white bg-primary w-100 h-100">
    <sidebar-menu />
  </div>
</template>

<script>
import SidebarMenu from '~/components/layouts/sidebar/SidebarMenu.vue'
export default {
  components: { SidebarMenu },
}
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  max-width: 250px;
}
</style>
