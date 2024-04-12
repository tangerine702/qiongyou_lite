<template>
    <div class="shop">
        <div class="content">
            <div class="shop_title">
                商城
            </div>
            <div class="list">
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" v-for="item in shoplist">
                        <div class="grid-content bg-purple card">
                            <div class="pic">
                                <img :src=item.pic alt="">
                            </div>
                            <div class="desc">
                                <div class="title">{{ item.title }}</div>
                                <div class="mark">{{ item.tag }}</div>
                                <div class="price" v-html="item.price"></div>
                            </div>
                        </div>
                    </el-col>
                    
                </el-row>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    //getHomeShop
    data(){
        return{
            shoplist:[]
        }
    },
    methods:{
        async getHomeShop(){
            let res = await this.$api.getHomeShop()
            //console.log(res);
            this.shoplist = res.data.data
        }
    },
    created() {
        this.getHomeShop()
    },
}
</script>

<style lang="less" scoped>
.shop {
    background: linear-gradient(180deg, #6dd27c, #1bcdae);
    
    .content {
        width: 1160px;

        .shop_title {
            text-align: center;
            font-size: 30px;
            margin: 10px 0 10px 0;
            padding: 40px 0 10px 0;
            color: #ececec;

        }
    }
}

.card {
    display: flex;
    margin-bottom: 20px;
    background: #fff;
    .pic {
        display: flex;

        img {
            width: 160px;
            height: 160px;
            border-radius: 2px;
        }
    }

    .desc {
        flex: 1;
        position: relative;
        padding-left: 10px;
        .title {
            margin-right: 3px;
            max-height: 52px;
            font-size: 16px;
            color: #000;
            font-weight: 700;
            line-height: 26px;
            overflow: hidden;
            text-align: left;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .mark {
            display: inline-block;
            padding: 0 6px;
            box-sizing: border-box;
            border-radius: 2px;
            font-size: 14px;
            line-height: 18px;
            height: 20px;
            border: 1px solid #4a90e2;
            color: #4a90e2;
        }

        .price {
            position: absolute;
            bottom: 6px;
            right: 15px;
            font-size: 20px;
            color: #ff7362;
        }
    }

}



</style>