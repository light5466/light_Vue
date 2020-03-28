<template>
    <div class="com">
        <h3>请吐槽</h3>
        <hr>
        <textarea class="txt" placeholder="请bb！" cols="30" rows="4" maxlength="120"></textarea>
        <mt-button type="primary" size="large">bb开始</mt-button>

        
    </div>
</template>

<script>
export default {
    // 获取所有的数据渲染到页面
    // data() {
    //     return {

    //     };
    // },
    // created(){
    //     this.getComments();
    // },
    // methods:{
    //     getComments() {
    //         this.$http.get("api/：'+this.id+'").then(result=>{
    //             // 操作返回的数据
    //         });
    //     }
    // },
    // // 子组件获取父组件内容
    // props:['id']
    
}
</script>

<style lang="less" scoped>
    .com{
        .txt{
            margin: 0px;
        }
    }
</style>