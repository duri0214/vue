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
})
