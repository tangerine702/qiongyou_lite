<template>
    <div class="section">
        <div class="title">今日推荐</div>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in todayInfo">
                    <a :href=item.data.href>
                        <div class="grid-content bg-purple">
                        <div class="item">
                            <img :src=item.data.pic class="item_img">
                        </div>
                        <div class="info">
                            <div class="subtitle">{{ item.data.subject }}</div>
                            <div class="bottom">
                                <template v-if="item.type == 'video'">
                                    <span class="tag">
                                        <svg t="1712846909899" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3897" width="200" height="200"><path d="M849.5 962l-675 0c-66.284 0-112.5-46.216-112.5-112.5l0-675c0-66.284 46.216-112.5 112.5-112.5l675 0c66.284 0 112.5 46.216 112.5 112.5l0 675c0 66.284-46.216 112.5-112.5 112.5zM99.5 212l0 75 150 0-72.858-182.135c-46.619 13.532-77.142 53.522-77.142 107.135zM249.5 99.5l75.001 187.5 112.481 0-74.982-187.5-112.5 0zM436.982 99.5l75.018 187.5 112.5 0-75-187.5-112.519 0zM624.5 99.5l75 187.5 112.5 0-75-187.5-112.5 0zM924.5 212c0-66.284-46.216-112.5-112.5-112.5l75.001 187.5 37.499 0 0-75zM924.5 324.5l-824.999 0 0 487.5c0 66.284 46.216 112.5 112.5 112.5l600 0c66.284 0 112.5-46.216 112.5-112.5l0-487.5zM362 437l337.5 187.5-337.5 187.5 0-374.999z" fill="#272636" p-id="3898"></path></svg>                                        视频
                                    </span>
                                    <span class="left">{{ item.data.desc}}</span>
                                    <span class="right">{{ item.data.tag }}</span>
                                </template>
                                <template v-else-if="item.type == 'bbs'">
                                    <span class="tag">
                                        <svg t="1712846812772" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2679" width="200" height="200"><path d="M704 914.474667c2.901333-2.304 5.504-4.736 7.808-7.253334l112.64-122.368c8.704-9.472 16.469333-23.552 21.76-38.186666H768c-35.541333 0-64 28.586667-64 64.213333v103.594667z m-42.666667 21.162666v-124.757333A106.581333 106.581333 0 0 1 768 704h85.333333V159.530667C853.333333 118.698667 822.784 85.333333 785.066667 85.333333H238.933333C201.344 85.333333 170.666667 118.570667 170.666667 159.573333v704.853334c0 41.045333 30.549333 74.24 68.266666 74.24h401.365334c6.528 0 13.738667-1.066667 21.034666-2.986667zM640.298667 981.333333H238.933333C176.810667 981.333333 128 928.256 128 864.426667V159.573333C128 95.786667 176.896 42.666667 238.933333 42.666667h546.133334C847.146667 42.666667 896 95.829333 896 159.530667v551.168c0 34.389333-16.853333 77.696-40.192 103.04l-112.64 122.410666c-24.021333 26.112-67.413333 45.184-102.826667 45.184z" p-id="2680"></path><path d="M320 256h256a21.333333 21.333333 0 1 0 0-42.666667h-256a21.333333 21.333333 0 0 0 0 42.666667zM320 426.666667h341.333333a21.333333 21.333333 0 1 0 0-42.666667h-341.333333a21.333333 21.333333 0 0 0 0 42.666667zM320 597.333333h341.333333a21.333333 21.333333 0 1 0 0-42.666666h-341.333333a21.333333 21.333333 0 1 0 0 42.666666z" p-id="2681"></path></svg>
                                        游记
                                    </span>
                                    <span class="left">{{ item.data.username}}</span>
                                    <span class="right">{{ item.options }}浏览</span>
                                </template>
                                <template v-else>
                                    <span class="tag">
                                        <svg t="1712846613458" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1492" width="200" height="200"><path d="M825.6 554.666667c-64 0-121.6-38.4-155.733333-89.6C633.6 516.266667 576 554.666667 512 554.666667s-121.6-38.4-155.733333-89.6C320 516.266667 264.533333 554.666667 198.4 554.666667 89.6 554.666667 0 465.066667 0 356.266667v-8.533334L151.466667 0h721.066666L1024 345.6v8.533333c0 110.933333-89.6 200.533333-198.4 200.533334z m-200.533333-219.733334h85.333333c0 61.866667 51.2 134.4 113.066667 134.4 59.733333 0 108.8-46.933333 113.066666-104.533333L817.066667 85.333333H206.933333L85.333333 364.8c4.266667 57.6 53.333333 104.533333 113.066667 104.533333 64 0 113.066667-74.666667 113.066667-134.4h85.333333c0 61.866667 51.2 134.4 113.066667 134.4 66.133333 0 115.2-74.666667 115.2-134.4zM810.666667 1021.866667H213.333333c-83.2 0-149.333333-64-149.333333-142.933334V595.2h85.333333v283.733333c0 32 27.733333 57.6 64 57.6h597.333334c34.133333 0 64-25.6 64-57.6V595.2h85.333333v283.733333c0 78.933333-66.133333 142.933333-149.333333 142.933334z" p-id="1493"></path></svg>
                                        商城
                                    </span>
                                    <span class="left">{{ item.data.start_pos}}</span>
                                    <!-- 价格脱离文档流 -->
                                    <span class="right" v-html="item.data.price"></span>
                                </template>
                            </div>
                        </div>
                    </div>
                    </a>
                </el-col>

            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todayInfo: []
        }
    },
    methods: {
        //今日推荐
        async getTodyInfo() {
            let res = await this.$api.getTodyInfo();
            console.log(res.data.data)
            this.todayInfo = res.data.data
        }
    },
    created() {
        this.getTodyInfo();
    }
}
</script>

<style lang="less">
a{
    color: #000;
    text-decoration: none;
}
.title {
    text-align: center;
    font-size: 30px;
    margin: 10px 0 10px 0;
}

.item_img {
    width: 100%;
    height: 185px;
    -o-object-fit: fill;
    object-fit: fill;
    vertical-align: top;
    transition: all 1.2s ease;
}
.item_img:hover{
    transform: scale(1.1);
}

.content {
    width: 1160px;
    margin: 0 auto;
    .item{
        margin: 10px 0;
        overflow: hidden;
    }
}

.info {
    padding: 0 18px;
    border: 1px solid #ececec;
    border-top: 0;
    height: 126px;
    line-height: 24px;
    overflow: hidden;
    position: relative;

    .subtitle {
        margin-top: 24px;
        height: 48px;
        font-size: 16px;
        overflow: hidden;
    }

    .bottom {
        margin-top: 24px;
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #636363;
        .tag{
            position: absolute;
            top: 0;
            left: 1px;
            color: #000000;
            height: 20px;
            border: 1px solid #717171;
            width: 98%;
            text-align: center;
            border-radius: 6px;
            background: #29A543;
            color: #fff;
        }
        .left {
            display: inline-block;
            max-width: 70%;
            min-width: 55%;
            color: #636363;
            font-size: 14px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .right {
            float: right;
        }
    }

}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

svg{
    width: 10px;
    height: 10px;
}
</style>