<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <b-col md="5">
        <b-form-group label="Title" label-for="input-title">
          <b-form-input id="input-title" v-model="innerValue.title" required />
          <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group label="Description" label-for="input-description">
          <b-form-input
            id="input-description"
            v-model="innerValue.description"
            required
          />
          <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
        </b-form-group>

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
</template>

<script>
import TagsInput from '~/components/pages/articles/global/form/TagsInput.vue'
export default {
  components: { TagsInput },
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
