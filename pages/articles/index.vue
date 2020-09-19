<template>
  <b-container fluid>
    <h1>All Posts</h1>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      const { articles, articlesCount } = await $axios.$get('/articles')
      return { items: articles, total: articlesCount }
    } catch (err) {
      throw error(err)
    }
  },
}
</script>

<style lang="scss" scoped></style>
