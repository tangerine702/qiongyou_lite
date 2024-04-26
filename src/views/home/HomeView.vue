<template>
  <div class="home">
    <div class="banner">
      <Banner></Banner>
      <div class="search">
        <div class="input_bg">
          <el-input v-model="input" @focus="getInput" @blur="laveInput" placeholder="搜目的地/主题攻略/问题"></el-input>
          <el-button type="success" @click="Search()">搜索</el-button>
        </div>
        <div class="list" v-show="isShow">
          <p>温馨提示</p>
          <div class="list_title">热门城市</div>
          <hr>
          <div class="hot-citys">
            <a href="" v-for="item in hotcity" :key="item.id">{{ item.name }}</a>
          </div>
        </div>
        <div class="search-list" v-show="isShowList">
          <ul>
            <li v-for="search_item in searchlist">{{ search_item.name }} {{ search_item.country.name }}</li>
          </ul>
        </div>
        
      </div>
      
    </div>
    <!-- 今日推荐 -->
    <Today></Today>
    <Shop></Shop>
  </div>
</template>

<script>
import { Col } from 'element-ui'
import Banner from './banner/banner.vue'
import Today from './Today.vue'
import Shop from './shop.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Banner,Today,Shop
  },
  data() {
    return {
      isShow: false,
      isShowList: false,
      input: '',
      hotcity: [],//热门城市
      searchlist: []//搜索数据
    }
  },
  methods: {
    getInput() {
      //console.log(this.input)
      this.isShow = true
      if (this.input) {
        this.isShowList = true
        this.isShow = false
      }
      
    },
    laveInput() {
      this.isShow = false
      this.isShowList = false
    },
    //获取当前城市
    async getHotCity() {
      let res = await this.$api.getHotCity()
      //console.log(res.data)
      this.hotcity = res.data.result.hotcity;
      //console.log(this.hotcity)
    },
    Search(){
      console.log('111')
      window.location.href = `https://search.qyer.com/qp/?keyword=${this.input}&tab=bbs` 
    } 
  },
  watch: {
    //监听input输入框内容
    input(val, old) {
      if (val != '') {
        this.isShowList = true;
        this.isShow = false
        console.log(val)
      } else {
        this.isShowList = false;
        this.isShow = true
      }
      //网络请求
      this.$api.getSearch({
        keyword: val
      }).then(res => {
        console.log(res.data)
        this.searchlist = res.data.data.list
        //console.log(this.searchlist)
      })
    }
  },
  created() {
    this.getHotCity();

  }
}
</script>
<style lang="less" scoped>

.bg {
  background: rgba(255, 255, 255,.9);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.banner {
  position: relative;
  .el-carousel__container{
    height:386px
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
    transform: translateX(-50%);

    .input_bg {
      display: flex;
      width: 400px;
      background-image: linear-gradient(90deg, rgba(40, 213, 164, .8), rgba(38, 208, 181, .8));
      padding: 10px;
      border-radius: 10px;
    }
    /deep/ .el-input__inner{
      height: 50px;
    }

    .list {
      width: 400px;
      min-height: 40px;
      border-radius: 6px;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
    }
  }
}

.hot-citys a {
  display: inline-block;
  margin: 10px 20px 10px 0;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: #666;
}

.search-list {
  width: 100%;
  min-height: 60px;
  background: #fff;
  border-radius: 6px;

  li {
    padding: 10px;
  }
}


</style>
