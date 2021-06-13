<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
    <navlist></navlist>
  </div>
</template>
<script>
    import navlist from './NavList.vue'
    export default {
        name: 'Sidebar',
        components: {
            navlist
        }
    }
</script>
<style>
  .sidebar-container {
    width: 20%;
    background: #fff;
  }
  .sidebar-container h1 {
    border-bottom: 1px solid #40b983;
    padding: 20px 0;
    color: #40b983;
  }
</style>