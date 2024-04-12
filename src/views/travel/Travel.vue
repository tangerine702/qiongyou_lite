<template>
  <div class="content">
    <div class="to_move flex" v-show="isShow">
      <div class="left">目的地</div>
      <div class="flex1 row">
        <a href="">w</a>
        
      </div>
      <div class="right">更多</div>
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>

export default {
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    async gettoMove(){
      //let res = await this.$api.gettoMove();
      
      
    },
    gettoMove(val){
      this.$api.gettoMove({
        keyword:val
      }).then(res=>{
        console.log(res,111)
      })
    },
    
  },
  created(){
    this.gettoMove();
    this.getkeytxt();
  }
}
</script>

<style lang="less">
.content {
    width: 1160px;
    margin: 0 auto;
    .item{
        margin: 10px 0;
        overflow: hidden;
    }
}
.to_move{
  border: 1px solid #ccc;
  margin-top: 20px;
  height: 200px;
  .left{
    width: 110px;
    text-align: center;
    color: #7fab94;
  }
  .row{
    min-width: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABAQMAAADO7O3JAAAABlBMVEUAAAB/q5RAW6TdAAAAAXRSTlMAQObYZgAAAApJREFUCNdjaAAAAIIAgd1DavQAAAAASUVORK5CYII=) 0 / 2px 1px repeat-x;
    a{
      font-size: 12px;
      margin-right: 28px;
    }
  }
  .right{
    padding-top: 50px;
    width: 96px;
    text-align: center;
  }
}


</style>