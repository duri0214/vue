<template>
  <div id="child-radio">
    <el-radio-group v-model="childRadioData" @change="$emit('input', childRadioData)">
      <template v-for="(option, index) in options">
        <el-radio :key="index" :label="option.value">{{ option.label }}</el-radio>
      </template>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      childRadioData: null
    }
  },
  props: {
    options: { type: Array, required: true }
  }
}
</script>

<style scoped>
  #child-radio {
    margin-top: 20px;
  }
</style>
