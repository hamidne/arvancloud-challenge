<template>
  <validation-provider
    v-slot="{ errors }"
    rules="required|email"
    vid="email"
    name="Email"
  >
    <b-form-group label="Email" label-for="input-email">
      <b-form-input
        id="input-email"
        v-model="innerValue"
        type="email"
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
