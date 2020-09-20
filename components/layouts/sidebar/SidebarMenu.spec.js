import { shallowMount } from '@vue/test-utils'
import SidebarMenu from './SidebarMenu.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(SidebarMenu)
}
/* #endregion */

describe('SidebarMenu.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
