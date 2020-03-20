import VueRouter from 'vue-router';

// 导入对应的路由组件
import home from './components/tabbar/HomeContainer.vue';
import member from './components/tabbar/MemberContainer.vue';
import shopcar from './components/tabbar/ShopcarContainer.vue';
import search from './components/tabbar/SearchContainer.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path:'/', redirect: '/home' }, 
    { path:'/home', component: home },
    { path:'/search', component: search },
    { path:'/shopcar', component: shopcar },
    { path:'/member', component: member }
  ],
  linkActiveClass : 'mui-active'
  // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router