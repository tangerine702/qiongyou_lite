<template>
    <div class="header">
        <div class="logo"><img src="https://ice.frostsky.com/2024/04/12/cd8ecc4d71934def32e2c36e4b8eba32.png" alt="cd8ecc4d71934def32e2c36e4b8eba32.png" border="0" /></div>
        <el-menu :default-active="'/' +this.$route.path.split('/')[1]" class="el-menu-demo" mode="horizontal" router @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#10b041">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/dest">目的地</el-menu-item>
        <el-menu-item index="/community">社区</el-menu-item>
        <!-- <el-menu-item index="/travel">行程助手</el-menu-item>
        <el-submenu index="5">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu> -->
        </el-menu>
        <div class="header-right">
            <router-link to="/login">登录</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
            
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less">
.header{
    display: flex;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 299;
    .logo,.header-right{
        padding: 0 10px;
        line-height: 3.75rem;
        background-color:#545c64;
        color:#fff;
        img{
            width: 58px;
        }
    }
    .el-menu-demo{
        flex: 1;
        font-size: 16px;
        font-weight: 700;
    }
}
.header:hover{
    color: #10b041;
}
</style>