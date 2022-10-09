<template>
  <div>
    <h1>子コンポーネント</h1>
    <div>親コンポーネントから受け取った値: {{ childOutputData }}</div>
    <div>
      <label>
        子コンポーネントから親コンポーネントへ入力値を受け渡す:
        <input type="text" v-model="childInputData" @change="childEmit">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data () {
    return {
      childInputData: ''
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
  div {
    margin: auto;
    width: 1000px;
    background-color: #7fbfff;
  }
</style>
