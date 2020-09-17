import css from './configs/css'
import head from './configs/head'
import axios from './configs/axios'
import build from './configs/build'
import modules from './configs/modules'
import plugins from './configs/plugins'
import components from './configs/components'
import buildModules from './configs/buildModules'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  css,
  head,
  axios,
  build,
  modules,
  plugins,
  components,
  buildModules,
}
