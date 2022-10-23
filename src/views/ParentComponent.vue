<template>
  <div>
    <h1>親コンポーネント</h1>
    <label>
      親コンポーネントから子コンポーネントへ入力値を受け渡す：
      <input type="text" v-model="parentInputData">
      <div id="parent-radio">
        親コンポーネントのラジオボタンの値: <br>{{ options }}
      </div>
      <child-component :parentToChild="parentInputData" @child-event="parentMethod" :options="options" @input="updateValue"/>
      <div>
        子コンポーネントから受け取った値：{{ parentOutputData }}<br>
        子コンポーネントから受け取ったラジオボタンの値：{{ incomingForm.radio }}
      </div>
    </label>
    <CustomTable/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
import CustomTable from '../components/CustomTable'

export default {
  name: 'ParentComponent',
  components: {
    CustomTable,
    ChildComponent
  },
  data () {
    return {
      parentInputData: '',
      parentOutputData: '',
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
  methods: {
    parentMethod (payload) {
      this.parentOutputData = payload
    },
    updateValue (payload) {
      console.log('updateValue: ' + payload)
      this.incomingForm['radio'] = payload
    }
  }
}
</script>

<style scoped>
  div {
    padding: 20px;
    background-color: #7fffff;
  }
  #parent-radio {
    margin-top: 20px;
  }
</style>
