export default {
  extendRoutes(routes, resolve) {
    routes.push({
      name: 'articles-pages-page',
      path: '/articles/pages/:page',
      component: resolve(__dirname, '../pages/articles/index.vue'),
    })
  },
}
