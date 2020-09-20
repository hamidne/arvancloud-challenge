<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(submit)">
      <b-row>
        <b-col xl="5" md="8">
          <title-input v-model="innerValue.title" />
          <description-input v-model="innerValue.description" />
          <body-input v-model="innerValue.body" />

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
        <b-col xl="2" lg="3" md="4">
          <tags-input v-model="innerValue.tagList" />
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import TagsInput from '~/components/pages/articles/global/form/TagsInput.vue'
import BodyInput from '~/components/pages/articles/global/form/BodyInput.vue'
import TitleInput from '~/components/pages/articles/global/form/TitleInput.vue'
import DescriptionInput from '~/components/pages/articles/global/form/DescriptionInput.vue'
export default {
  components: { TagsInput, TitleInput, BodyInput, DescriptionInput },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" scoped></style>
