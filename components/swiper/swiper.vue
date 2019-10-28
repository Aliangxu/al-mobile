<template>
   <div class="n22-swiper-single-all" v-if="value.length>0">
      <n22-swiper :autoplay="5000" transition="fade" ref="swiper" v-if="isShow">
         <n22-swiper-item :key="$index" v-for="(item, $index) in value">
            <slot :item="item" :index="$index">
               <img v-if="lazy" class="n22-swiper-single-all-img" v-lazy="item.imgUrl" alt="">
               <img v-else class="n22-swiper-single-all-img" :src="item.imgUrl" alt="">
            </slot>
         </n22-swiper-item>
      </n22-swiper>
   </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";//引入组件样例--★★此处为引入vuex推荐此方法引入vuex的各个方法属性使用

import Swiper from "./index";
import SwiperItem from "./swiper-item";
export default {
  name: "n22-swiper-all", //使用xx-xx-xx命名方式具体看操作文档
  props: {
    value: {
      //props定义样例
      type: Array,
      default: () => {
        return [];
      }
    },
    lazy: {
      //props定义样例
      type: Boolean,
      default: true
    }
  },
  components: {
    [Swiper.name]: Swiper, //引入组件样例如此
    [SwiperItem.name]: SwiperItem
  },
  computed: {
    //...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
  },
  mounted() {},
  watch: {
    value: {
      handler(val) {
        console.log("%c handler--value", "color:green;", val);
        this.isShow = false;
        setTimeout(() => {
          this.isShow = true;
        }, 10);
      },
      deep: true
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    //...mapActions(["getUserInfo"]),//vuex-action引入样例>>>通过this.getUserInfo()可直接调用获取state数据可异步
    //...mapMutations([//提交vuex-state更改样例
    //    'USER_INFO',
    //]),
  }
};
</script>

<style lang="stylus" scoped>
.n22-swiper-single-all {
  height: 200px;
  width: 375px;
  margin: auto;
}
.n22-swiper-single-all-img {
  height: 100%;
  width: 375px;
}
</style>