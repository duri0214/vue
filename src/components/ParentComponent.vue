<template>
  <div>
    <h1>親コンポーネント</h1>
    <label>
      親コンポーネントから子コンポーネントへ入力値を受け渡す：
      <input type="text" v-model="parentInputData">
      <child-component :parentToChild="parentInputData" @child-event="parentMethod" />
      <div>
        子コンポーネントから受け取った値：{{ parentOutputData }}
      </div>
    </label>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data () {
    return {
      parentInputData: '',
      parentOutputData: ''
    }
  },
  methods: {
    parentMethod (payload) {
      this.parentOutputData = payload
    }
  }
}
</script>

<style scoped>
  div {
    padding: 20px;
    background-color: #7fffff;
  }
</style>
