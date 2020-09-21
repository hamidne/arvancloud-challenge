import { shallowMount } from '@vue/test-utils'
import Sidebar from './Sidebar.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(Sidebar, {
    mocks: { $store: { state: { sidebarCollapsed: false } } },
  })
}
/* #endregion */

describe('Sidebar.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
