import { shallowMount } from '@vue/test-utils'
import index from './index.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(index)
}
/* #endregion */

describe('index.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
