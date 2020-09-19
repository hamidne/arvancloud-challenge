<template>
  <div>
    <h1 class="text-center text-muted mb-4">LOGIN</h1>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(submit)">
        <email-input v-model="form.email" />
        <password-input v-model="form.password" />

        <b-button variant="primary" class="mt-2" type="submit" block>
          Login
        </b-button>

        <nuxt-link :to="{ name: 'register' }" class="d-block mt-2 text-dark">
          <span>Don't have account?</span>
          <strong>Register Now</strong>
        </nuxt-link>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import EmailInput from '~/components/pages/login/EmailInput.vue'
import PasswordInput from '~/components/pages/login/PasswordInput.vue'
export default {
  layout: 'auth',
  components: { EmailInput, PasswordInput },
  data: () => ({ form: { email: '', password: '' } }),
  methods: {
    submit() {
      this.$auth
        .login({ data: { user: this.form } })
        .catch(({ response }) =>
          this.$refs.observer.setErrors(response.data.errors)
        )
    },
  },
}
</script>

<style lang="scss" scoped></style>
