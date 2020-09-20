ArticleTable import { shallowMount } from '@vue/test-utils'
import { BTable } from 'bootstrap-vue'
import ArticleTable from './ArticleTable.vue'

/* #region  Test setup */
const msgBoxConfirm = jest.fn().mockResolvedValue(true)

const factory = () => {
  return shallowMount(ArticleTable, {
    propsData: { items: [{ slug: 'SLUG' }] },
    mocks: { BTable, $bvModal: { msgBoxConfirm } },
  })
}
/* #endregion */

describe('ArticleTable.vue', () => {
  let wrapper
  beforeEach(() => (wrapper = factory()))

  test('should mounts properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should get correct row index of table', () => {
    const index = wrapper.vm.rowIndex(2)
    expect(index).toBe(3)
  })

  test('should trigger modal when deleteItem called', () => {
    wrapper.vm.deleteItem(12)
    expect(msgBoxConfirm).toHaveBeenCalledWith(
      'Are you sure to delete Article?',
      {
        title: 'Delete Article',
        okVariant: 'danger px-4',
        cancelVariant: 'outline-dark px-4',
        okTitle: 'YES',
        cancelTitle: 'NO',
        centered: true,
        hideHeaderClose: false,
      }
    )
  })
})
