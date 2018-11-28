<template>
  <ul class="nav">
    <li class="nav-item">
       <router-link class="nav-link" to="/"  v-bind:class="{active: $route.path == '/'}">Users</router-link>
    </li>
    <li class="nav-item">
       <router-link class="nav-link" to="/devices" v-bind:class="{active: $route.path == '/devices'}">Devices</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  export default class Navigation extends Vue {
    
  }
</script>
<style scoped>
  .nav-link.active{
    color:grey;
  }
</style>
