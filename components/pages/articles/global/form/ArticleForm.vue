<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.prevent="handleSubmit(submit)">
      <b-row>
        <b-col md="5">
          <title-input v-model="innerValue.title" />
          <description-input v-model="innerValue.description" />

          <b-form-group label="Body" label-for="input-body">
            <b-textarea
              id="input-body"
              v-model="innerValue.body"
              rows="10"
              required
            />
            <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
        <b-col>
          <tags-input v-model="innerValue.tagList" />
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import TagsInput from '~/components/pages/articles/global/form/TagsInput.vue'
import TitleInput from '~/components/pages/articles/global/form/TitleInput.vue'
import DescriptionInput from '~/components/pages/articles/global/form/DescriptionInput.vue'
export default {
  components: { TagsInput, TitleInput, DescriptionInput },
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
