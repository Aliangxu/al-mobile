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
      <template slot="right" class="head-right-children">
        <span @click="searchClick">
          <n22-icon name="search" size="lg"></n22-icon>
        </span>
      </template>
    </al-all-head>
    <al-content-list
      ref="listSwiper"
      v-model="curIndex"
      :swiperTop="44"
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
    <!-- 搜索框 -->
    <n22-popup
      v-model="searchModalShow"
      position="center"
    >
      <div class="n22-example-content-popup">
        <n22-input-item
          title="姓名"
          name="姓名"
          v-model="searchModel.name"
          placeholder="请输入姓名"
          type="text"
          align="right"
          maxlength="20"
        ></n22-input-item>
        <div class="n22-action-bar-group">
          <n22-button
            class="n22-action-bar-button"
            plain
            @click="resetSearch"
          >
            <span>重置</span>
          </n22-button>
          <n22-button
            class="n22-action-bar-button"
            type="primary"
            @click="multiSearch"
          >
            <span>查询</span>
          </n22-button>
        </div>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import { AllHead, ContentList, Button, TabBar, Icon, InputItem, Popup, Toast } from "al-mobile";
//emptyProp--当使用相对路径时使用import导入，下面的icon再直接使用
// import emptyImage from "../../../_style/images/star24_on.png";
const searchModelJson = { name:"",age:"",};

export default {
  name: "content-demo",
  /* DELETE */
  title: "带导航栏的下拉刷新、上拉加载-内容区域使用swiper(第三个菜单设置空)",
  titleEnUS: "Selected state",
  height: 120,
  /* DELETE */
  components: {
    [AllHead.name]: AllHead,
    [ContentList.name]: ContentList,
    [Button.name]: Button,
    [TabBar.name]: TabBar,
    [Icon.name]: Icon,
    [InputItem.name]: InputItem,
    [Popup.name]: Popup,
  },
  data() {
    return {
      searchModel: JSON.parse(JSON.stringify(searchModelJson)),
      searchModalShow:false,
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
            icon: "static/images/xx.png",// emptyImage
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
    //重置请求参数
    resetSearch() {
      this.searchModel = JSON.parse(JSON.stringify(searchModelJson));
    },
    //搜索弹出框
    searchClick(){
      this.searchModalShow = true;
    },
    //搜索方法
    multiSearch() {
      console.log('multiSearch', this.searchModel);
      this.searchModalShow = false;
      this.searchText = this.searchContext = "";
      var tabIndex = this.curIndex;
      //==========↓↓↓↓↓↓如果搜索条件存在需要改变导航菜单需要如下处理
      // if(this.searchModel.memberType === "01") {
      //   tabIndex = 1;
      // } else if(this.searchModel.memberType === "01") {
      //   tabIndex = 0;
      // }
      // this.$refs.listSwiper.changeTab(tabIndex);
      //==========↑↑↑↑↑↑如果搜索条件存在需要改变导航菜单需要如下处理
      this.tabs[tabIndex].mescroll.resetUpScroll(true);
    },
    btnClick(){
      console.log("%c 点击btnClick","color:#00CD00",)
    },
    changeTab(item, i, curIndex) {
      console.log("%c curIndex", "color:#00CD00", curIndex);
      //如果contet内容区使用了列表content-list组件并且开启了needSwiper通过ref去操作content-list组件的changeTab切换内容区（具体可以移步content查看参数）
      console.log("%c this.$refs.listSwiper","color:#00CD00",this.$refs.listSwiper)
      this.$refs.listSwiper.$children[0].changeTab && this.$refs.listSwiper.$children[0].changeTab(i);
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
      //请求参数
      let req = {
        name:this.searchModel.name,
        age:this.searchModel.age,
      };
      console.log("%c selectListByPage","color:#00CD00",tabIndex)
      setTimeout(() => {
        if (true) {//成功回掉--模拟true
          let listData = [];
          //==========↓↓↓↓↓↓此部分为模拟返回数据分页处理--真实情况将其替换为接口成功返回取list逻辑
          for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
            if (i >= dataList.length) break
            dataList[i].name.indexOf("Tab")<0&&(dataList[i].name = `Tab-${tabIndex}-${dataList[i].name}`)
            if (req.name) {
              if (dataList[i].name.indexOf(req.name) !== -1) { //模拟搜索
                listData.push(dataList[i])
              }
              //用完之后重置请求参数对象
              this.resetSearch()
            }else{
              listData.push(dataList[i])
            }
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

<style lang="stylus" scoped>
.n22-example-content-popup {
  height 300px
  width 300px
  padding 10px
  background-color #ffffff
  .n22-action-bar-group{
    display flex
    .n22-action-bar-button {
      margin 10px
    }
  }
}
</style>