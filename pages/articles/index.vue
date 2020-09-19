<template>
  <b-container fluid>
    <h1>All Posts</h1>
    <article-table :items="items" @delete-item="deleteItem" />
    <article-pagination :total="total" />
  </b-container>
</template>

<script>
import ArticleTable from '~/components/pages/articles/index/ArticleTable.vue'
import ArticlePagination from '~/components/pages/articles/index/ArticlePagination.vue'
export default {
  components: { ArticleTable, ArticlePagination },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1)
      this.$bvToast.toast('Article deleted successfuly', {
        variant: 'success',
        solid: true,
      })
    },
  },
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
