<template>
    <div class="goodslist">
        <router-link tag="div" to="/home/goodsinfo/1" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！我就喜欢看你想干又干不到我</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" to="/home/goodsinfo/2" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" to="/home/goodsinfo/3" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" to="/home/goodsinfo/4" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" to="/home/goodsinfo/5" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        <router-link tag="div" to="/home/goodsinfo/6" class="goodsitem">
            <img src="http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg" alt="">
            <h3 class="goodstitle">有本事你干死我啊！</h3>
            <div class="goodsinfo">
                <p class="price">
                    <span class="now">￥2499</span>
                    <span class="old">￥2999</span>
                </p>
                <p class="sell">
                    <span class="go">热卖100+</span>
                    <span class="leave">剩80</span>
                </p>
            </div>
        </router-link>
        

        <!-- 加载更多 -->
        <mt-button type="danger" size="large">加载更多</mt-button>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .goodslist{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goodsitem{
            padding: 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 5px #999;
            width: 49%;
            margin-bottom: 7px;
            // 改变因为名字过长而出现的空白问题
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 290px;
            img{ width: 100%;}
            .goodstitle{ font-size: 15px; font-weight: bold; padding: 0 5px;}
            .goodsinfo{
                background-color: #ddd;
                p{margin: 0;padding: 5px;}//去除所有的p标签的下边框
                .price{
                    .now{color: red; font-size: 14px; font-weight: bold;}
                    .old{font-size: 10px; text-decoration: line-through; margin-left: 10px;} //添加删除效果
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>