<template>
  <div class="main-container">
    <list></list>
  </div>
</template>
<script>
import list from './List.vue'
export default {
    name: 'Main',
    components: {
        list
    }
}
</script>
<style>
  .main-container {
    width: 80%;
    background: #ddd;
  }
  .main-container h1 {
    padding-top: 50px;
  }
</style>