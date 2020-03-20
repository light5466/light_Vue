// 入口文件
import Vue from 'vue';

// 导入路由的包
import VueRouter from 'vue-router';
// 安装路由模块
Vue.use(VueRouter);
// 导入路由模块
import router from './router.js';

// 导入vue-resource
import VueResource from 'vue-resource';
// 安装resource
Vue.use(VueResource);   

// 导入mui的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui';
// 注册使用
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入app组件
import app from './App.vue';

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    router
});