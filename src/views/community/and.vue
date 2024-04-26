<template>
  <div class="content">
    <h4>我想约上你，一起看世界 | <a href="">更多待约穷游er>></a></h4>
    <ul>
      <li v-for="item in and">
        <div class="and_title flex">
          <img :src=item.face alt="">
          <span>{{ item.username }}</span>
          <span>{{ item.viewNumber }}人浏览</span>
          <span>最后回复于{{ item.last_post_time }}</span>
        </div>
        <div class="and_content">
          <a :href=item.url><div class="top_title">{{ item.subject }}</div></a>
          <div class="togo_text flex">
            <div class="left">
              <p>{{ item.together_info.departure_time_earliest }}</p>
              <p>{{ item.together_info.departure_time_latest }}</p>
            </div>
            <div class="right">
              <span v-for="i in item.together_info.placename">{{ i.cn_name }}、</span>
            </div>
          </div>
        </div>
        <i class="ylc-line"></i>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      and: [],
      togo:[]
    }
  },
  methods: {
    async getand() {
      let res = await this.$api.getand();
      console.log(res.data.data)
      this.and = res.data.data
    }
  },
  created() {
    this.getand()
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 0 auto;
  width: 980px;

  h4 {
    margin-top: 20px;
    margin-left: 5px;

    a {
      color: #42b983;
    }
  }

  li {
    position: relative;
    margin-top: 30px;
  }

  .and_title {
    * {
      justify-content: center;
      align-content: center;
    }

    span {
      margin-left: 3px;
      padding: 10px 3px;
      background: #ccc;
      border-radius: 6px;
    }

    img {
      width: 40px;
      border-radius: 50%;
    }
  }

  .and_content {
    margin-left: 40px;

    .top_title {
      width: 400px;
    }

    .togo_text {
      border: 1px solid #ccc;
      width: 400px;

      .left {
        width: 110px;
        border-right: 1px solid #ccc;
      }

      .right {
        position: relative;
        overflow: hidden;
        height: 38.6px;
        flex: 1;
        padding-left: 10px;

        .right::after {
          content: "...";
          
        }
      }
    }
  }
}

.ylc-line {
  position: absolute;
  left: 23px;
  top: 23px;
  height: 100%;
  z-index: -1;
  border-left: 1px solid #ececec;
}
</style>