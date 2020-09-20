<template>
  <div
    class="sidebar position-fixed text-white bg-primary w-100 h-100"
    :class="{ active: activeSidebar }"
  >
    <sidebar-menu />
  </div>
</template>

<script>
import SidebarMenu from '~/components/layouts/sidebar/SidebarMenu.vue'
export default {
  components: { SidebarMenu },
  computed: {
    activeSidebar() {
      return this.$store.state.sidebarCollapsed
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  z-index: 1000;
  max-width: $sidebar-width;
  @include media-breakpoint-down(md) {
    transform: translateX(-$sidebar-width);
    &.active {
      transform: translateX(0);
    }
  }
}
</style>
