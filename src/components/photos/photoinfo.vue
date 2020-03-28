<template>
    <div class="infobox">
        <h3>这是我不喜欢的零食</h3>
        <p class="subtitle">
            <span>发表时间：2020年3月27日21:10:55</span>
            <span>点击：1次</span>
        </p>
        <hr>


        <!-- 缩略区域 -->
        <div class="thumbs">
            <img class="preview-img" src="../../images/1.jpg" height="100" @click="$preview.open(1)">
            <img class="preview-img" src="../../images/2.jpg" height="100" @click="$preview.open(2)">
            <img class="preview-img" src="../../images/3.jpg" height="100" @click="$preview.open(3)">
            <img class="preview-img" src="../../images/4.jpg" height="100" @click="$preview.open(4)">
        </div>
        <!-- 内容 -->
        <div class="main">是很大声的阿达对话框静安寺都开始的开始的凯撒的开始的撒大声地来我的安利好大的了华为滑动哈哈哒好厉害的大家讲你奥斯卡的静安寺的那么惨四十几好的就是就是刺激是你唱的发啥都会 上课就和返回IE我我一楼盘发西黄发黄发好飞安理会你的省点钱安徽IEFHFBJ</div>
        <!-- 评论区 -->
        <br><comment></comment>

    </div>
</template>

<script>
// 导入子组件
import comment from '../subcomponent/comment.vue';
export default {
    data() {
        return{}
    },
    methods:{},
    components:{
        comment
    }
}
</script>

<style lang="less" scoped>
    .infobox{
        padding: 3px; 
        h3{color:#2206ff; font-size: 16px; text-align: center; margin: 10px 0;}
        .subtitle{display: flex; justify-content: space-between;font-size: 12px;}
        .main{font-size: 12px; line-height: 22px;}

        // 图片
        .thumbs{ 
            img{margin: 8px; box-shadow: 0 0 6px #999;} 
        }
    }
</style>