import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import index from './index.vue'

/* #region  Test setup */
const toast = jest.fn()
axios.$post = jest.fn().mockResolvedValue({ user: { token: 'TOKEN' } })
const setErrors = jest.fn()
const setUserToken = jest.fn()

const ValidationObserver = {
  render(h) {},
  methods: { setErrors },
}

const factory = () => {
  return shallowMount(index, {
    mocks: {
      $axios: axios,
      $bvToast: { toast },
      $auth: { setUserToken },
    },
    components: { ValidationObserver },
  })
}
/* #endregion */

describe('index.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should called submit correctly', async () => {
    wrapper.vm.submit()
    expect(axios.$post).toHaveBeenCalledWith('/users', {
      user: { email: '', password: '', username: '' },
    })

    await wrapper.vm.$nextTick()

    expect(setUserToken).toHaveBeenCalledWith('TOKEN')
  })

  test('should called submit correctly and reject request', () => {
    axios.$post = jest
      .fn()
      .mockRejectedValue({ response: { data: { errors: [] } } })

    wrapper.vm.submit()

    expect(axios.$post).toHaveBeenCalledWith('/users', {
      user: { email: '', password: '', username: '' },
    })
  })
})
