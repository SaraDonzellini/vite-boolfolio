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
      console.log('ciao');
      axios.get(this.urlAddress + `/api/projects/${this.$route.params.slug}`, {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.results)
          this.store.project = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    created() {
      this.getProject()
    },
  }
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
      <div class="row d-flex justify-content-between">
        <div class="col-5 mb-4">
          <div class="card">
            <div class="card-header">{{ project.author }} / {{ project.date }} ({{ project.type }})</div>
            <img class="card-img-top" :src="project.image" :alt="project.title">
            <div class="card-body">
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