import css from './configs/css'
import auth from './configs/auth'
import head from './configs/head'
import axios from './configs/axios'
import build from './configs/build'
import router from './configs/router'
import modules from './configs/modules'
import plugins from './configs/plugins'
import components from './configs/components'
import buildModules from './configs/buildModules'
import bootstrapVue from './configs/bootstrapVue'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  css,
  auth,
  head,
  axios,
  build,
  router,
  modules,
  plugins,
  components,
  buildModules,
  bootstrapVue,
}
