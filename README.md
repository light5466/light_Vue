# 这是一个渣渣的项目

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

### 尝试第二次提交

## 改造新闻资讯 路由链接 /home/newslist
    1 绘制页面  使用mui
    2 使用vue-resource获取数据
    3 渲染数据到页面

## 实现点击新闻列表 跳转到新闻详情
    1 改造链接 同时在跳转的时候传输一个id标识符
    2 创建路由组件 newsinfo
    3 配置路径
## 实现新闻详情页的布局和数据渲染

## 单独封装一个评论组件 comment
    1 先建一个组件模版
    2 在需要的页面上添加 import导入
    3 在父组件使用component属性导入组件 注册组件
    4 在父组件中使用

## 加载更多评论
    1 让页码加一，然后调用方法，
    2 数组拼接 concat（） 方法

## 发表评论实现
    1 对文本框做双向绑定
    2 注册发表事件
    3 判断输出是否为空
    4 通过vue-resource提交数据
    5 刷新评论

## 图片分享链接
    1 改造路由链接
    2 创建模版
## 图片分享界面布局
    1 制作头部的滑动栏 mui
     + 滑动组件需要借助js 需要初始化一下
     + 导入mui。js —————— 调用官方提供的方法初始化
     + 导包出现错误，在严格模式下不可用，解决方法：移除严格模式 安装插件去除
    2 制作下面的图片展示列表 mint-ui
     + 需要使用懒加载技术，可以使用mint-ui提供的 lazy-load 组件
     + 懒加载需全部导入mint-ui组件
## 点击图片跳转图片详情页面
    1 在改造li为router-link时，要使用tag属性指定标签
    2 缩略图的制作，借助插件 vue-preview 
    3 使用插件注意事项： img标签不能去掉， v-for渲染， 必须有w和h属性

## 商品购买页面设计实现
    1 两列经典的商品布局
    2 display布局， 遇到标题长度不一，占用了多行，导致两个不一样，可以display设置，并设置最低高度。
### 尝试在手机上进行预览和测试
    1 确保手机和电脑在同一个wifi
    2 设置package.json 文件，在dev后面添加 --host指令，把当前电脑的ip地址设置为 host
        + 运行cmd ‘ipconfig’ 查看wifi 的ip

## vue-router除了router-link跳转之外，还有 编程式导航
    1 区分this.$router and this.$route
        + 前 路由导航对象，可以轻松实现前进 后退和跳转
        + 后 路由参数对象， params 和 query

## 商品详情的轮播图可以做成一个组件和首页共用
    1 使用三步骤： 导入 注册 使用
    2 解决轮播图自适应问题  传入值设置
    
