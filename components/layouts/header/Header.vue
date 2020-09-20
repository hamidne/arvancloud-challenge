<template>
  <b-navbar fixed="top" toggleable="md" type="dark" variant="dark">
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
      this.$bvModal
        .msgBoxConfirm('Are you sure to logout Panel?', {
          title: 'Logout',
          okVariant: 'danger px-4',
          cancelVariant: 'outline-dark px-4',
          okTitle: 'YES',
          cancelTitle: 'NO',
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            this.$auth.logout().then(() => this.$router.push({ name: 'login' }))
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 4rem;
}
</style>
