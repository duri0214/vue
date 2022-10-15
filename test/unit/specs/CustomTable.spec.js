import { shallowMount } from '@vue/test-utils'
import CustomTable from '@/components/CustomTable'

describe('CustomTable.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CustomTable)
  })
  it('描画直後のレコード数は0', () => {
    expect(wrapper.vm.$data.users.length).toEqual(0)
  })
})
