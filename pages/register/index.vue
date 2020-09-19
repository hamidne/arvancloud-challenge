<template>
  <div>
    <h1 class="text-center text-muted mb-4">Register</h1>
    <b-form @submit.prevent="submit">
      <username-input v-model="form.username" />

      <b-form-group label="Email" label-for="input-email">
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
        />
      </b-form-group>

      <b-form-group label="Password" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
        />
        <b-form-invalid-feedback> Required field </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="primary" type="submit" block>Register</b-button>

      <nuxt-link :to="{ name: 'login' }" class="d-block mt-2 text-dark">
        <span>Already Registered?</span>
        <strong>Login</strong>
      </nuxt-link>
    </b-form>
  </div>
</template>

<script>
import UsernameInput from '~/components/pages/register/UsernameInput.vue'
export default {
  layout: 'auth',
  components: { UsernameInput },
  data: () => ({ form: {} }),
  methods: {
    submit() {
      this.$axios
        .$post('/users', { user: this.form })
        .then(({ user }) => this.$auth.setUserToken(user.token))
    },
  },
}
</script>

<style lang="scss" scoped></style>
