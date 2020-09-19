import Vue from 'vue'
import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

// Import Components
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Add Rules
// eslint-disable-next-line import/namespace
Object.keys(rules).forEach((rule) => extend(rule, rules[rule]))

localize({ en })
