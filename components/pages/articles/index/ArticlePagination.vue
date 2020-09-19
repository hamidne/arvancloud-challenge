<template>
  <b-pagination-nav
    :link-gen="linkGen"
    align="center"
    :number-of-pages="pages"
    use-router
  />
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 10,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pages() {
      return this.total / this.perPage
    },
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1
        ? { name: 'articles' }
        : { name: 'articles', query: { page: pageNum } }
    },
  },
}
</script>

<style lang="scss" scoped></style>
