import { shallowMount } from '@vue/test-utils'
import SidebarMenuHeader from './SidebarMenuHeader.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(SidebarMenuHeader, {
    propsData: {
      item: { title: 'TITLE' },
    },
  })
}
/* #endregion */

describe('SidebarMenuHeader.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
