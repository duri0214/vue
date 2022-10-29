<template>
  <main>
    <h1>子コンポーネント</h1>
    <section>
      <div>親コンポーネントから受け取った値: {{ childOutputData }}</div>
    </section>
    <section id="incoming-from-component">
      <div id="parent-radio">
        親コンポーネントのラジオボタンの値: <br>{{ options }}
      </div>
      <radio :options="options" @input="updateValue"/>
      <p>子コンポーネントから受け取ったラジオボタンの値：{{ incomingForm.radio }}</p>
    </section>
    <section id="feedback-to-parent">
      <label>
        子コンポーネントから親コンポーネントへ入力値を受け渡す:
        <input type="text" v-model="childInputData" @input="childEmit">
      </label>
    </section>
  </main>
</template>

<script>
import Radio from '../components/Radio'

export default {
  name: 'Child',
  components: {
    Radio
  },
  data () {
    return {
      childInputData: null,
      incomingForm: {
        text: '',
        radio: '', // user has selected
        select: '',
        textarea: '',
        checkbox: []
      },
      options: [{label: 'Option A', value: '3'}, {label: 'Option B', value: '6'}, {label: 'Option C', value: '9'}] // inject to child-component
    }
  },
  props: {
    parentToChild: {
      type: String,
      default: ''
    }
  },
  methods: {
    childEmit () {
      this.$emit('child-event', this.childInputData)
    },
    updateValue (payload) {
      console.log('updateValue: ' + payload)
      this.incomingForm['radio'] = payload
    }
  },
  computed: {
    childOutputData () {
      return this.parentToChild
    }
  }
}
</script>

<style scoped>
  main {
    margin: auto;
    width: 1000px;
    background-color: #7fbfff;
  }
  #parent-radio {
    margin-top: 20px;
  }
</style>
