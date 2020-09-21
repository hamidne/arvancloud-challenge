<template>
  <div>
    <h1 class="text-center text-muted mb-4">Register</h1>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(submit)">
        <username-input v-model="form.username" />
        <email-input v-model="form.email" />
        <password-input v-model="form.password" />

        <b-button variant="primary" type="submit" block>Register</b-button>

        <nuxt-link :to="{ name: 'login' }" class="d-block mt-2 text-dark">
          <span>Already Registered?</span>
          <strong>Login</strong>
        </nuxt-link>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import EmailInput from '~/components/pages/register/EmailInput.vue'
import UsernameInput from '~/components/pages/register/UsernameInput.vue'
import PasswordInput from '~/components/pages/register/PasswordInput.vue'

export default {
  layout: 'auth',
  components: { EmailInput, UsernameInput, PasswordInput },
  data: () => ({ form: { username: '', password: '', email: '' } }),
  methods: {
    submit() {
      this.$axios
        .$post('/users', { user: this.form })
        .then(({ user }) => this.$auth.setUserToken(user.token))
        .catch(({ response }) =>
          this.$refs.observer.setErrors(response.data.errors)
        )
    },
  },
}
</script>

<style lang="scss" scoped></style>
