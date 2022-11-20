<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>きょうの天気</h2>
    <h3>{{ retrievedWeather }}</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog'
import { weatherService } from '@/service/WeatherService'
export default {
  name: 'HelloWorld',
  components: {
    Dialog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      valueForSetValueAndEmit: null,
      retrievedWeather: null
    }
  },
  async created () {
    const fromDbValue = 'The value was set at the time of created'
    this.setValueAndEmit(fromDbValue)

    // retrieve by api
    await weatherService.getWeather(35.681147934006624, 139.76673203255143)
      .then(res => {
        this.retrievedWeather = res
        console.log('this.retrievedWeather in created:', this.retrievedWeather)
      })
  },
  mounted () {
    console.log('this.retrievedWeather in mounted: ', this.retrievedWeather)
  },
  methods: {
    setValueAndEmit (payload) {
      this.valueForSetValueAndEmit = payload
      this.$emit('event-in-setValueAndEmit', this.valueForSetValueAndEmit)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
