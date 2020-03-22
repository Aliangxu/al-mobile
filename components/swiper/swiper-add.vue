<template>
  <div class="swiper-add">
    <swiper v-if="images.length > 0" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img, i) in images" :key="i">
        <img
          :id="module + '_' + i"
          @click="goDetail($event, img)"
          class="swiper-item"
          :src="img.imgUrl"
        />
      </swiper-slide>
      <div slot="pagination" class="pagination"></div>
    </swiper>
    <swiper v-else :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img, i) in 1" :key="img.id">
        <img :id="module + '_' + i" class="swiper-item" v-lazy="img.imgUrl" />
      </swiper-slide>
      <div slot="pagination" class="pagination"></div>
    </swiper>
  </div>
</template>

<script>import '../common/swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from '../common/swiper/swiper-vue'

export default {
  name: 'swiper-add', // train广告swiper位
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return []
      },
    },
    module: {
      type: String,
      default: 'train',
    },
  },
  data() {
    return {
      swiperOption: {
        // 以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: true, // 可选选项，自动滑动
        loop: true,
        // initialSlide :1,//设定初始化时slide的索引。
        // speed: 100,
        // width: 375,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: 'swiper-slide-visible', // 额外的样式
        // slidesOffsetBefore : 44,// 设定slide与左边框的预设偏移量（单位Px）。
        // slidesOffsetAfter : 103.5,// 设定slide与右边框的预设偏移量（单位Px）。
        // spaceBetween : '5%',// 在slide之间设置距离（单位Px）。'10%',按container的百分比
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        pagination: {
          // 分页器
          el: '.pagination',
          bulletClass: 'swiper-add-pagination-switch', // 点样式
          bulletActiveClass: 'swiper-add-active-switch', // 选中的样式
        },
        uniqueNavElements: false, // 独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。可应用于分页器，按钮和滚动条（pagination, prev/next buttons and scrollbar elements）。当你的控制组件放在container外面的时候，需要用到。
        paginationClickable: true,
        prevButton: '.swiper-button-prev', // 上一张
        nextButton: '.swiper-button-next', // 下一张
        scrollbar: '.swiper-scrollbar', // 滚动条
        mousewheelControl: true,
        observeParents: true,
        // height: 300,// 你的slide高度
        autoHeight: true, // 高度随内容变化
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        noSwipingClass: 'removerule',
        on: {
          slideChangeTransitionEnd: function() {
            // that.handleChange(this.activeIndex,false,true)
            // console.log(this.activeIndex);// 切换结束时，告诉我现在是第几个slide
            // console.log(that.index);// 切换结束时，告诉我现在是第几个slide
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  activated() {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.screenWidth)
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  watch: {},
  methods: {
    goDetail(e, img) {
      // 下面演示点击图片的时候也触发点击图事件
      console.log('%c eeeeee', 'color:green;', e)
      // utils.sensors.quick("trackHeatMap", e.srcElement)// 第二个参数是发生事件的dom元素
      this.$router.push('/noticeDetail?outLink=' + img.outLink)
    },
  },
}
</script>

<style lang="stylus">
.swiper-add
  position relative
  height 200Px
  margin-top 10Px
  overflow hidden
  .swiper-container
    /*-webkit-transform translate3d(-20Px,0,0)*/
    /*-moz-transform translate3d(-20Px,0,0)*/
    /*-ms-transform translate3d(-20Px,0,0)*/
    /*-o-transform translate3d(-20Px,0,0)*/
    /*transform translate3d(-20Px,0,0)*/
    overflow visible ! important
    margin-top 10Px
    width 100%
    height 170Px
    text-align center
  .swiper-wrapper
    // padding-top 20Px
    padding-left 24Px
    // padding-right 512Px
  .swiper-slide
    background-color: rgb(204, 255, 102);
    height 150Px
    width 327Px
    overflow hidden
    -webkit-transition 300ms
    transition 300ms
    border-radius 6Px
    -webkit-transform scale(0)
    transform scale(0)
    position relative
  .swiper-item
    width 327Px
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
  .swiper-slide-visible
    -webkit-transform scale(0.9)
    transform scale(0.9)
  .swiper-slide-active
    top 0
    opacity 1
    -webkit-transform scale(1)
    transform scale(1)
  .pagination
    position absolute
    z-index 20
    left 0Px
    width 100%
    text-align center
    bottom -5Px
  .swiper-add-pagination-switch
    display inline-block
    width 8Px
    height 8Px
    border-radius 50%
    margin-right 11Px
    cursor pointer
    -webkit-transition 300ms
    transition 300ms
    position relative
    background rgb(204, 255, 102)
    opacity .5
  img
    border-radius 8Px
  .swiper-add-active-switch
    width 8Px
    height 8Px
    margin-right 12Px
    opacity 1
</style>
