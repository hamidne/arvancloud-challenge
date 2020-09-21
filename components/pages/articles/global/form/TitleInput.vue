<template>
  <validation-provider v-slot="{ errors }" rules="required" name="Title">
    <b-form-group label="Title" label-for="input-title">
      <b-form-input
        id="input-title"
        v-model="innerValue"
        :state="errors[0] ? false : null"
        required
      />
      <b-form-invalid-feedback v-text="errors[0]" />
    </b-form-group>
  </validation-provider>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
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
}
</script>

<style lang="scss" scoped></style>
