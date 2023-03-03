<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'SingleProject',
  data() {
    return {
      store,
      project: '',
      urlAddress: 'http://127.0.0.1:8000',
    }
  },
  methods: {
    getProject() {
      axios.get(this.urlAddress + `/api/projects/${this.$route.params.slug}`, {
      })
        .then((response) => {
          console.log(response.data.results)
          this.project = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  created() { 
    this.getProject()
  },
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>
            {{ project.title }}
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">{{ project.author }} / {{ project.date }} ({{ project.type.type }})</div>
            <img class="card-img-top" :src="project.image" :alt="project.title">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.content }}</p>

            </div>
            <div class="card-footer">
                  <span v-for="technology in project.technologies">
                    #{{ technology.name }}
                  </span>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>