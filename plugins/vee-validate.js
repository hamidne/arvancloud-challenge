import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

// Import Components
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Add Rules
// eslint-disable-next-line import/namespace
Object.keys(rules).forEach((rule) => extend(rule, rules[rule]))
