export default {
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
        user: { url: '/user', method: 'get', propertyName: 'user' },
        login: {
          url: '/users/login',
          method: 'post',
          propertyName: 'user.token',
        },
        logout: false,
      },
    },
  },
}
