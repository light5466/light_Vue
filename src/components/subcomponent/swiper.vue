<template>
    <div>
        <mt-swipe :auto="3000">
        <!-- <mt-swipe-item v-for="item in imgList" :key="item.no">
            <img src="../images/'+item.url+'" :alt="item.no">
        </mt-swipe-item> -->
        <mt-swipe-item>
            <img src="../../images/lb1.jpg" alt="1" :class="{'full':isFull}">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../images/lb2.jpg" alt="2" :class="{'full':isFull}">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../images/lb3.jpg" alt="3" :class="{'full':isFull}">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../images/lb4.jpg" alt="4" :class="{'full':isFull}">
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["isFull"]
    
}
</script>

<style lang="less" scoped>
// 轮播图样式
  .mint-swipe{height: 200px;
    img{width: 100%; height: 100%;}
  }
  .full{
      width: 100%;
  }
</style>