<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      links: [
        {
        name : 'Homepage',
        route : 'homepage'
      },
      {
        name: 'Projects',
        route : 'projects'
      },
      {
        name: 'About Us',
        route : 'aboutus'
      },
      ]
    }
  },
}
</script>

<template lang="">
  <header class='container'>
    <section class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="link in links">
                  <router-link :to="{name : link.route}" class="nav-link">{{link.name}}</router-link>
                </li>
                <!-- <li class="nav-item">
                  <router-link :to="{name : 'projects'}" class="nav-link">Projects</router-link>
                </li>              
                <li class="nav-item">
                  <router-link :to="{name : 'aboutus'}" class="nav-link">About us</router-link>
                </li> -->
              </ul>
              <!-- <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> -->
            </div>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<style lang="">
  
</style>