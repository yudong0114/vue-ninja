<template>
  <div class="main-container">
    <router-view>
      <list></list>
      <sample></sample>
    </router-view>
  </div>
</template>
<script>
import List from './List'
import Sample from './Sample'
export default {
  components: {
    List,
    Sample
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