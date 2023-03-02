<script>
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppMain
  },
  data() {
    return {

    }
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {

        }
      })
        .then(function (response) {
          console.log(response.data.results.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  },
  created() {
    this.getProjects()
  },
}
</script>

<template>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
