<template>
  <div id="app">
    <multiselect
      placeholder="pick a spirit" 
      :value="value" 
      :options="options"
      @search-change="asyncFind"
      @input="updateOptionsAction"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapActions, mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'App',
  components: {Multiselect},
  computed: {
    ...mapState(['value', 'options'])
  },
  watch: {
    value: function (val) {
      console.log(val)
    }
  },
  methods: {
    ...mapActions(['updateOptionsAction']),
    asyncFind(query) {
      if(query.length === 0 ) {
        this.$store.dispatch('resetOptionsAction')
      } else {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          console.log(res.data.map(n => n.name))
          return this.$store.dispatch('updateOptionsAction', res.data.map(n => n.name))
        })
        .catch(err => console.log(err))
      }
    }
  },
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
