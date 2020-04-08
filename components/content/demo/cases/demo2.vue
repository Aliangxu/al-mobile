<template>
  <div class="n22-example-child n22-example-child-content n22-example-child-content-2">
    <al-all-head title="我的标题" :opacityStyle="opacityStyle" hairline>
    </al-all-head>
    <al-content
      v-model="curIndex"
      ref="listSwiper"
      :tabs="tabs"
      :isMescrollDown="false"
      :isToTop="true"
      isMescrollLoadList
      :page="page"
      @selectListByPage="selectListByPage"
    >
      <template #default="{list}">
        <div class="my-item" v-for="item in list">
          {{item.name}}
        </div>
      </template>
    </al-content>
  </div>
</template>

<script>
import { AllHead, Content, Button } from "al-mobile";

export default {
  name: "content-demo",
  /* DELETE */
  title: "下拉刷新、上拉加载",
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
          upCallbackFun: "selectListByPage",
          emptyProp: {
            icon: "",
            tip: "暂无相关数据~", // 提示
            btntext: "去报名 >", // 按钮,默认""
            btnClick: ()=>{}
          }
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
      console.log(req);
      setTimeout(() => {
        if (true) {//成功回掉--模拟true
          let listData = [];
          //==========↓↓↓↓↓↓此部分为模拟返回数据分页处理--真实情况将其替换为接口成功返回取list逻辑
          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i >= dataList.length) break
            dataList[i].name.indexOf("Tab")<0&&(dataList[i].name = `Tab-${tabIndex}-${dataList[i].name}`)
            listData.push(dataList[i])
          }
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
<style lang="stylus">
.n22-example-child-content-2
  height 400px
  .n22-nav-bar--fixed
    position relative
  .my-item
    height 35px
  .not-swiper-div
    top 60px!important
</style>
