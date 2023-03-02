<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      store,
    }
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.results.data)
          this.store.projects = response.data.results.data;
        })
        .catch(function (error) {
          console.log(error);
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
    <ProjectCard />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap' as *;
</style>
