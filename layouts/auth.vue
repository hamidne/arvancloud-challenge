<template>
  <b-container class="auth d-flex flex-center min-vh-100" fluid>
    <div class="auth__wrapper rounded w-100">
      <nuxt />
    </div>
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.auth__wrapper {
  padding: 20px;
  max-width: 450px;
  background: #eceeef;
}
</style>
