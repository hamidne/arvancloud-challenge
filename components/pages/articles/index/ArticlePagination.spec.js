import { shallowMount } from '@vue/test-utils'
import ArticlePagination from './ArticlePagination.vue'

/* #region  Test setup */
const factory = () => {
  return shallowMount(ArticlePagination)
}
/* #endregion */

describe('ArticlePagination.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should return articles route when pageNum is 1', () => {
    const expectResult = { name: 'articles' }
    const result = wrapper.vm.linkGen(1)
    expect(result).toEqual(expectResult)
  })

  test('should return articles-pages-page route when pageNum is not 1', () => {
    const pageNum = 2
    const expectResult = {
      name: 'articles-pages-page',
      params: { page: pageNum },
    }
    const result = wrapper.vm.linkGen(pageNum)
    expect(result).toEqual(expectResult)
  })
})
