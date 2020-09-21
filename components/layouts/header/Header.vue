<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand :to="{ name: 'index' }">Arvan Challenge</b-navbar-brand>

    <b-navbar-toggle data-test="toggle-sidebar" @click="toggleSidebar" />

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
import logoutMixin from '~/mixins/logout.js'
export default {
  mixins: [logoutMixin],
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $header-height;
}
</style>
