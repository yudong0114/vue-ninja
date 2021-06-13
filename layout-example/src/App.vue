<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>
<script>
import Main from './components/Main.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Main,
    Sidebar
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}
</style>