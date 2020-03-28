<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                <a class="mui-control-item mui-active">
                    全部
                </a>
                <a class="mui-control-item">
                    科技
                </a>
                <a class="mui-control-item">
                    美图
                </a>
                <a class="mui-control-item">
                    风景
                </a>
                <a class="mui-control-item">
                    人物
                </a>
                <a class="mui-control-item">
                    手机
                </a>
                <a class="mui-control-item">
                    相机
                </a>
                <a class="mui-control-item">
                    前端
                </a>
                </div>
            </div>
        </div>

        <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link tag="li" to="/home/photoinfo/1"> 
                <img src="../../images/1.jpg">
                <div class="info">
                    <h3 class="info-title">this is the first photo!</h3>
                    <p class="info-body">这是我最不喜欢的零食，来给您们看看，我知道你们也不喜欢，毕竟我都不知道这是什么零食@</p>
                </div>
            </router-link>
            <router-link tag="li" to="/home/photoinfo/2"> 
                <img src="../../images/2.jpg">
                <div class="info">
                    <h3 class="info-title">this is the first photo!</h3>
                    <p class="info-body">没有数据真的很烦，都只能手动帮帮你添加一些数据，其实我很不喜欢这样，奈何自己下载还没有能力做后台，有大佬帮帮我不,这是我最不喜欢的零食，来给您们看看，我知道你们也不喜欢，毕竟我都不知道这是什么零食@</p>
                </div>
            </router-link>
            <router-link tag="li" to="/home/photoinfo/3"> 
                <img src="../../images/3.jpg">
                <div class="info">
                    <h3 class="info-title">this is the first photo!</h3>
                    <p class="info-body">这是我最不喜欢的零食，来给您们看看，我知道你们也不喜欢，毕竟我都不知道这是什么零食@</p>
                </div>
            </router-link>
            <router-link tag="li" to="/home/photoinfo/4"> 
                <img src="../../images/4.jpg">
                <div class="info">
                    <h3 class="info-title">this is the first photo!</h3>
                    <p class="info-body">这是我最不喜欢的零食，来给您们看看，我知道你们也不喜欢，毕竟我都不知道这是什么零食@</p>
                </div>
            </router-link>
        </ul>


    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        // 当组件加载完成，再初始化
        mui(".mui-scroll-wrapper").scroll({
            scrollY: false, //是否竖向滚动
            scrollX: true, //是否横向滚动
            deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true, //是否启用回弹
        });
    },
    methods:{}
}
</script>

<style lang="less" scoped>
    *{ touch-action: pan-y; }
    .photo-list{
        list-style-type: none;
        margin: 10px; padding: 0;
        li{
            margin-top: 10px;
            background-color: #ccc;
            text-align: center;
            box-shadow: 0 0 6px #999;
            position: relative;
            img{width: 100%; vertical-align: middle; }  //图片去除西安边框
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color:white;
                padding: 0 3px;
                position: absolute;
                bottom:0px;
                background-color: rgba(0,0,0,0.3);
                z-index: 99;
                max-height: 80px;;
                .info-title{ font-size: 14px; text-align: center;}
                .info-body{ font-size: 12px; text-align: left; color:white;}
            }
        }
    }
    
</style>