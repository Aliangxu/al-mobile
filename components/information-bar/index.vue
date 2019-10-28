<template>
  <div>
    <ul class="information">
      <li>
        <img :src="leftImg">
      </li>
      <swiper v-if="isShow" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="information_slide" v-for="item in informationList" :key="item.id">
          <div class="information_content" @click="goLink(item)">
            <li
              class="information_content_li1"
              v-if="item.label"
              :style="{color: item.labelColor,borderColor: item.labelColor}"
            >
              <span class="label-c">{{item.label}}</span>
            </li>
            <li
              class="information_content_li2"
              :style="{color: item.contentColor,borderColor: item.contentColor}"
            >{{item.content}}</li>
          </div>
        </swiper-slide>
      </swiper>
      <!-- <div v-else class="information_content" @click="goLink(item)">
          <li>{{informationList[0].label}}</li>
          <li>{{informationList[0].content}}</li>
      </div>-->
    </ul>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "../common/swiper/swiper-vue";
import { ui } from "../_util";
export default {
  name: "n22-information-bar", //使用xx-xx-xx命名方式具体看操作文档
  props: {
    leftImg: {
      //props定义样例
      type: String,
      default: ""
    },
    direction: {
      //滚动方向
      type: String,
      default: "vertical" //horizontal//vertical
    },
    informationList: {
      //咨询数组
      type: Array,
      default: [
        {
          label: "N22资讯",
          url: "/center", //跳转链接
          content:
            "欢迎使用n22咨询！！！欢迎使用n22咨询！！！欢迎使用n22咨询！！！欢迎使用n22咨询！！！"
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    //...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  activated() {
    console.log("%c consultation 组件", "color:orange;", "活跃");
    this.isShow = true;
    // console.log("%c 启动xxxxxxxx", "color:orange;", this.swiper);
    // this.swiper.autoplay.run();
  },
  deactivated() {
    console.log("%c consultation 组件", "color:orange;", "销毁");
    this.isShow = false;
    // console.log("%c 启动xxxxxxxx", "color:orange;", this.swiper);
    // this.swiper.autoplay.run();
  },
  data() {
    return {
      isShow:true,
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          //可选选项，自动滑动
          disableOnInteraction: false
          // delay: 1000,
          // waitForTransition: false,
        },
        allowTouchMove: false, //禁止手滑-只能自动
        loop: true,
        speed: 1000,
        // slidesPerView: 1,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        direction: this.direction,
        grabCursor: true,
        setWrapperSize: true,
        uniqueNavElements: false, //独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。可应用于分页器，按钮和滚动条（pagination, prev/next buttons and scrollbar elements）。当你的控制组件放在container外面的时候，需要用到。
        paginationClickable: true,
        prevButton: ".swiper-button-prev", //上一张
        nextButton: ".swiper-button-next", //下一张
        scrollbar: ".swiper-scrollbar", //滚动条
        mousewheelControl: true,
        observeParents: true,
        height: ui.screenHeightR(26), //你的slide高度
        autoHeight: true, //高度随内容变化
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        noSwipingClass: "removerule",
        on: {
          slideChangeTransitionEnd: function() {
            // that.handleChange(this.activeIndex,false,true)
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            // console.log(that.index);//切换结束时，告诉我现在是第几个slide
          }
        }
      }
    };
  },
  methods: {
    //...mapActions(["getUserInfo"]),//vuex-action引入样例>>>通过this.getUserInfo()可直接调用获取state数据可异步
    //...mapMutations([//提交vuex-state更改样例
    //    'USER_INFO',
    //]),
    goLink(item) {
      //目前只是跳转本地目录--后期维护iframe等
      this.$router.push(item.url);
    }
  },
  mounted() {},
  watch: {}
};
</script>

<style lang="stylus" scoped>
.information {
  height: auto;
  overflow: hidden;
  // margin-top:30px;
  // margin-bottom:30px;
}
.information_slide {
}
.information li {
  float: left;
}
.information li:first-child img {
  display: inline-block;
  width: 17px;
  height: 20px;
  margin-left: 12px;
}
.information_content .information_content_li1 {
  border: 1px solid #4091fb;
  color: #4091fb;
  font-size: 12px;
  height: 20px;
  margin: 2px 0 5px 11px;
  line-height: 20px;
  min-width: 50px;
  max-width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.label-c {
  height: 10px;
  width: 38px;
  margin: 1px 5px 0px 5px;
}
.information_content .information_content_li2 {
  width: 249px;
  color: #000;
  font-size: 12px;
  margin: 5px 0 5px 6px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap; //使其不换行
  text-overflow: ellipsis;
  line-height: 15px;
}
</style>