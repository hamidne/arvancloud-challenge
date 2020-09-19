<template>
  <b-container fluid>
    <h1>All Posts</h1>
    <article-table :items="items" />
  </b-container>
</template>

<script>
import ArticleTable from '~/components/pages/articles/index/ArticleTable.vue'
export default {
  components: { ArticleTable },
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
