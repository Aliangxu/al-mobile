<template>
  <div class="n22-example-child n22-example-child-all-head n22-example-child-all-head-0">
    <al-all-head title="我的标题" :opacityStyle="opacityStyle">
      <div slot="head_bottom">
        <n22-tab-bar
          ref="listMenu"
          v-model="curIndex"
          :items="tabs"
          :maxLength="5"
          :ink-length="50"
          @change="changeTab"
        ></n22-tab-bar>
      </div>
    </al-all-head>
    <al-content-list
      v-model="curIndex"
      ref="listSwiper"
      :tabs="tabs"
      :needSwiper="true"
      :isMescrollDown="true"
      :isToTop="true"
      isMescrollLoadList
    >
      <div>
        内容{{curIndex}}：{{tabs[curIndex]}}
      </div>
    </al-content-list>
  </div>
</template>

<script>
import { AllHead, ContentList, TabBar } from "al-mobile";

export default {
  name: "all-head-demo",
  /* DELETE */
  title: "head",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [ContentList.name]: ContentList,
    [TabBar.name]: TabBar,
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
          label: "寿险",
          name: 0,
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "",
        },
        {
          label: "健康险",
          name: 1,
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "",
        },
        {
          label: "意外险",
          name: 2,
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "",
        },
        {
          label: "年金保险",
          name: 3,
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
    changeTab(item, i, curIndex) {
      console.log("%c curIndex", "color:#00CD00", curIndex);
      //如果contet内容区使用了列表content-list组件并且开启了needSwiper通过ref去操作content-list组件的changeTab切换内容区（具体可以移步content查看参数）
      this.$refs.listSwiper.$children[0].changeTab && this.$refs.listSwiper.$children[0].changeTab(i);
    },
  }
};
</script>
<style lang="stylus">
.n22-example-child-all-head-0
  height 400px
  .n22-nav-bar--fixed
    position relative
  .n22-nav-bar
    background-color #ffffff
  .swiper-container
    top 120px!important
</style>
