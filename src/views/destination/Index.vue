<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="content">
        <div class="title">你好,世界!</div>
        <div class="input">
          <el-input v-model="input" placeholder="搜索国家、城市、目的地" @focus="getInput" @blur="laveInput"></el-input>
          <el-button type="success" class="btn">搜索</el-button>
        </div>
        <!-- 搜索下拉容器 -->
        <div class="list" v-show="isShow">
          <ul v-loading="loading">
            <li v-for="item in destSearch">
              <a :href=item.url>
                <span>{{ item.name }}</span>
                <span>{{ item.en_name }}</span>
                <span>{{ item.country.name }}</span>
              </a>
            </li>
          </ul>
        </div>


      </div>
    </div>
    <div class="content">
      <!-- Top10组件待拆分  -->
      <!-- <h2>目的地</h2> -->
      <div class="title">实时热门TOP10</div>
      <div class="Top10">
        <div>
          <ul>
            <p>国家TOP10</p>
            <li v-for="(item, index) in Top10.country.data" :key="item.index">
              <span>{{ index + 1 }}</span>
              <a href="">{{ item.name }}</a>
              <i v-show="item.trend_status == 1"><svg t="1712330894277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="200" height="200"><path d="M896 768H126.976q-24.576 0-39.936-11.264t-20.992-28.672-0.512-38.4 22.528-41.472q37.888-40.96 79.872-86.016t86.016-91.136l86.016-92.16Q384 332.8 423.936 289.792q18.432-19.456 44.032-28.672t52.736-8.704 53.248 11.776 45.568 31.744q70.656 73.728 147.456 159.744T927.744 640q19.456 23.552 26.624 46.592t2.56 40.96-20.48 29.184T896 768z" p-id="8918" fill="#d81e06"></path></svg></i>
              <i v-show="item.trend_status == -1"><svg t="1712331066794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9315" width="200" height="200"><path d="M896 252.39H126.976q-24.576 0-39.936 11.263-15.36 11.264-20.992 28.672-5.632 17.408-0.512 38.4 5.12 20.992 22.528 41.472 37.888 40.96 79.872 86.016 41.984 45.056 86.016 91.136l86.016 92.16q44.032 46.08 83.968 89.088 18.432 19.456 44.032 28.672 25.6 9.216 52.736 8.704 27.136-0.512 53.248-11.776t45.568-31.744q70.656-73.728 147.456-159.744 76.8-86.016 160.768-184.32 19.456-23.552 26.624-46.592 7.168-23.04 2.56-40.96-4.608-17.92-20.48-29.184T896 252.389z" p-id="9316" fill="#16b420"></path></svg></i>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>境外城市TOP10</p>
            <li v-for="(item, index) in Top10.abroad_city.data" :key="item.index">
              <span>{{ index + 1 }}</span>
              <a href="">{{ item.name }}</a>
              <i v-show="item.trend_status == 1"><svg t="1712330894277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="200" height="200"><path d="M896 768H126.976q-24.576 0-39.936-11.264t-20.992-28.672-0.512-38.4 22.528-41.472q37.888-40.96 79.872-86.016t86.016-91.136l86.016-92.16Q384 332.8 423.936 289.792q18.432-19.456 44.032-28.672t52.736-8.704 53.248 11.776 45.568 31.744q70.656 73.728 147.456 159.744T927.744 640q19.456 23.552 26.624 46.592t2.56 40.96-20.48 29.184T896 768z" p-id="8918" fill="#d81e06"></path></svg></i>
              <i v-show="item.trend_status == -1"><svg t="1712331066794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9315" width="200" height="200"><path d="M896 252.39H126.976q-24.576 0-39.936 11.263-15.36 11.264-20.992 28.672-5.632 17.408-0.512 38.4 5.12 20.992 22.528 41.472 37.888 40.96 79.872 86.016 41.984 45.056 86.016 91.136l86.016 92.16q44.032 46.08 83.968 89.088 18.432 19.456 44.032 28.672 25.6 9.216 52.736 8.704 27.136-0.512 53.248-11.776t45.568-31.744q70.656-73.728 147.456-159.744 76.8-86.016 160.768-184.32 19.456-23.552 26.624-46.592 7.168-23.04 2.56-40.96-4.608-17.92-20.48-29.184T896 252.389z" p-id="9316" fill="#16b420"></path></svg></i>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>国内TOP10</p>
            <li v-for="(item, index) in Top10.domestic_city.data" :key="item.index">
              <span>{{ index + 1 }}</span>
              <a href="">{{ item.name }}</a>
              <i v-show="item.trend_status == 1"><svg t="1712330894277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="200" height="200"><path d="M896 768H126.976q-24.576 0-39.936-11.264t-20.992-28.672-0.512-38.4 22.528-41.472q37.888-40.96 79.872-86.016t86.016-91.136l86.016-92.16Q384 332.8 423.936 289.792q18.432-19.456 44.032-28.672t52.736-8.704 53.248 11.776 45.568 31.744q70.656 73.728 147.456 159.744T927.744 640q19.456 23.552 26.624 46.592t2.56 40.96-20.48 29.184T896 768z" p-id="8918" fill="#d81e06"></path></svg></i>
              <i v-show="item.trend_status == -1"><svg t="1712331066794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9315" width="200" height="200"><path d="M896 252.39H126.976q-24.576 0-39.936 11.263-15.36 11.264-20.992 28.672-5.632 17.408-0.512 38.4 5.12 20.992 22.528 41.472 37.888 40.96 79.872 86.016 41.984 45.056 86.016 91.136l86.016 92.16q44.032 46.08 83.968 89.088 18.432 19.456 44.032 28.672 25.6 9.216 52.736 8.704 27.136-0.512 53.248-11.776t45.568-31.744q70.656-73.728 147.456-159.744 76.8-86.016 160.768-184.32 19.456-23.552 26.624-46.592 7.168-23.04 2.56-40.96-4.608-17.92-20.48-29.184T896 252.389z" p-id="9316" fill="#16b420"></path></svg></i>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p>景点TOP10</p>
            <li v-for="(item, index) in Top10.poi.data" :key="item.index">
              <span>{{ index + 1 }}</span>
              <a href="">{{ item.name }}</a>
              <i v-show="item.trend_status == 1"><svg t="1712330894277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8917" width="200" height="200"><path d="M896 768H126.976q-24.576 0-39.936-11.264t-20.992-28.672-0.512-38.4 22.528-41.472q37.888-40.96 79.872-86.016t86.016-91.136l86.016-92.16Q384 332.8 423.936 289.792q18.432-19.456 44.032-28.672t52.736-8.704 53.248 11.776 45.568 31.744q70.656 73.728 147.456 159.744T927.744 640q19.456 23.552 26.624 46.592t2.56 40.96-20.48 29.184T896 768z" p-id="8918" fill="#d81e06"></path></svg></i>
              <i v-show="item.trend_status == -1"><svg t="1712331066794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9315" width="200" height="200"><path d="M896 252.39H126.976q-24.576 0-39.936 11.263-15.36 11.264-20.992 28.672-5.632 17.408-0.512 38.4 5.12 20.992 22.528 41.472 37.888 40.96 79.872 86.016 41.984 45.056 86.016 91.136l86.016 92.16q44.032 46.08 83.968 89.088 18.432 19.456 44.032 28.672 25.6 9.216 52.736 8.704 27.136-0.512 53.248-11.776t45.568-31.744q70.656-73.728 147.456-159.744 76.8-86.016 160.768-184.32 19.456-23.552 26.624-46.592 7.168-23.04 2.56-40.96-4.608-17.92-20.48-29.184T896 252.389z" p-id="9316" fill="#16b420"></path></svg></i>
            </li>
          </ul>
        
    </div>
  </div>
        <div class="wrapper">
            <button @click="go_qiongyou">前往穷游相关页面查看更多数据</button>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      isShow: false,
      destSearch: [],
      list_d: [],
      loading: false,
      Top10: []
    }
  },
  methods: {
    getInput() {
      if (this.input) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    laveInput() {
      //this.isShow = false;
    },
    go_qiongyou(){
      window.location.href = `https://place.qyer.com/`
    },
    //网络请求
    async getDestSearch(val) {
      let res = await this.$api.getDestSearch({
        keyword: val

      })

      this.destSearch = res.data.data.list;
      this.list_d = this.destSearch
      //console.log(this.list_d)
      //console.log(res.data.data.list,val,this.destSearch)
    },
    async getTop10() {
      let res = await this.$api.getTop10()
      //console.log(res.data.data)
      this.Top10 = res.data.data
    }
  },
  created() {
    this.getTop10();
  },
  watch: {
    input(val) {
      if (!val) {
        this.isShow = false

        //console.log(val)
        return;
      }
      this.isShow = true

      //console.log(val)
      this.getDestSearch(val)

    },
    list_d() {
      if (this.list_d.length > 1) {
        this.loading = false
      } else {
        this.loading = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  background: #efefef url('@/assets/images/bg1.jpeg') no-repeat top;
  height: 500px;
  display: flex;
  align-items: center;

  .content {
    width: 760px;
    position: relative;
    margin: 0 auto;

    .title {
      font-size: 56px;
      margin-bottom: 30px;
      color: #fff;
      font-weight: 700;
    }

    .input {
      display: flex;

      .btn {
        width: 138px;

      }

      /deep/ .el-input__inner {
        height: 60px;
      }
    }

    .list {
      position: absolute;
      width: 100%;
      min-height: 80px;
      background-color: #e3e3e3;
      border-radius: 10px;
      margin-top: 6px;
      z-index: 99;

      li {
        line-height: 40px;
        margin: 10px;
      }

      li:hover {
        background: #a4e2a5;
      }

      .el-loading-spinner {
        margin-top: 15px;
      }
    }
  }
}

.content{

  .title {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  
  .Top10 {
  display: flex;
  height: 660px;

  div {
    flex: 1;
    display: flex;

    p {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    
    ul {
      margin: 0 10px 0 66px;

      

      li {
        padding: 14px 0;
        font-size: 14px;

      }
    }

  }

}
}
.wrapper{
  display: flex;
  align-content: center;
  justify-content: center;
  button{
    padding: 10px 5px;
  }
  button:hover{
    background: #28b76c;
  }
}
svg{
  width: 10px;
  height: 10px;
}
</style>