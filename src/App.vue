<template>
  <div id="app">
    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'App',
  components: {Multiselect},
  data() {
    return {
      value: null,
      options: ['whiskey', 'gin', 'vodka', 'tequila', 'rum']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
