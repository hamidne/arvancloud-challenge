<template>
  <h4 v-text="item.title" />
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
