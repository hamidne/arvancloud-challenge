<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{ name: 'index' }">Arvan Challenge</b-navbar-brand>

    <b-navbar-toggle @click="toggleSidebar" />

    <b-collapse is-nav>
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
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
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
  height: $header-height;
}
</style>
