<template>
  <div class="n22-example-child n22-example-child-content n22-example-child-content-1">
    <al-all-head title="我的标题" :opacityStyle="opacityStyle" hairline>
    </al-all-head>
    <al-content
      v-model="curIndex"
      ref="listSwiper"
      :tabs="tabs"
      :needSwiper="true"
      :isMescrollDown="false"
      :isToTop="true"
      isMescrollLoadList
    >
      <div style="margin-top:20px">
        <n22-button @click="refresh">主动触发下拉刷新</n22-button>
        <n22-button @click="scrollTo">滚动列表到指定位置</n22-button>
      </div>
      <div v-for="(item,i) in 40" :key="i">
        文本文本文本文本文本文本文本文本{{i}}
      </div>
    </al-content>
  </div>
</template>

<script>
import { AllHead, Content, Button } from "al-mobile";

export default {
  name: "content-demo",
  /* DELETE */
  title: "tabs对象实例",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [Content.name]: Content,
    [Button.name]: Button,
  },
  data() {
    return {
      opacityStyle: {
        "background-color": "#ffffff"
      },
      curIndex: 0,
      tabs: [
        //content组件对象
        {
          label: "默认单个列表不展示",
          name: 0,
          listType: "1",
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "",
        },
      ],
    };
  },
  methods: {
    refresh() {
      //主动触发下拉刷新
      this.tabs[this.curIndex].mescroll.triggerDownScroll();
    },
    scrollTo() {
      //滚动列表到指定位置
      this.tabs[this.curIndex].mescroll.scrollTo(100,300);
    },
    //其他api方法参考 http://www.mescroll.com/api.html?v=20200315#methods
  }
};
</script>
<style lang="stylus">
.n22-example-child-content-1
  height 400px
  .n22-nav-bar--fixed
    position relative
  .swiper-container
    top 60px!important
</style>
