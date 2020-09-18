<template>
  <nuxt-link
    :to="item.href"
    class="sidebar-menu__item d-flex font-12 text-white"
  >
    {{ item.title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-menu__item {
  padding-left: 1.3rem;
  text-decoration: none;
}
</style>
