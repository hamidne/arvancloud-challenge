import { config } from '@vue/test-utils'
import axios from 'axios'

const mocks = {
  $axios: axios,
  $router: { push: jest.fn() },
  $route: { path: 'index' },
}

const stubs = {
  NuxtLink: true,
  ValidationObserver: true,
  ValidationProvider: true,
  BFormGroup: true,
  BFormInput: true,
  BButton: true,
  BCollapse: true,
  BDropdownItem: true,
  BDropdown: true,
  BContainer: true,
  BNavItem: true,
  BNavbarNav: true,
  BNavbarToggle: true,
  BNavbarBrand: true,
  BNavbar: true,
  BCol: true,
  BRow: true,
  BForm: true,
  BFormTextarea: true,
  BPaginationNav: true,
  BSkeletonWrapper: true,
  BFormCheckboxGroup: true,
}

config.mocks = mocks
config.stubs = stubs
