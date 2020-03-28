<template>
  <div>
    <!-- 导入轮播图插件 -->
    <swiper :isFull="true"></swiper>

    <!-- 九宫格布局样式 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></router-link></li>
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
import swiper from "../subcomponent/swiper.vue";
export default {
  data() {
    return {

    }
  },
  methods:{},
  components:{
    swiper
  }
}

</script>

<style lang="less" scoped>

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
