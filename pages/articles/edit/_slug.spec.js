import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import slug from './_slug.vue'

/* #region  Test setup */
const article = {
  title: 'TITLE',
  description: 'DESCRIPTION',
  body: 'BODY',
  tagList: 'TAGLIST',
}
const push = jest.fn()
const error = jest.fn()
const toast = jest.fn()
axios.$put = jest.fn().mockResolvedValue()
axios.$get = jest.fn().mockResolvedValue({ article })

const factory = () => {
  return shallowMount(slug, {
    data: () => ({ form: article }),
    mocks: {
      $axios: axios,
      $router: { push },
      $bvToast: { toast },
      $route: { params: { slug: 'SLUG' } },
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

  test('should called submit correctly', async () => {
    wrapper.vm.submit()
    expect(axios.$put).toHaveBeenCalledWith('/articles/SLUG', { article })

    await wrapper.vm.$nextTick()

    expect(push).toHaveBeenCalledWith({ name: 'articles' })
    expect(toast).toHaveBeenCalledWith('Article updated successfuly', {
      title: 'Well done! ',
      variant: 'success',
      solid: true,
    })
  })

  test('should correctly work async data', async () => {
    const form = await wrapper.vm.$options.asyncData({
      $axios: axios,
      params: { slug: 'SLUG' },
      error,
    })
    expect(form).toEqual({ form: article })
  })
})
