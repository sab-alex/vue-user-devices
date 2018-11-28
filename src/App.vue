<template>
  <div id="app">
    <div class="container-fluid">
      <header class="navbar">
         <Navigation />
      </header>
      <div class="row flex-xl-nowrap">
         <router-view />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navigation from "@/components/Navigation.vue";

  @Component({
    components: {
      Navigation
    }
  })
  export default class UsersView extends Vue {

  }
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
