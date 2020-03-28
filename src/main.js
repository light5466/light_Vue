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
// 配置请求根路径
Vue.http.options.root = 'http://vue.studyit.io';

// 导入moment组件 时间插件
import moment from 'moment';

// 定义全局的时间过滤器
Vue.filter('dateFormat',function(date,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(date).format(pattern);
});

// 导入mui的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// 注册使用
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 导入app组件
import app from './App.vue';

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    router
});