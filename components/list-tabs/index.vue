<template>
  <div>
     <!-- <n22-tab-bar
      v-model="curIndex"
      :items="items"
      :maxLength="5"
    /> -->
    <!--菜单 需加上mescroll-touch-x,原因: http://www.mescroll.com/qa.html#q10 -->
    <div class="tabs-warp" v-if="tabs.length>1" :style="{marginTop: getSwiperTop,}">
      <template v-if="true">
        <div class="n22-tab-bar-start" v-show="maskStartShown"></div>
        <div class="n22-tab-bar-end" v-show="maskEndShown"></div>
      </template>
      <div ref="tabsContent" @touchend="$_touchend" class="tabs-content mescroll-touch-x">
        <ul class="tabs">
          <li
            class="tab"
            v-for="(tab,i) in tabs"
            :class="{active: i===curIndex}"
            :style="dealTabWith"
            :key="i"
            @click="changeTab(i)"
            ref="tabsName"
          >
            <span>{{tab.name || tab.label}}</span>
            <span class="bidge">{{tab.totalNum}}</span>
          </li>
        </ul>
        <div class="tab-bar" :style="{width: lineStyle.width,left: lineStyle.left}"></div>
      </div>
    </div>
    <div v-for="(tab,i) in tabs" :key="i">
      <transition :name="secMenuAnm">
        <slot :curIndex="curIndex" v-if="i===curIndex" name="secMenu"></slot>
      </transition>
    </div>
  </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";//引入组件样例--★★此处为引入vuex推荐此方法引入vuex的各个方法属性使用
import { ui, deepClone } from "../_util";
// import TabBar from "../tab-bar";

export default {
  name: "n22-list-tabs", //使用xx-xx-xx命名方式具体看操作文档
  props: {
    tabWidth: {
      // 每个tab的宽度
      type: Number,
      default: () => {
        return 40;
      }
    },
    curIndex: {
      // 当前列表index
      type: Number,
      default: 0
    },
    barWidth: {
      // tab底部红色线的宽度
      type: Number,
      default: 32
    },
    maxLength: {
      // 最多显示
      type: Number,
      default: 5
    },
    firstLeft: {
      // 第一个横线
      type: Number,
      default: 0
    },
    swiperTop: {
      // 顶部距离高度
      type: Array,
      default: () => {
        return [];
      }
    },
    tabs: {
      // 列表数组
      type: Array,
      default: () => {
        return [
          {
            name: "默认单个列表不展示",
            mescroll: null,
            list: [],
            isListInit: false
          }
        ];
      }
    },
    secMenuAnm: {
      // 二级菜单动画
      type: String,
      default: ""
    }
  },
  components: {
    // [TabBar.name]: TabBar,//引入组件样例如此
  },
  computed: {
    dealTabWith(px) {
      // const wi = ui.dealPxToVw(375 / this.maxLength) + "vw"
      // return { width:  wi};
    },
    getSwiperTop() {
      // 红线的位置
      const head = this.swiperTop[this.curIndex] || 0;
      return ui.dealPxToVw(head) + "vw";
    },
    dealLineStyle() {
      return ()=>{
        // 红线的位置
        console.log(
          "%c ui.dealPxToVw(this.tabWidth)",
          "color:green;",
          ui.dealPxToVw(this.tabWidth)
        );
        let barWidth = this.barWidth;
        let left = 0;
        if(this.$refs.tabsName&&this.curIndex!==undefined){
          if(this.$refs.tabsName[this.curIndex].offsetWidth){
            barWidth = this.$refs.tabsName[this.curIndex].offsetWidth;
          }
          if(this.$refs.tabsName[this.curIndex].offsetLeft){
            left = this.$refs.tabsName[this.curIndex].offsetLeft-40;
            console.log('%c xxxx','color:green;',this.$refs.tabsName[this.curIndex].offsetLeft);
            if(this.$refs.tabsName[this.curIndex].offsetLeft>=374/2&&this.tabs.length>this.maxLength){
              this.maskStartShown = true;
            }else if(this.maskStartShown){
              this.maskStartShown = false;
            }
          }
        }else{
          left = 40;
        }
        if(left===0&&this.maskStartShown){
          this.maskStartShown = false;
        }
        if(this.curIndex+1===this.tabs.length){
          this.maskEndShown = false;
        }else if(!this.maskEndShown&&this.tabs.length>this.maxLength){
          this.maskEndShown = true;
        }else{
          this.maskEndShown = false;
        }
        // barWidth+=40;//40为class-tab左右预留的margin
        // if(this.tabs.length>this.maxLength){
          
        // }else{
        //     left = ui.dealPxToVw(375 / this.tabs.length) * this.curIndex +(ui.dealPxToVw(375 / this.tabs.length) - barWidth) / 2;
        // }
        console.log('%c dealLineStyle-left','color:green;',left);
        return this.lineStyle = {width: ui.dealPxToVw(barWidth)+"vw", left: ui.dealPxToVw(parseInt(left))+"vw"}
      }
    }
  },
  data() {
    return {
      maskStartShown: false,
      maskEndShown: true,
      lineStyle: {
        width: "",
        left: "",
      }
    };
  },
  methods: {
    $_touchend(el){
       console.log('%c dealLineStyle-offsetLeft--000','color:green;',this.$refs.tabsContent.scrollLeft);
      if(this.$refs.tabsContent.scrollLeft===0){
        this.maskStartShown=false;
      }else if(this.$refs.tabsContent.scrollLeft>=335){
        this.maskEndShown=false;
      }else{
        this.maskStartShown=true;
        this.maskEndShown=true;
      }
    },
    changeTab(i) {
      this.$emit("changeTab", i);
    }
  },
  mounted() {
    console.log('%c list-tabs-mounted','color:green;','');
    this.dealLineStyle();
  },
  watch: {
    curIndex(newVal,oldVal){
      this.dealLineStyle();
    }
  }
};
</script>

<style lang="stylus" scoped>
/*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓我是分割箭头--[共用菜单]--↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
.tabs-warp {
  height: 44px; /*高度比tabs-content小, 目的是隐藏tabs的水平滚动条*/
  overflow-y: hidden;
  border-bottom: 1px solid #eee;
  box-sizing: content-box;
  background-color: #ffffff;
  .tab {
    margin: auto 20px;  
  }
}
.tabs-warp .tabs-content {
  width: 335px;
  margin-left: 20px;
  height: 44px;
  overflow-x: auto;
}
.tabs-warp .tabs-content .tabs {
  width: 100%;
  white-space: nowrap;
  text-align: center;
  height: 42px;
}
.tabs-warp .tabs-content .tabs li {
  display: inline-block;
  height: 40px;
  line-height: 45px;
  vertical-align: middle;
  font-size: 16px;
  position: relative;
}
.tabs-warp .tabs-content .tabs .active {
  color: #4091fb;
}
/*菜单进度*/
.tabs-warp .tab-bar {
  position: relative;
  height: 2px;
  background-color: #4091fb;
  transition: left 300ms;
}
/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑我是分割箭头--[]--↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
.bidge {
  display: inline-block;
  background: #fb3e37;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  right: 53px;
  top: 5px;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  padding: 0 3px;
}
</style>

<style lang="stylus" scoped>
.n22-tab-bar-start,
.n22-tab-bar-end
  position absolute
  // top 0
  left 10px
  width 14px
  height tab-height
  overflow hidden
  &::after
    content ''
    display block
    position absolute
    left -14px
    top 50%
    width 14px
    if tab-height is a 'unit'
      margin-top 0 - tab-height * 0.4
      height tab-height * 0.8
    else
      margin-top "calc(0 - %s * 0.4)" % tab-height
      height "calc(%s * 0.8)" % tab-height
    border-radius 50%
    box-shadow: -1px 0 12px 0 rgba(0,0,0,0.2)
.n22-tab-bar-end
  left auto
  right 10px
  transform rotate(180deg)
</style>
