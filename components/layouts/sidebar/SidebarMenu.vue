<template>
  <ul class="sidebar-menu list-unstyled bg-primary w-100">
    <template v-for="(item, index) in menu">
      <sidebar-menu-header v-if="item.header" :key="index" :item="item" />
      <sidebar-menu-item v-else :key="index" :item="item" />
    </template>
  </ul>
</template>

<script>
import SidebarMenuItem from '~/components/layouts/sidebar/SidebarMenuItem.vue'
import SidebarMenuHeader from '~/components/layouts/sidebar/SidebarMenuHeader.vue'
export default {
  components: { SidebarMenuItem, SidebarMenuHeader },
  data: () => ({
    menu: [
      {
        header: true,
        title: 'Post',
      },
      {
        href: { name: 'articles' },
        title: 'All Articles',
      },
      {
        title: 'New Article',
        href: { name: 'articles-create' },
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.sidebar-menu {
  padding-top: 0.5rem;
}
</style>
