<template>
  <div>
    <h1>子コンポーネント</h1>
    <div>親コンポーネントから受け取った値: {{ childOutputData }}</div>
    <div>
      <label>
        子コンポーネントから親コンポーネントへ入力値を受け渡す:
        <input type="text" v-model="childInputData" @input="childEmit">
      </label>
    </div>
    <div id="child-radio">
      子コンポーネントのラジオボックスに「親コンポーネントのラジオボタンの値」をinjection
      <el-radio-group v-model="childRadioData" @change="$emit('input', childRadioData)">
        <template v-for="(option, index) in options">
          <el-radio :key="index" :label="option.value">{{ option.label }}</el-radio>
        </template>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data () {
    return {
      childInputData: '',
      childRadioData: ''
    }
  },
  props: {
    parentToChild: {
      type: String,
      default: ''
    },
    options: { type: Array, required: true }
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
  #child-radio {
    margin-top: 20px;
  }
</style>
