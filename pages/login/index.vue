<template>
  <div>
    <h1 class="text-center text-muted mb-4">LOGIN</h1>
    <b-form @submit="submit">
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
          :state="false"
          required
        />
        <b-form-invalid-feedback> Required field </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="primary" class="mt-2" block>Login</b-button>

      <nuxt-link :to="{ name: 'register' }" class="d-block mt-2 text-dark">
        <span>Don't have account?</span>
        <strong>Register Now</strong>
      </nuxt-link>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({ form: {} }),
  methods: {
    submit() {},
  },
}
</script>

<style lang="scss" scoped></style>
