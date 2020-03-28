<template>
    <div class="goodsinfo">
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :isFull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 操作区 -->
        <div class="mui-card">
            <div class="mui-card-header">有本事你干我啊</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner middle">
                <p class="price">
                    市场价：<del>￥2999</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价：<span class="now_price">￥2499</span>
                </p>
                <p>购买数量：</p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
                    <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
                    <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
                    <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                    <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
                </p>
                </div>
            </div>
            </div>

        <!-- 详情区 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner middle">
                <p>商品货号：sadkas12323</p>
                <p>库存情况：999件</p>
                <p>上架时间：2020.03.28 12:11:22</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>

    </div>
</template>

<script>
import swiper from "../subcomponent/swiper.vue";
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods:{
        goDesc(id){
            // 编程式导航
            this.$router.push({ name:"goodsdesc", params:{ id } });
        },
        goComment(id){
            this.$router.push({ name:"goodscom", params:{ id } });
        }
    },
    components:{
        swiper
    }
    
}
</script>

<style lang="less" scoped>
    .goodsinfo{
        background-color: #eee;
        overflow: hidden;
        .mui-card-content-inner{padding: 0;}
        .middle{padding: 15px;}
        .now_price{color:red; font-size: 16px; font-weight: bold;}
         .mui-card-footer {
                display: block;
                button {margin: 15px 0;}
         }
    }
</style>