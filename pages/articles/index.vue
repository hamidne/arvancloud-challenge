<template>
  <b-container fluid>
    <h1>All Posts</h1>
    <article-table :items="items" />
    <article-pagination :total="total" />
  </b-container>
</template>

<script>
import ArticleTable from '~/components/pages/articles/index/ArticleTable.vue'
import ArticlePagination from '~/components/pages/articles/index/ArticlePagination.vue'
export default {
  components: { ArticleTable, ArticlePagination },
  async asyncData({ $axios, error }) {
    try {
      const { articles, articlesCount } = await $axios.$get('/articles', {
        params: { limit: 10 },
      })
      return { items: articles, total: articlesCount }
    } catch (err) {
      throw error(err)
    }
  },
}
</script>

<style lang="scss" scoped></style>
