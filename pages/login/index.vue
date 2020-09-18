<template>
  <div>
    <h1 class="text-center">LOGIN</h1>
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
          required
        />
        <b-form-invalid-feedback> Required field </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="primary" block>Login</b-button>
      <div class="mt-2">
        <span>Don't have account?</span>
        <nuxt-link
          :to="{ name: 'register' }"
          class="font-weight-bold text-dark"
        >
          Register Now
        </nuxt-link>
      </div>
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
