import { mount } from '@vue/test-utils'
import { ValidationProvider } from 'vee-validate'
import TitleInput from './TitleInput.vue'

/* #region  Test setup */
const factory = () => {
  return mount(TitleInput, {
    propsData: { value: 'TITLE' },
    components: { ValidationProvider },
  })
}
/* #endregion */

describe('TitleInput.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should emit called when change innerValue', () => {
    wrapper.vm.innerValue = 'TEST'
    expect(wrapper.emitted('input')[0][0]).toBe('TEST')
  })
})
