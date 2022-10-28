import { shallowMount } from '@vue/test-utils'
import Radio from '@/components/Radio'
import Vue from 'vue'
import ElementUI from 'element-ui'

describe('Radio.vue', () => {
  Vue.use(ElementUI)
  beforeEach(() => {
  })
  afterEach(() => {
  })
  it('fooをemitすると、emittedでキャッチできる', () => {
    const wrapper1 = shallowMount(Radio, {
      propsData: {
        options: [{label: 'Option A', value: '3'}, {label: 'Option B', value: '6'}, {label: 'Option C', value: '9'}]
      }
    })
    wrapper1.vm.$emit('foo')
    wrapper1.vm.$emit('foo', 123)
    expect(wrapper1.emitted().foo).toBeTruthy()
    expect(wrapper1.emitted().foo.length).toBe(2)
    expect(wrapper1.emitted().foo[1]).toEqual([123])
  })
  it('ラジオボタンを選択する', () => {
    const wrapper1 = shallowMount(Radio, {
      propsData: {
        options: [{label: 'Option A', value: '3'}, {label: 'Option B', value: '6'}, {label: 'Option C', value: '9'}]
      }
    })
    let radioInput = wrapper1.findComponent(Radio)

    // Note: checkedはラジオボタンの「どれかを選んだ状態」というわけではないようだ
    expect(radioInput.exists()).toBe(true)
    expect(radioInput.element.checked).not.toBeTruthy()
    radioInput.element.checked = true
    radioInput.trigger('input')
    radioInput.trigger('change')
    expect(radioInput.element.checked).toBeTruthy()

    // Note: どれかを選んで 3 が入った、という状態を作れないだろうか。setDataしかないのだろうか
    wrapper1.setData({
      childRadioData: 3
    })
    expect(radioInput.vm.$data.childRadioData).toEqual(3)
    // console.log(radioInput.element)
    // console.log(radioInput.html())
    wrapper1.destroy()
  })
})
