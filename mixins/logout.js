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
          centered: true,
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
