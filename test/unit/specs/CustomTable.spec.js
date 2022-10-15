import { config, shallowMount } from '@vue/test-utils'
import CustomTable from '@/components/CustomTable'

config.stubs['el-checkbox'] = {template: '<div />'}
config.stubs['el-table-column'] = {template: '<div />'}
config.stubs['el-table-column'] = {template: '<div />'}
config.stubs['el-table'] = {template: '<div />'}

describe('CustomTable.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CustomTable)
  })
  it('描画直後のレコード数は0', () => {
    expect(wrapper.vm.$data.users.length).toEqual(0)
  })
})
