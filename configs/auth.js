export default {
  localStorage: false,
  cookie: {
    options: {
      secure: true,
    },
  },
  redirect: {
    home: '/',
    logout: '/',
    login: '/login',
    callback: '/login',
  },
  strategies: {
    local: {
      tokenType: 'Token',
      endpoints: {
        user: { url: '/user', method: 'get', propertyName: 'data' },
        login: { url: '/users/login', method: 'post', propertyName: 'data' },
        logout: false,
      },
    },
  },
}
