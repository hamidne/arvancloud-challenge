import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import TagsInput from './TagsInput.vue'

/* #region  Test setup */
axios.$get = jest.fn().mockResolvedValue({ tags: ['A', 'z', 'b', 'a'] })

const factory = () => {
  return shallowMount(TagsInput, {
    propsData: { value: [] },
    mocks: { $axios: axios },
    data: () => ({ items: [], text: '', loading: true }),
  })
}
/* #endregion */

describe('TagsInput.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should emit called when change innerValue', () => {
    wrapper.vm.innerValue = 'TEST'
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  test('should created option work correctly', () => {
    expect(wrapper.vm.items).toEqual(['A', 'a', 'b', 'z'])
    expect(wrapper.vm.loading).toBe(false)
  })

  test('should addItem method work correctly', () => {
    wrapper.vm.text = 'TEST'
    wrapper.vm.items = ['FAKE']
    wrapper.vm.addItem()

    expect(wrapper.vm.text).toBe('')
    expect(wrapper.vm.innerValue[0]).toEqual('TEST')
    expect(wrapper.vm.items.length).toEqual(2)
  })

  test('should addItem method work correctly with duplicate item', () => {
    wrapper.vm.text = 'TEST'
    wrapper.vm.items = ['TEST']
    wrapper.vm.addItem()

    expect(wrapper.vm.text).toBe('')
    expect(wrapper.vm.innerValue).toEqual(['TEST'])
    expect(wrapper.vm.items.length).toEqual(1)
  })
})
