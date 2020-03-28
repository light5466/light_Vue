<template>
  <div class="appcontainer">
      <!-- header头部 -->
      <mt-header fixed title="第一个渣渣项目">
		  <span slot="left">
			  <mt-button icon="back" @click="goback">back</mt-button>
		  </span>
	  </mt-header>

      <!-- 显示框 -->
      <transition mode="out-in">
        <router-view></router-view>
      </transition>

      <!-- 尾部导航栏 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods:{
		goback(){
			this.$router.go(-1);
		}
	}
}
</script>


<style lang="less" scoped>
	.mint-header{z-index: 999;}
	.appcontainer {padding-top: 40px; 
	padding-bottom: 50px;
    // 解决滑动出现滚动条
	overflow-x: hidden; }
	.back{z-index: 10000;}

    // 分开写实为了让动画实现的更好
    .v-enter{ opacity: 0; transform: translateX(100%);}
    .v-leave-to{ opacity: 0; transform: translateX(-100%); position: absolute;}
	.v-enter-active, .v-leave-active{ transition: all 0.3s ease; }
	
	// 该类名，解决 tabbar 点击无法切换的问题
	.mui-bar-tab .mui-tab-item-llb.mui-active {
		color: #007aff;
	}

	.mui-bar-tab .mui-tab-item-llb {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar-tab .mui-tab-item-llb .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.mui-bar-tab{
		z-index: 999;
	}
</style>
