import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import index from './index.vue'

/* #region  Test setup */
const push = jest.fn()
const toast = jest.fn()
axios.$post = jest.fn().mockResolvedValue()

const factory = () => {
  return shallowMount(index, {
    mocks: { $axios: axios, $router: { push }, $bvToast: { toast } },
  })
}
/* #endregion */

describe('index.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should called submit correctly', async () => {
    wrapper.vm.submit()
    expect(axios.$post).toHaveBeenCalledWith('/articles', {
      article: { body: '', description: '', tagList: [], title: '' },
    })

    await wrapper.vm.$nextTick()

    expect(push).toHaveBeenCalledWith({ name: 'articles' })
    expect(toast).toHaveBeenCalledWith('Article created successfuly', {
      title: 'Well done! ',
      variant: 'success',
      solid: true,
    })
  })
})
