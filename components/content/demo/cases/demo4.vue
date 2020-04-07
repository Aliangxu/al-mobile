<template>
  <div class="n22-example-child n22-example-child-content n22-example-child-content-3">
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
      ref="listSwiper"
      v-model="curIndex"
      :needSwiper="true"
      :tabs="tabs"
      :isMescrollDown="false"
      :isToTop="true"
      isMescrollLoadList
      :page="page"
      @selectListByPage="selectListByPage"
    >
      <div class="my-item" v-for="item in tabs[curIndex].list">
        {{item.name}}
      </div>
    </al-content-list>
  </div>
</template>

<script>
import { AllHead, ContentList, Button, TabBar } from "al-mobile";

export default {
  name: "content-demo",
  /* DELETE */
  title: "带导航栏的下拉刷新、上拉加载-内容区域使用swiper",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [ContentList.name]: ContentList,
    [Button.name]: Button,
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
          listType: "1",
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "selectListByPage",
        },
        {
          label: "健康险",
          name: 1,
          listType: "1",
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "selectListByPage",
        },
      ],
      //分页参数
      page: {
        pagenum: 1,
        size: 10,
        time: null
      },
    };
  },
  methods: {
    changeTab(item, i, curIndex) {
      console.log("%c curIndex", "color:#00CD00", curIndex);
      //如果contet内容区使用了列表content-list组件并且开启了needSwiper通过ref去操作content-list组件的changeTab切换内容区（具体可以移步content查看参数）
      console.log("%c this.$refs.listSwiper","color:#00CD00",this.$refs.listSwiper)
      this.$refs.listSwiper.changeTab && this.$refs.listSwiper.changeTab(i);
      //触发下拉刷新
      this.tabs[i].mescroll.triggerDownScroll();
    },
    selectListByPage(
      tabIndex,
      item,
      pageNum,
      pageSize,
      successCallback,
      errorCallback
    ) {
      let dataList = [];
      for (let i = 0; i < 100; i++) {
        dataList.push({
          name: "name"+i,
          id: "id"+i,
        })
      }
      let _this = this;
      let req = {
      };
      console.log("%c selectListByPage","color:#00CD00",tabIndex)
      setTimeout(() => {
        if (true) {//成功回掉
          //模拟返回数据分页处理
          let listData = [];
          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i >= dataList.length) break
            dataList[i].name.indexOf("Tab")<0&&(dataList[i].name = `Tab-${tabIndex}-${dataList[i].name}`)
            listData.push(dataList[i])
          }
          // 回调
          successCallback && successCallback(listData);
        } else {//失败回掉
          errorCallback && errorCallback();
        }
      }, 2000);
    },
  }
};
</script>
<style lang="stylus">
.n22-example-child-content-3
  height 400px
  .n22-nav-bar--fixed
    position relative
  .my-item
    background-color #ffffff
    height 35px
  .not-swiper-div
    // top 60px!important
</style>
