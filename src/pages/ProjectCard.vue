<script>
import { store } from '../store.js';


export default {
  name: 'ProjectCard',
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  created() {

  },
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>
            My Projects
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-5 mb-4" v-for="project in store.projects">
          <div class="card">
            <div class="card-header">{{ project.author }} / {{ project.date }} ({{ project.type.type }})</div>
            <img class="card-img-top" :src="project.image" alt="{{ project.title }}">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.content.substr(0, 200) }}...</p>
              <router-link :to="{name: 'singleProject', params: {slug: project.slug}}" class="btn btn-success">Read more...</router-link>

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