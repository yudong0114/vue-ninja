/*<template>
  <div id="app">
    <ninjacode text="Hello NinjaCode!">
  </ninjacode></div>
</template>

<script>
import ninjacode from './components/NinjaCode.vue'

export default {
  name: 'App',
  components: {
    ninjacode
  }
}
</script>*/



<template>
  <div id="app">
    <sidebar></sidebar>
    <Main></Main>
  </div>
</template>
<script>
import Main from './components/Main.vue'
import sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Main,
    sidebar: sidebar
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
