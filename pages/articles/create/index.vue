<template>
  <b-container fluid>
    <h1>New Article</h1>
    <b-form @submit.prevent="submit">
      <b-row>
        <b-col md="5">
          <b-form-group label="Title" label-for="input-title">
            <b-form-input id="input-title" v-model="form.title" required />
            <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="Description" label-for="input-description">
            <b-form-input
              id="input-description"
              v-model="form.description"
              required
            />
            <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label="Body" label-for="input-body">
            <b-textarea
              id="input-body"
              v-model="form.body"
              rows="10"
              required
            />
            <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data: () => ({ form: {} }),
  methods: {
    submit() {
      this.$axios.$post()
    },
  },
}
</script>

<style lang="scss" scoped></style>
