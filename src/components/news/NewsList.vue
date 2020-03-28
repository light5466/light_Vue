<template>
    <div>
        <!-- <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{ item.title }}</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：{{ item.add_time | dateFormat }}</span>
                    <span>点击：{{item.click}}次</span>
                    </p>
                </div>
                </router-link>
            </li>
        </ul> -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/5">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>第一条新闻</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：2020年3月20日 12:22:08</span>
                    <span>点击：1次</span>
                    </p>
                </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>第一条新闻</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：2020年3月20日 12:22:08</span>
                    <span>点击：1次</span>
                    </p>
                </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/2">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>第一条新闻</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：2020年3月20日 12:22:08</span>
                    <span>点击：1次</span>
                    </p>
                </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/3">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>第一条新闻</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：2020年3月20日 12:22:08</span>
                    <span>点击：1次</span>
                    </p>
                </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/4">
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                    <h1>第一条新闻</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：2020年3月20日 12:22:08</span>
                    <span>点击：1次</span>
                    </p>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// import  { Toast } from "mint-ui";
// export default {
//     data() {
//         return {
//             // 定义一个新闻列表的空数组
//             newslist:[]
//         };
//     },
//    created() {
    //加载就执行此方法
//        this.getNewsList();
//    },
//     methods:{
//         // 定义获取新闻列表的方法
//         getNewsList() {
//             this.$http.get('api/getnewslist').then(result=>{
//                 if(result.body.staus === 0) {
//                     this.newslist = result.body.message;
//                 }else {
//                     Toast("获取失败！");
//                 }
//             });
//         }
//     }
// };
</script>

<style lang="less" scoped>
    .mui-table-view {
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                // 实现两边布局
                justify-content: space-between;
            }
        }
    }
</style>
