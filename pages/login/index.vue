<template>
  <div>
    <h1 class="text-center text-muted mb-4">LOGIN</h1>
    <b-form @submit.prevent="submit">
      <email-input v-model="form.email" />
      <b-form-group label="Password" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          :state="false"
          required
        />
        <b-form-invalid-feedback>Required field</b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="primary" class="mt-2" type="submit" block>
        Login
      </b-button>

      <nuxt-link :to="{ name: 'register' }" class="d-block mt-2 text-dark">
        <span>Don't have account?</span>
        <strong>Register Now</strong>
      </nuxt-link>
    </b-form>
  </div>
</template>

<script>
import EmailInput from '~/components/pages/login/EmailInput.vue'
export default {
  layout: 'auth',
  components: { EmailInput },
  data: () => ({ form: {} }),
  methods: {
    submit() {
      this.$auth.login({ data: { user: this.form } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
