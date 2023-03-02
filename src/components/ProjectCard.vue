<script>
import { store } from '../store.js';


export default {
  name: 'AppMain',
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
      <div class="row">
        <div class="col-5 d-flex justify-content-between" v-for="project in store.projects">
          <div class="card">
            <div class="card-header">{{ project.date }} --- {{ project.type.type }}</div>
            <img class="card-img-top" :src="project.image" alt="{{ project.title }}">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.content.substr(0, 200) }}...</p>
              <a href="#" class="btn btn-primary">Show</a>

            </div>
            <div class="card-footer">
              <p >
                {{ project.technologies }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>