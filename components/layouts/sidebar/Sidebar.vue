<template>
  <div
    class="sidebar position-fixed text-white bg-primary w-100 h-100"
    :class="{ active: activeSidebar }"
  >
    <sidebar-menu />
    <div class="px-2 d-lg-none">
      <b-button variant="info" block @click="logout">Logout</b-button>
    </div>
  </div>
</template>

<script>
import logoutMixin from '~/mixins/logout.js'
import SidebarMenu from '~/components/layouts/sidebar/SidebarMenu.vue'

export default {
  components: { SidebarMenu },
  mixins: [logoutMixin],
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
    transition: all 0.5s ease;
    transform: translateX(-$sidebar-width);
    &.active {
      transform: translateX(0);
    }
  }
}
</style>
