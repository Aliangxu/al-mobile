<template>
  <div class="n22-example-child n22-example-child-all-head n22-example-child-all-head-0">
    <al-all-head title="我的标题" :opacityStyle="opacityStyle">
      <!-- 左侧插槽--可以重置返回的相关逻辑-例如更换左侧svg -->
      <template slot="left">
        <span @click="()=>{console.log('我是返回重置')}">
          <n22-icon name="qq" size="lg"></n22-icon>
        </span>
      </template>
      <template slot="left-children">
        <span class="head-left-children">
          <n22-icon name="qq" size="lg"></n22-icon>
        </span>
      </template>
      <!-- 右侧插槽 -->
      <template slot="right" class="head-right-children">
        <span>
          <n22-icon name="search" size="lg"></n22-icon>
        </span>
        <span>
          <n22-icon name="volumn" size="lg"></n22-icon>
        </span>
        <span>
          <n22-icon name="share" size="lg"></n22-icon>
        </span>
      </template>
      <!-- 底部插槽 -->
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
import { AllHead, ContentList, TabBar, Icon } from "al-mobile";

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
    [Icon.name]: Icon,
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
.head-left-children
  position absolute
  margin-left 20px
.head-right-children
  span
    margin-left 10px
</style>
