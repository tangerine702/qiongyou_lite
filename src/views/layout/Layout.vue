<template>
  <div>
    <!-- 公共导航区 -->
    <Header></Header>
    
    <router-view></router-view>

    <!-- 公共底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
export default {
  components:{
    Header,Footer
  }
}
</script>

<style>

</style>