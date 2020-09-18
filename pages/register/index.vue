<template>
  <div>
    <h1 class="text-center">Register</h1>
    <b-form @submit="submit">
      <b-form-group label="User" label-for="input-user">
        <b-form-input id="input-user" v-model="form.user" required />
      </b-form-group>

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

      <b-button variant="primary" block>Register</b-button>
      <nuxt-link :to="{ name: 'login' }" class="d-block mt-2 text-dark">
        <span>Already Registered?</span>
        <strong>Login</strong>
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
