<template>
  <div class="appcontainer">
      <!-- header头部 -->
      <mt-header fixed title="第一个渣渣项目"></mt-header>

      <!-- 显示框 -->
      <transition mode="out-in">
        <router-view></router-view>
      </transition>

      <!-- 尾部导航栏 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="less" scoped>
    .appcontainer {padding-top: 40px; 
    // 解决滑动出现滚动条
    overflow-x: hidden; }

    // 分开写实为了让动画实现的更好
    .v-enter{ opacity: 0; transform: translateX(100%);}
    .v-leave-to{ opacity: 0; transform: translateX(-100%); position: absolute;}
    .v-enter-active, .v-leave-active{ transition: all 0.3s ease; }
</style>
