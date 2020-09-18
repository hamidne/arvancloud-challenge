<template>
  <nuxt-link :to="item.href" class="d-flex font-12 text-white">
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

<style lang="scss" scoped></style>
