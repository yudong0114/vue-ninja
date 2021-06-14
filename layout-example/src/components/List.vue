<template>
  <div class="main-list-wrapper">
    <ul class="main-list">
      <listitem v-for="dream in dreams" :dream="dream" :key="dream.id"></listitem>
    </ul>
  </div>
</template>
<script>
import listitem from './ListItem.vue'
// コンポーネントでdataを使う場合、data()を使う
export default {
    name: 'List',
    components: {
        listitem
    },
    data() {
        return{
            dreams: [
                { id: 1, name: "フルスタックエンジニアになりたい"},
                { id: 2, name: "バックエンドエンジニアになりたい"},
                { id: 3, name: "フロントエンドエンジニアになりたい"},
                { id: 4, name: "データサイエンティストになりたい"},
                { id: 5, name: "スティーブジョブズになりたい"}
            ]
        }
    }
}
</script>
<style>
  .main-list-wrapper{
    background: #fff;
    width: 80%;
    margin: 2rem auto;
    border-radius: 15px;
  }
  .main-list {
    padding: 2rem;
    text-align: left;
  }
</style>
