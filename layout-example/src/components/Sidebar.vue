<template>
  <div>
    <nav class="nav-list-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/sample">Sample</router-link>
        </li>
      </ul>
    </nav>
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