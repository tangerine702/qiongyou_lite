<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item>
      <img src="@/assets/images/banner1.jpeg" >
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/images/banner2.jpeg" >
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/images/banner3.jpeg" >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {

}
</script>

<style lang="less"> 
.el-carousel__item img{
    height: 640px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>