import { shallowMount } from '@vue/test-utils'
import Header from './Header.vue'

/* #region  Test setup */
const dispatch = jest.fn()

const factory = () => {
  return shallowMount(Header, {
    mocks: {
      $auth: { user: { username: 'USERNAME' } },
      $store: { dispatch },
    },
  })
}
/* #endregion */

describe('Header.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should call toggleSidebar method when click on navbar toggle button', () => {
    wrapper.find('[data-test=toggle-sidebar]').vm.$emit('click')
    expect(dispatch).toHaveBeenCalledWith('toggleSidebar')
  })
})
