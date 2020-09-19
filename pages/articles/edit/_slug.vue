<template>
  <b-container fluid>
    <h1>Edit Article</h1>
    <article-form v-model="form" @submit="submit" />
  </b-container>
</template>

<script>
import ArticleForm from '~/components/pages/articles/global/form/ArticleForm.vue'
export default {
  components: { ArticleForm },
  methods: {
    submit() {
      const slug = this.$route.params.slug
      this.$axios.$put(`/articles/${slug}`, { article: this.form }).then(() => {
        this.$router.push({ name: 'articles' })
        this.$bvToast.toast('Article updated successfuly', {
          title: 'Well done! ',
          variant: 'success',
          solid: true,
        })
      })
    },
  },
  async asyncData({ $axios, params, error }) {
    try {
      const { article } = await $axios.$get(`/articles/${params.slug}`)
      return {
        form: {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        },
      }
    } catch (err) {
      throw error(err)
    }
  },
}
</script>

<style lang="scss" scoped></style>
