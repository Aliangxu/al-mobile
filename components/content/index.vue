<template>
  <div id="listswiper" class="listswiper">
    <div
      :style="{
        top: getSwiperTop,
        bottom: getSwiperBottom,
        'background-color': backgroundColor ? backgroundColor : '#ffffff'
      }"
    >
      <template>
        <slot name="custom-content">
          <!--轮播-->
          <swiper
            v-if="needSwiper"
            ref="mySwiper"
            :options="swiperOption"
            :style="{
              top: getSwiperTop,
              bottom: getSwiperBottom,
              'background-color': backgroundColor
                ? backgroundColor
                : tabs[curIndex] && tabs[curIndex].upCallbackFun
                ? '#efeeee'
                : '#ffffff'
            }"
          >
            <!--首页-->
            <swiper-slide v-for="(tab, i) in tabs" :key="i">
              <transition :name="listAnm">
                <mescroll-vue
                  v-show="!listAnm || i == curIndex"
                  :ref="'mescroll' + i"
                  :down="getMescrollDown(i, tab)"
                  :up="getMescrollUp(i,'dataListSwiper')"
                  @init="mescrollInit(i, arguments)"
                >
                  <slot name="content"></slot>
                  <!-- 列表数据 -->
                  <div :id="`dataListSwiper${i}`"></div>
                  <slot
                    v-if="isMescrollLoadList"
                    :id="'dataList' + i"
                    :list="tabs[i].list"
                    :swiperIndex="curIndex"
                  ></slot>
                  <slot v-else></slot>
                  <div v-if="!connection" class="mescroll-empty">
                    <img
                      v-if="dealExceptionShow(emptyImg, 'label') == 'img'"
                      class="empty-icon"
                      :src="emptyImg"
                    />
                    <p
                      v-if="dealExceptionShow(emptyImg, 'label') == 'p'"
                      class="empty-tip"
                    >
                      {{ dealExceptionShow(emptyImg, 'show') }}~
                    </p>
                    <p @click="refresh" class="empty-btn">刷新</p>
                  </div>
                </mescroll-vue>
              </transition>
            </swiper-slide>
          </swiper>
          <div class="not-swiper-div" :style="{ top: getSwiperTop }" v-else>
            <div v-for="(tab, i) in tabs" :key="i" style="height:100%" v-show="i == curIndex">
              <mescroll-vue
                :ref="'mescroll' + i"
                :down="getMescrollDown(i, tab)"
                :up="getMescrollUp(i,'dataList')"
                @init="mescrollInit(i, arguments)"
              >
                <slot name="content"></slot>
                <!-- 列表数据 -->
                <div v-if="(!connection || errorMessage)" class="mescroll-empty">
                  <img
                    v-if="dealExceptionShow(emptyImg, 'label') == 'img'"
                    class="empty-icon"
                    :src="emptyImg"
                  />
                  <p
                    v-if="dealExceptionShow(emptyImg, 'label') == 'p'"
                    class="empty-tip"
                  >
                    {{ dealExceptionShow(emptyImg, 'show') }}~
                  </p>
                  <p @click="refresh" class="empty-btn">刷新</p>
                </div>
                <slot
                  v-else-if="isMescrollLoadList"
                  :id="'dataList' + i"
                  :list="tabs[i].list"
                  :swiperIndex="curIndex"
                ></slot>
                <slot v-else></slot>
              </mescroll-vue>
            </div>
          </div>
        </slot>
      </template>
    </div>
  </div>
</template>

<script>
// 轮播组件: https://github.com/surmon-china/vue-awesome-swiper
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import '../common/swiper/dist/css/swiper.css'
// import {swiper, swiperSlide} from '../common/swiper/swiper-vue'
// 引入mescroll的vue组件
import MescrollVue from '../common/mescroll.js/mescroll.vue'

// import { mapMutations, mapState } from "vuex";

import {isEmptyObject, ui} from '../_util'

export default {
  name: 'al-content', // 使用xx-xx-xx命名方式具体看操作文档
  components: {
    // swiper, // 轮播组件
    // swiperSlide, // 轮播组件
    MescrollVue, // Mescroll组件
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    isTop: {
      type: Boolean,
      default: true,
    },
    isAutoTopMargin: {
      type: Boolean,
      default: true,
    },
    isAutoMescrollDown: {
      type: Boolean,
      default: true,
    },
    needSwiper: {
      // 是否启用swiper
      type: Boolean,
      default: false,
    },
    upUse: {
      // 是否启用上拉下载
      type: Boolean,
      default: true,
    },
    isMescrollUp: {
      type: Boolean,
      default: true,
    },
    isMescrollLoadList: {
      type: Boolean,
      default: false,
    },
    isMescrollDown: {
      type: Boolean,
      default: false,
    },
    secMenuIsShowP: {
      type: Boolean,
      default: true,
    },
    listAnm: {
      type: String,
      default: '',
    },
    swiperTop: {
      type: [Number, Array],
      default: () => {
        return []
      },
    },
    swiperBottom: {
      type: Array,
      default: () => {
        return []
      },
    },
    page: {
      type: Object,
      default: () => {
        return {
          num: 1,
          size: 10,
          time: null,
        }
      },
    },
    tabs: {
      type: Array,
      default: () => {
        return [
          {
            name: '默认单个列表不展示',
            listType: '1',
            mescroll: null,
            list: [],
            isListInit: false,
            isMescrollUp: true,
            upCallbackFun: '',
          },
        ]
      },
    },
    upCallbackFun: {
      type: String,
      default: () => {
        return ''
      },
    },
    upRefreshFun: {
      type: String,
      default: () => {
        return ''
      },
    },
    backgroundColor: {
      type: String,
      default: () => {
        return ''
      },
    },
    htmlNodata: {
      type: String,
      default: () => {
        return ''
      },
    },
    errorMessage: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  computed: {
    // ...mapState(["common"]), //引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
    swiper() {
      // 轮播对象
      return this.$refs.mySwiper?this.$refs.mySwiper.swiper:{}
    },
    getSwiperTop() {
      // 内容区距离顶部距离
      let head = 0
      if (Array.isArray(this.swiperTop)) {
        head = this.swiperTop[this.curIndex] || 0
      } else {
        head = this.swiperTop || 0
      }
      return ui.dealPxToVw(head + (this.isAutoTopMargin ? ui.allHeadTopPx : 0)) + 'vw'
    },
    getSwiperBottom() {
      // 红线的位置
      const head = this.swiperBottom[this.curIndex] || 0
      return ui.dealPxToVw(head) + 'vw'
    },
    dealExceptionShow() {
      return (val, is) => {
        if (this.errorMessage) {
          val = `p<>:${this.errorMessage}`
        }
        let type = 'img'
        let show = val
        val && val.indexOf('<>') > -1 && (type = val.split('<>')[0]) && (show = val.split('<>:')[1])
        return is === 'show' ? show : type
      }
    },
  },
  data() {
    return {
      test: false,
      secMenuIsShow: this.secMenuIsShowP,
      curIndex: this.value || 0, // 当前tab的下标
      swiperOption: {
        // 轮播配置
        watchOverflow: true, // 因为仅有1个slide，swiper无效
        on: {
          transitionEnd: () => {
            const activeIndex = this.swiper && this.swiper.activeIndex ? this.swiper.activeIndex : 0
            this.changeTab(activeIndex)
          },
        },
      },
      emptyImg: '',
      connection: true,
    }
  },
  methods: {
    // ...mapMutations(["ISROUTERALIVE"]),
    // 多mescroll的配置,需通过方法获取,保证每个配置是单例
    getMescrollDown(tabIndex, tab) {
      let isAuto = this.isAutoMescrollDown && (tabIndex === 0) // isAutoMescrollDown为true时第一个mescroll传入true,列表自动加载
      // 加载时间配置
      // let dataTime = ""
      // if(window.utils.cache.get("dataTimeAll")){
      //   dataTime = window.utils.cache.get("dataTimeAll")
      // }
      // console.log("%c getMescrollDown", "color:green;", this.tabs);
      if (!this.isMescrollLoadList) {
        isAuto = false
      }
      return {
        auto: isAuto,
        // htmlContent: '<div class="downwarp-content"><p class="downwarp-progress"></p><p class="downwarp-tip">加载中 ...</p><br><span class="downwarp-tip">上次加载时间'+dataTime+'</span></div>',
        callback: this.downCallback,
        // eslint-disable-next-line
        isLock: tab.listType == 1 ? this.isMescrollDown : tab.isLock || false,
      }
    },
    // mescroll上拉加载的配置
    getMescrollUp(tabIndex,myemptyWarp) {
      let isUse = true
      let emptyWarpId = myemptyWarp + tabIndex
      let empty = ''
      let htmlNodata = '<p class="upwarp-nodata">-- 我是有底线的 --</p>'
      // console.log('%c isEmptyObject','color:green;',isEmptyObject(this.emptyProp));
      if (!isEmptyObject(this.tabs[tabIndex].emptyProp)) {
        empty = this.tabs[tabIndex].emptyProp
        empty.warpId = emptyWarpId
      } else {
        empty = {
          warpId: emptyWarpId, // 父布局的id;
          icon: this.emptyImg, // 图标,默认null
          tip: '暂无相关数据~', // 提示
          // btntext: "去报名 >", // 按钮,默认""
          // btnClick: this.btnClick
        }
      }
      if (!this.tabs[tabIndex].isMescrollUp) {
        isUse = false
      }
      if (!isEmptyObject(this.tabs[tabIndex].htmlNodata)) {
        htmlNodata = this.tabs[tabIndex].htmlNodata
      }else if(!isEmptyObject(this.htmlNodata)){
        htmlNodata = this.htmlNodata
      }
      // console.log('%c empty','color:green;',empty);
      return {
        auto: false,
        use: isUse,
        page: this.page,
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        onScroll: this.onScroll,
        noMoreSize: 4, // 如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: empty,
        htmlNodata: htmlNodata,
        toTop: {
          warpId: 'listswiper',
          src: this.isTop ? '' : '',
          offset: 100,
          warpClass: 'mescroll-totop-all',
          showClass: 'mescroll-totop-all-fade-in',
          hideClass: 'mescroll-totop-all-fade-out',
        },
      }
    },
    // btnClick
    btnClick() {
      this.$emit('btnClick')
    },
    // refresh--无数据时（无数据包括-无网络）出现的刷新按钮
    refresh() {
      this.tabs[this.curIndex].mescroll.triggerDownScroll()
    },
    // onScroll
    onScroll(mescroll, y, isUp) {
      // console.log('%c onScroll','color:#00CD00',y)
      this.$emit('handleScroll', mescroll, y, isUp)
    },
    // mescroll初始化的回调
    mescrollInit(tabIndex, arg) {
      this.tabs[tabIndex].mescroll = arg[0] // 传入mescroll对象
      this.tabs[tabIndex].mescroll.tabIndex = tabIndex // 加入标记,便于在回调中取到对应的list
    },
    // 切换菜单
    changeTab(tabIndex) {
      // eslint-disable-next-line
      if (this.curIndex === tabIndex) return // 避免重复调用
      let curTab = this.tabs[this.curIndex] // 当前列表
      let newTab = this.tabs[tabIndex] // 新转换的列表
      curTab.mescroll && curTab.mescroll.hideTopBtn() // 隐藏当前列表的回到顶部按钮
      this.curIndex = tabIndex // 切换菜单
      this.swiper&&this.swiper.slideTo&&this.swiper.slideTo(tabIndex)
      // 菜单项居中动画
      // if (curTab.mescroll) {
      //   let tabsContent = this.$parent.$refs.listMenu.$refs.tabsContent;
      //   let tabDom = tabsContent.getElementsByClassName("tab")[tabIndex];
      //   let star = tabsContent.scrollLeft; // 当前位置
      //   let end =
      //     tabDom.offsetLeft +
      //     tabDom.clientWidth / 2 -
      //     document.body.clientWidth / 2; // 居中
      //   curTab.mescroll.getStep(star, end, function(step) {
      //     tabsContent.scrollLeft = step; // 从当前位置逐渐移动到中间位置,默认时长300ms
      //   });
      // }
      if (newTab.mescroll) {
        if (!newTab.isListInit) {
          // 加载列表
          newTab.mescroll.triggerDownScroll()
        } else {
          // 检查新转换的列表是否需要显示回到到顶按钮
          setTimeout(() => {
            let curScrollTop = newTab.mescroll.getScrollTop()
            if (curScrollTop >= newTab.mescroll.optUp.toTop.offset) {
              newTab.mescroll.showTopBtn()
            } else {
              newTab.mescroll.hideTopBtn()
            }
          }, 30)
        }
      }
    },
    /* 下拉刷新的回调---逻辑暂未处理 */
    downCallback(mescroll) {
      this.connection = true
      mescroll.lockUpScroll(false)
      // 这里加载你想下拉刷新的数据, 比如刷新tab1的轮播数据
      if (mescroll.tabIndex === 0) {
        // loadSwiper();
      } else if (mescroll.tabIndex === 1) {
        // ....
      } else if (mescroll.tabIndex === 2) {
        // ....
      }
      console.log('%c 触发下拉刷新>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', 'color:green;', mescroll)
      if (!this.isMescrollLoadList) {
        if (this.upRefreshFun) {
          this.$emit(this.upRefreshFun, this.tabs, mescroll)
        } else {
          // this.ISROUTERALIVE(!this.common.isRouterAlive);
        }
        mescroll.endErr()
      } else {
        mescroll.resetUpScroll() // 触发下拉刷新的回调,加载第一页的数据
      }
    },
    /* 上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    upCallback(page, mescroll) {
      // console.log('%c upCallback>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>','color:green;',page);
      // 非列表状态下触发

      // 不需要下拉加载--默认
      if (
        !this.tabs[mescroll.tabIndex].upCallbackFun ||
        this.tabs[mescroll.tabIndex].upCallbackFun === 'netWorkCallBack'
      ) {
        mescroll.endErr()
        return
      }
      // 需要下拉加载但是不需要进行分页，只加载一次
      if (!this.tabs[mescroll.tabIndex].isMescrollUp) {
        mescroll.lockUpScroll(!this.tabs[mescroll.tabIndex].isMescrollUp) // 锁定上拉加载 ( isLock=ture,null 锁定 ; isLock=false 解锁 )
      }
      // 目前仅仅启用每个列表相同的接口--如果每个列表接口不一样可以进行如下扩充
      // if (mescroll.tabType === 0) {
      //   // 可以单独处理每个tab的请求
      // }else if (mescroll.tabType === 1) {
      //   // 可以单独处理每个tab的请求
      // }
      console.log('%c al-content-upCallback', 'color:green;', page)
      this.test = true
      this.tabs[mescroll.tabIndex].isListInit = true // 标记列表已初始化,保证列表只初始化一次
      this.$emit(
        this.tabs[mescroll.tabIndex].upCallbackFun,
        mescroll.tabIndex,
        this.tabs[mescroll.tabIndex],
        page.num,
        page.size,
        curPageData => {
          if (curPageData) {
            mescroll.endSuccess(curPageData.length) // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
            page.num === 1 && (this.tabs[mescroll.tabIndex].list = []) // 如果是第一页需手动制空列表
            this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(curPageData) // 追加新数据
            console.log('%c curPageData', 'color:green;', curPageData)
            this.test = false
          } else {
            // 数据返回节点可能错误
            console.log('%c 数据返回节点可能错误-返回data-curPageData', 'color:red;', curPageData)
            console.log('%c 注：--content组件upCallbackFun方法需要传入数组', 'color:red;', curPageData)
            mescroll.endSuccess(0)
          }
        },
        error => {
          this.test = false
          console.log('%c errorcallback_content_error', 'color:green;', error)
          if (page.num === 1 && error) {
            this.tabs[mescroll.tabIndex].isListInit = false
            this.emptyImg = error ? error.img || 'p<>:系统异常！' : ''
            this.connection = false
            mescroll.lockUpScroll(true)
            this.tabs[mescroll.tabIndex].list = []
          }
          mescroll.endErr() // 联网失败的回调,隐藏下拉刷新的状态
        },
      )
    },
  },
  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      let curMescroll = vm.$refs['mescroll' + vm.curIndex] // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      curMescroll && curMescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    let curMescroll = this.$refs['mescroll' + this.curIndex] // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    curMescroll && curMescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  },
  deactivated() {
    console.log('%c deactivated-content', 'color:red;', '销毁')
    console.log('%c this.tabs[0].mescroll', 'color:green;', this.tabs[this.curIndex].mescroll)
    let mescroll = this.tabs[this.curIndex].mescroll
    if (mescroll) {
      mescroll.lastBounce = mescroll.optUp.isBounce // 记录当前是否禁止ios回弹
      mescroll.setBounce(true) // 允许bounce
      mescroll.lastScrollTop = mescroll.getScrollTop() // 记录当前滚动条的位置
      mescroll.hideTopBtn(0) // 隐藏回到顶部按钮,无渐隐动画
    }
  },
  activated() {
    console.log('%c activated-content', 'color:orange;', '活跃')
    console.log('%c this.tabs[0].mescroll', 'color:green;', this.tabs[this.curIndex].mescroll)
    let mescroll = this.tabs[this.curIndex].mescroll
    if (mescroll) {
      // 恢复到之前设置的isBounce状态
      // eslint-disable-next-line
      if (mescroll.lastBounce != null) mescroll.setBounce(mescroll.lastBounce)
      // 滚动到之前列表的位置(注意:路由使用keep-alive才生效)
      if (mescroll.lastScrollTop) {
        mescroll.setScrollTop(mescroll.lastScrollTop)
        setTimeout(() => {
          // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
          mescroll.setTopBtnFadeDuration(0) // 设置回到顶部按钮显示时无渐显动画
        }, 16)
      }
    }
  },
  mounted() {},
  watch: {
    isMescrollDown(val) {
      this.tabs && this.tabs[0] && this.tabs[0].mescroll && this.tabs[0].mescroll.lockDownScroll(val)
    },
    curIndex(val) {
      console.log("%c content-curIndex","color:#00CD00", this.curIndex)
      this.connection = true
      this.$emit('input', val)
    },
  },
}

</script>

<style lang="stylus" scoped>
/*列表--有数据*/
.list-swiper {
  top: 108px;
}
.swiper-container {
  // position: fixed;
  position: absolute; //2019-07-19将fixed修改为absolut--需要验证所有使用content的页面
  // top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efeeee;
}
.listswiper {
  background-color: $theme-content-bg-color;
  height: 100%;
}

.listswiper /deep/ .mescroll-totop-all {
  box-sizing: border-box;
  z-index: 1;
  position: fixed;
  bottom: 65px;
  width: 50px;
  height: 50px;
  padding: 10px;
  right: 16px;
  border-radius: 50%;
  // opacity: 0;
  user-select: none;
  outline: none;
  -webkit-appearance: none;
  background-color: #ffcc00;
  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.not-swiper-div {
  height: 100%;
  //2019-10-12新增
  width: 100%;
  position: absolute;
  //2019-10-12新增

}

// $In0: (
//   transform: scale(0, 0),
//   opacity: 0
// );
// $Out0: (
//   transform: scale(1, 1),
//   opacity: 1
// );
// $mescrollTotopAllFadeOut: (
//   0%: $Out0,
//   100%: $In0
// );
// $mescrollTotopAllFadeIn: (
//   0%: $In0,
//   100%: $Out0
// );
// .listswiper /deep/ .mescroll-totop-all-fade-in {
//   @include animation(mescrollTotopAllFadeIn 1s linear forwards);
//   @include keyframes("mescrollTotopAllFadeIn", $mescrollTotopAllFadeIn);
// }
// .listswiper /deep/ .mescroll-totop-all-fade-out {
//   @include animation(mescrollTotopAllFadeOut 1s linear forwards);
//   @include keyframes("mescrollTotopAllFadeOut", $mescrollTotopAllFadeOut);
// }
</style>
