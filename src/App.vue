<template>
  <div id="app">
    <multiselect
      placeholder="pick a spirit" 
      :value="value" 
      :options="options"
      @input="updateValueAction"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapActions, mapState} from 'vuex'
export default {
  name: 'App',
  components: {Multiselect},
  computed: {
    ...mapState(['value', 'options'])
  },
  methods: {
    ...mapActions(['updateValueAction'])
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
