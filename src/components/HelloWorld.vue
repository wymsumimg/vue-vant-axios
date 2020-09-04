<template>
  <div class="hello">

    <!-- <router-view /> -->

    <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item replace to="/Home" icon="home-o">
        标签
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return{
      active:0
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
