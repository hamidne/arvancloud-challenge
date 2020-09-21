import { mount } from '@vue/test-utils'
import { ValidationProvider } from 'vee-validate'
import EmailInput from './EmailInput.vue'

/* #region  Test setup */
const factory = () => {
  return mount(EmailInput, {
    propsData: { value: 'EMAIL' },
    components: { ValidationProvider },
  })
}
/* #endregion */

describe('EmailInput.vue', () => {
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
