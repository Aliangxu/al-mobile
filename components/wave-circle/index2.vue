<template>
   <div>
      
   </div>
</template>

<script>
export default {
   name: '',//使用xx-xx-xx命名方式具体看操作文档
   props: {
      //headBottom: {//props定义样例
      //   type: Boolean,
      //   default: true,
      //},
   },
   components: {
      //[xxxx.name]: xxx,//引入组件样例如此
   },
   computed: {
      //...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
   },
   data () {
      return {
      }
   },
   methods: {
       //...mapActions(["getUserInfo"]),//vuex-action引入样例>>>通过this.getUserInfo()可直接调用获取state数据可异步
       //...mapMutations([//提交vuex-state更改样例
       //    'USER_INFO',
       //]),
   },
   mounted (){
   },
   watch: {
   }
}
</script>