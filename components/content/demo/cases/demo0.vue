<template>
  <div class="n22-example-child n22-example-child-content n22-example-child-content-0">
    <al-all-head title="我的标题" :opacityStyle="opacityStyle" hairline>
    </al-all-head>
    <al-content
      v-model="curIndex"
      ref="listSwiper"
      :swiperTop="44"
      :tabs="tabs"
      :needSwiper="true"
      :isMescrollDown="true"
      :isToTop="true"
      isMescrollLoadList
    >
      <div>
        我是内容：{{tabs[curIndex]}}
      </div>
    </al-content>
  </div>
</template>

<script>
import { AllHead, Content } from "al-mobile";

export default {
  name: "content-demo",
  /* DELETE */
  title: "Content布局",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [Content.name]: Content,
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
  }
};
</script>
<style lang="stylus">
.n22-example-child-content-0
  height 400px
  .n22-nav-bar--fixed
    position relative
  .swiper-container
    top 60px!important
</style>
