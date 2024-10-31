<template>
  <the-header>
  <nav>
   <h1>
  <router-link to="/">Find a Coach</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/coaches">All Coaches</router-link>
      </li>
      <li>
         <router-link to="/requests">Requests</router-link>
      </li>
    </ul>
  </nav>
  <the-header>
</template>

<script>
  export default {
    
    import TheHeader from "./components/layout/TheHeader.vue";
  
     components: {
       TheHeader,
     }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>