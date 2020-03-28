import VueRouter from 'vue-router';

// 导入对应的路由组件
import home from './components/tabbar/HomeContainer.vue';
import member from './components/tabbar/MemberContainer.vue';
import shopcar from './components/tabbar/ShopcarContainer.vue';
import search from './components/tabbar/SearchContainer.vue';
import newslist from './components/news/NewsList.vue';
import newsinfo from './components/news/NewsInfo.vue';
import photolist from "./components/photos/photoList.vue";
import photoinfo from "./components/photos/photoinfo.vue";
import goodslist from "./components/goods/goodsList.vue";
import goodsinfo from "./components/goods/goodsInfo.vue";
import goodsdesc from "./components/goods/goodsDesc.vue";
import goodscom from "./components/goods/goodsCommit.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path:'/', redirect: '/home' }, 
    { path:'/home', component: home },
    { path:'/search', component: search },
    { path:'/shopcar', component: shopcar },
    { path:'/member', component: member },
    { path:'/home/newslist', component: newslist },
    { path:'/home/newsinfo/:id', component: newsinfo },
    { path:'/home/photolist', component: photolist },
    { path:'/home/photoinfo/:id', component: photoinfo },
    { path:'/home/goodslist', component: goodslist },
    { path:'/home/goodsinfo/:id', component: goodsinfo },
    { path:'/home/goodsdesc/:id', component: goodsdesc, name:'goodsdesc' },
    { path:'/home/goodscom/:id', component: goodscom, name:'goodscom' }
  ],
  linkActiveClass : 'mui-active'
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router