import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import index from './index.vue'

/* #region  Test setup */
const error = jest.fn()
const toast = jest.fn()
axios.$get = jest.fn().mockResolvedValue({ articles: [{}], articlesCount: 1 })

const factory = () => {
  return shallowMount(index, {
    data: () => ({ items: [{}] }),
    mocks: {
      $axios: axios,
      $bvToast: { toast },
    },
  })
}
/* #endregion */

describe('_slug.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should called deleteItem correctly', () => {
    wrapper.vm.deleteItem(0)

    expect(wrapper.vm.items.length).toBe(0)
    expect(toast).toHaveBeenCalledWith('Article deleted successfuly', {
      variant: 'success',
      solid: true,
    })
  })

  test('should correctly work async data', async () => {
    const data = await wrapper.vm.$options.asyncData({
      $axios: axios,
      params: {},
      error,
    })
    expect(data).toEqual({ items: [{}], total: 1 })
  })
})
