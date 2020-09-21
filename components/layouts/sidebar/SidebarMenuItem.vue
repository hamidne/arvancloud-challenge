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
  text-decoration: none;
  padding: 0.3rem 0 0.3rem 2.5rem;
  &.nuxt-link-exact-active {
    background: #ffffff26;
  }
}
</style>
