/*
 * @Author: aliang 
 * @Date: 2018-11-21 18:15:41 
 * @Last Modified by: aliang
 * @Last Modified time: 2019-11-06 15:06:46
 * @description：底部导航
 */

<template>
  <transition name="n22-base-slide-up">
    <div style="position: relative;" v-if="isShowFooter">
      <n22-tab-bar
        v-model="active"
        :items="footList"
        :has-ink="false"
        class="al_fixed tabbar n22-hairline--top-bottom"
        :class="isShdow?'n22-foot-shadow':''"
      >
        <template slot="item" slot-scope="{ item,index }">
          <div @click="gotoAddress(item.go)" class="custom-item">
            <div class="icon-img">
              <img class="tab_bar_img" :src="item.normal">
              <img
                class="tab_bar_img tag_img1"
                :class="setClass(index,index,item)"
                :src="item.active"
              >
            </div>
            <div class="text">
              <span>{{$t(item.titlee)}}</span>
            </div>
          </div>
        </template>
      </n22-tab-bar>
    </div>
  </transition>
</template>

<script>
// import { mapState } from "vuex";
import TabBar from "../tab-bar";

export default {
  name: "al-foot",
  data() {
    return {
      active: 0,
      nowRouter: "",
      footList: [
        {
          title: "首页",
          titlee: "footMenu.home",
          icon: "首页",
          go: "/homefish",
          normal: "",
          active: "",
        },
        {
          title: "例子",
          titlee: "footMenu.demo",
          icon: "首页",
          go: "/demo",
          normal: "",
          active: "",
        },
        {
          title: "消息中心",
          titlee: "footMenu.message",
          icon: "首页",
          go: "/message",
          normal: "",
          active: "",
        },
        {
          title: "我的",
          titlee: "footMenu.center",
          icon: "首页",
          go: "/centerHome",
          normal: "",
          active: "",
        }
      ]
    };
  },
  props: {
    isShowFooter: Boolean,
    isShdow: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    [TabBar.name]: TabBar
  },
  created() {},
  mounted() {
    this.nowRouter = this.$route.path;
    for (let i = 0; i < this.footList.length; i++) {
      const e = this.footList[i];
      if (this.$route.path.indexOf(e.go) != -1) {
        this.active = i;
      }
    }
  },
  computed: {
    // ...mapState(["geohash"])
  },
  methods: {
    setClass(keyIn, keyOut, item) {
      let obj = {};
      obj[`footbarIn${keyIn}`] = this.$route.path.indexOf(item.go) != -1;
      obj[`footbarOut${keyOut}`] = this.$route.path.indexOf(item.go) == -1;
      return obj;
    },
    gotoAddress(path) {
      console.log("%c 底部导航跳转", "color:green;", path);
      // this.nowRouter = (path);
      // this.$router.push(path);
      this.back(path.replace("/", ""));
    }
  }
  // watch: {
  //   '$route'(val){
  //     this.nowRouter = this.$route.path
  //   },
  // },
};
</script>
<style lang="stylus" scoped>
.n22-foot-shadow 
  -webkit-box-shadow 0 -4px 10px hsla(0,0%,60%,.1)
  box-shadow 0 -4px 10px hsla(0,0%,60%,.1)
</style>