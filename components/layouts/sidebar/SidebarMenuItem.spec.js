import { shallowMount } from '@vue/test-utils'
import SidebarMenuItem from './SidebarMenuItem.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(SidebarMenuItem, {
    propsData: { item: { title: 'TITLE', href: {} } },
  })
}
/* #endregion */

describe('SidebarMenuItem.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
