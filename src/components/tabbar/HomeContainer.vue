<template>
  <div>
    <!-- 导入轮播图插件 -->
    <mt-swipe :auto="3000">
      <!-- <mt-swipe-item v-for="item in imgList" :key="item.no">
        <img src="../images/'+item.url+'" :alt="item.no">
      </mt-swipe-item> -->
      <mt-swipe-item>
        <img src="../../images/lb1.jpg" alt="1">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/lb2.jpg" alt="2">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/lb3.jpg" alt="3">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../images/lb4.jpg" alt="4">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格布局样式 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 

    
  </div>
</template>

<script>
// import { Toast } from 'mint-ui';
// export default {
//   data() {
//     return {
//       imgList:[]
//     };
//   },
//   created() {
//     this.getImg();
//   },
//   methods: {
//     getImg() {
//       // 获取轮播图的方法
//       var img = [{no: 1, url: 'lb1.jpg'},
//                  {no: 2, url: 'lb2.jpg'},
//                  {no: 3, url: 'lb3.jpg'},
//                  {no: 4, url: 'lb4.jpg'}],
//       this.imgList = img;
//       // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
//       //   if (result.body.status === 0) {
//       //     this.imgList = result.body.message;
//       //     Toast('获取轮播图ojbk');
//       //   } else {
//       //     Toast('获取轮播图失败');
//       //   }
//       // });
//     }
//   }
// }

</script>

<style lang="less" scoped>
// 轮播图样式
  .mint-swipe{height: 200px;
    img{width: 100%; height: 100%;}
  }

  // 九宫格布局样式
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }

    .mui-media-body{
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>
