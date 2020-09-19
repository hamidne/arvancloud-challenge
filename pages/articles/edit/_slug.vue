<template>
  <b-container fluid>
    <h1>New Article</h1>
    <article-form v-model="form" @submit="submit" />
  </b-container>
</template>

<script>
import ArticleForm from '~/components/pages/articles/global/form/ArticleForm.vue'
export default {
  components: { ArticleForm },
  data: () => ({
    form: {
      title: '',
      description: '',
      body: '',
      tagList: [],
    },
  }),
  methods: {
    submit() {
      this.$axios
        .$post('/articles', { article: this.form })
        .then(() => this.$router.push({ name: 'articles' }))
    },
  },
  asyncData({ $axios, error }) {},
}
</script>

<style lang="scss" scoped></style>
