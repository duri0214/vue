<template>
  <div>
    <h1>親コンポーネント</h1>
    <label>
      親コンポーネントから子コンポーネントへ入力値を受け渡す：
      <input type="text" v-model="parentInputData">
      <child :parentToChild="parentInputData" @child-event="parentMethod"/>
      <div>
        子コンポーネントから受け取った値：{{ parentOutputData }}<br>
      </div>
    </label>
    <CustomTable/>
  </div>
</template>

<script>
import Child from '../views/Child'
import CustomTable from '../components/CustomTable'

export default {
  name: 'Parent',
  components: {
    CustomTable,
    Child
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
