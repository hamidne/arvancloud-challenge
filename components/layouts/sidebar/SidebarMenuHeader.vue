<template>
  <h4 class="sidebar-menu__header" v-text="item.title" />
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
.sidebar-menu__header {
  padding-left: 1.2rem;
}
</style>
