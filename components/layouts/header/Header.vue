<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{ name: 'index' }">Arvan Challenge</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <span class="text-white">Welcome {{ $auth.user.username }}</span>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-button variant="outline-info" @click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      if (confirm('asdasd')) {
        this.$auth.logout().then(() => this.$router.push({ name: 'login' }))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 4rem;
}
</style>
