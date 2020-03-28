<template>
    <div class="newsinfo">
        <h1 class="title">新闻内容详情=={{ $route.params.id }}</h1>
        <p class="subtitle">
            <span>时间：2020-02-32 12:23:01</span>
            <span>阅读：1次</span>
        </p>
        <hr>
        <p class="main"> 大赛好的是虎而符合付无法海去哦日而且还复合肥 染发剂汉丰湖efegufug大赛好的是方法会使肌肤见附件就很烦就好饭就去哦日而且还复合肥 染发剂汉丰大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug大赛好的是方法会使肌肤见附件就很烦就好饭就好到时经费的方面那笔钱hiUI诶去哦日而且还复合肥 染发剂汉丰湖付和伏虎而符合付无法海景房经费uahfhuwefegufug</p>
        <!-- 使用子组件 -->
        <br>
        <comment :id = "this.id"></comment>
    </div>
</template>

<script>
// 导入子组件
import comment from '../subcomponent/comment.vue';
export default {
    data() {
        return {
            id : this.$route.params.id
        };
    },
    methods:{},
    components:{
        // 注册子组件
        comment
    }
}
</script>

<style lang="less" scoped>
    .newsinfo{
        padding:0px 6px;
        .title{
            text-align: center;
            color: red;
            font-size: 16px; font-weight: bold;
        }
        .subtitle{
            font-size: 10px;
            display: flex;
            justify-content: space-between;
            color: #2206ff;
        }
        .main{
            margin-top:20px;
            font-size: 12px;
            color:#999;
        }
    }
</style>