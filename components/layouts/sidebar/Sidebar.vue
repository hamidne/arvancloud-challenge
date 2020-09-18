<template>
  <div class="sidebar bg-primary w-100">
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
  max-width: 250px;
}
</style>
