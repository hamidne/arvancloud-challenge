<template>
  <div class="sidebar bg-primary w-100">asdasd</div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        header: true,
        title: 'Post',
      },
      {
        href: { name: 'index' },
        title: 'All Articles',
      },
      {
        title: 'New Article',
        href: { name: 'stacks' },
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 250px;
}
</style>
