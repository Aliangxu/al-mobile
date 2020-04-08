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
    <al-content
      ref="listSwiper"
      v-model="curIndex"
      :swiperTop="44"
      :tabs="tabs"
      :isMescrollDown="false"
      :isToTop="true"
      isMescrollLoadList
      :page="page"
      @selectListByPage="selectListByPage"
    >
      <template #default="{list,id}">
        <div :id="id">
          <div class="my-item" v-for="item in list">
            {{item.name}}
          </div>
        </div>
      </template>
    </al-content>
  </div>
</template>

<script>
import { AllHead, Content, Button, TabBar } from "al-mobile";
//emptyProp--当使用相对路径时使用import导入，下面的icon再直接使用
// import emptyImage from "../../../_style/images/star24_on.png";

export default {
  name: "content-demo",
  /* DELETE */
  title: "带导航栏的下拉刷新、上拉加载-内容区域不使用swiper(第三个菜单设置空)",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [Content.name]: Content,
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
          emptyProp: {
            icon: "static/images/xx.png",//emptyImage
            tip: "暂无相关数据~", // 提示
            btntext: "去报名 >", // 按钮,默认""
            btnClick: this.btnClick,
          },
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
          emptyProp: {
            icon: "static/images/xx.png",//emptyImage
            tip: "暂无相关数据~", // 提示
            btntext: "去报名 >", // 按钮,默认""
            btnClick: this.btnClick,
          },
        },
        {
          label: "测试险",
          name: 2,
          listType: "1",
          mescroll: null,
          list: [],
          isListInit: false,
          isMescrollUp: true,
          upCallbackFun: "selectListByPage",
          emptyProp: {
            icon: "static/images/xx.png",//emptyImage
            tip: "暂无相关数据~", // 提示
            btntext: "去报名 >", // 按钮,默认""
            btnClick: this.btnClick,
          },
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
    btnClick(){
      console.log("%c 点击btnClick","color:#00CD00",)
    },
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
      //==========↓↓↓↓↓↓此部分为给定模拟数据--真实情况将其删除
      let dataList = [];
      for (let i = 0; i < 100; i++) {
        dataList.push({
          name: "name"+i,
          id: "id"+i,
        })
      }
      //==========↑↑↑↑↑↑此部分为给定模拟数据--真实情况将其删除
      let _this = this;
      let req = {
      };
      console.log("%c selectListByPage","color:#00CD00",tabIndex)
      setTimeout(() => {
        if (true) {//成功回掉--模拟true
          let listData = [];
          //==========↓↓↓↓↓↓此部分为模拟返回数据分页处理--真实情况将其替换为接口成功返回取list逻辑
          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i >= dataList.length) break
            dataList[i].name.indexOf("Tab")<0&&(dataList[i].name = `Tab-${tabIndex}-${dataList[i].name}`)
            listData.push(dataList[i])
          }
          listData = (tabIndex===2?[]:listData);
          //==========↑↑↑↑↑↑此部分为模拟返回数据分页处理--真实情况将其替换为接口成功返回取list逻辑
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
