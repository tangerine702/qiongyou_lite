<template>
  <div class="conContainer">
    <h1>穷游论坛 | 分享·结伴·找攻略</h1>
    <router-link to="/community/strategy">游记攻略</router-link>
    <router-link to="/community/and">结伴同游</router-link>
    <div class="all flex">
      <router-view></router-view>
      <div class="lc-fr">
        <div class="regInfo">
          <p>
            加入穷游社区<br>
            和80,000,000穷游er在一起,<br>
            发现最世界
          </p>
          <button>注册穷游</button>
          <p>已有账号？立即<a href="">登录</a></p>
          <p>或通过第三方登录<span>淘</span><span>QQ</span></p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

}
</script>

<style lang="less" scoped>
.conContainer {
  margin: 0 auto;
  width: 980px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 5px;
  border-radius: 6px;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.router-link-active {
  background: #ecf5ff;
  color: black;
}

/*--------------- 右侧-------------------*/
.lc-fr {
  margin: 40px 0 0 30px;
  width: 270px;
}

.regInfo {
  width: 268px;
  height: 260px;
  background: url(//common1.qyerstatic.com/bbs/old/images/index/regbg.png) no-repeat 50%;

  p {
    padding: 14px 0 0 22px;
    font-size: 16px;
    color: #fff;
    line-height: 26px;
  }

  button {
    margin: 14px 0 0 22px;
    font-size: 16px;
    line-height: 26px;
  }

  p a {
    color: #10b041;
  }
}
</style>