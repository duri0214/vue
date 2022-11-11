import HelloWorld from '@/components/HelloWorld'
import { shallowMount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld)
  })
  it('should render correct contents', () => {
    expect(wrapper.vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  it('shallowMount時点でcreatedまで走る', () => {
    expect(wrapper.vm.$data.valueForSetValueAndEmit).toEqual('The value was set at the time of created')
  })
  it('関数を実行するとメンバ変数を更新し、emitする', () => {
    wrapper.vm.setValueAndEmit('1st set')
    expect(wrapper.vm.$data.valueForSetValueAndEmit).toEqual('1st set')
    expect(wrapper.emitted('event-in-setValueAndEmit')[0][0]).toBeTruthy()
  })
  it('spyOnを使うと単一のメソッドをテストできる', () => {
    const spiedMethod = jest.spyOn(wrapper.vm, 'setValueAndEmit')
    wrapper.vm.setValueAndEmit('1st set')
    wrapper.vm.setValueAndEmit('2nd set')
    expect(spiedMethod).toHaveBeenCalledTimes(2)
    expect(wrapper.vm.$data.valueForSetValueAndEmit).toEqual('2nd set')
  })
  it('spyOnでもcreate時のテストはできない', () => {
    const spiedMethod = jest.spyOn(wrapper.vm, 'setValueAndEmit')
    expect(spiedMethod).toHaveBeenCalledTimes(0)
  })
  it('shallowMountのmocksを使ってプロパティをMockできる', () => {
    const $route = { path: 'https://www.example-path1.com' }
    const route1 = { path: 'https://www.example-path2.com' }
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        $route,
        route1
      }
    })
    expect(wrapper.vm.$route.path).toBe($route.path)
  })
  it('shallowMountのmocksを使って関数をMockできる', () => {
    wrapper = shallowMount(HelloWorld, {
      mocks: {
        setValueAndEmit2: jest.fn(x => 42 + parseInt(x))
      }
    })
    expect(wrapper.vm.setValueAndEmit2(1)).toEqual(43)
    expect(wrapper.vm.setValueAndEmit2).toHaveBeenCalledTimes(1)
  })
})
