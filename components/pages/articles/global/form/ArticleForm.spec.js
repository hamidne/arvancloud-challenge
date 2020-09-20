import { shallowMount } from '@vue/test-utils'
import ArticleForm from './ArticleForm.vue'

/* #region  Test setup */
const handleSubmit = jest.fn((fn) => fn())

const factory = () => {
  return shallowMount(ArticleForm, {
    propsData: {
      value: { title: '', description: '', body: '', tagList: [] },
    },
    mocks: { handleSubmit },
  })
}
/* #endregion */

describe('ArticleForm.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should emit called when change innerValue', () => {
    wrapper.vm.innerValue = 'TEST'
    expect(wrapper.emitted('input')).toBeTruthy()
  })
})
