<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultiData} from 'network/home'

export default {

  name:'Home',
  data() {
    return {
      banner:[]
    }
  },
  created() {
    getHomeMultiData().then(res =>{
      console.log(res)
      // this.banner = res.data.banner; //将请求到的数据保存
    })
  },
  components:{
    NavBar
  }
}
</script>

<style>
    @import "./home.css";
</style>