<template>
  <transition name="n22-base-slide-up">
    <div style="position: relative;" v-if="isShowFooter">
      <n22-tab-bar
        v-model="active"
        :isScrollable="false"
        :items="footList"
        :has-ink="false"
        class="al_fixed tabbar n22-hairline--top-bottom"
        :class="isShdow ? 'n22-foot-shadow' : ''"
      >
        <template slot="item" slot-scope="{ item, index }">
          <div @click="gotoAddress(item)" class="custom-item">
            <div class="icon-img">
              <img class="tab_bar_img" :src="item.normal" />
              <img
                class="tab_bar_img tag_img1"
                :class="setClass(index, index, item)"
                :src="item.active"
              />
            </div>
            <div class="text">
              <slot name="title-show">
                <span>{{ item.title }}</span>
              </slot>
            </div>
          </div>
        </template>
      </n22-tab-bar>
    </div>
  </transition>
</template>

<script>// import { mapState } from "vuex";
import TabBar from '../tab-bar'

export default {
  name: 'al-foot',
  data() {
    return {
      active: 0,
      nowRouter: '',
      footList: this.dataList,
    }
  },
  props: {
    isShowFooter: Boolean,
    isShdow: {
      type: Boolean,
      default: true,
    },
    dataList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  components: {
    [TabBar.name]: TabBar,
  },
  created() {},
  mounted() {
    this.nowRouter = this.$route.path
    for (let i = 0; i < this.footList.length; i++) {
      const e = this.footList[i]
      if (this.$route.path.indexOf(e.go) !== -1) {
        this.active = i
      }
    }
  },
  computed: {
    // ...mapState(["geohash"])
  },
  methods: {
    setClass(keyIn, keyOut, item) {
      let obj = {}
      obj[`footbarIn${keyIn}`] = this.$route.path.indexOf(item.go) !== -1
      obj[`footbarOut${keyOut}`] = this.$route.path.indexOf(item.go) === -1
      return obj
    },
    gotoAddress(item) {
      this.$emit('gotoAddress', item)
    },
  },
  // watch: {
  //   '$route'(val){
  //     this.nowRouter = this.$route.path
  //   },
  // },
}
</script>
<style lang="stylus" scoped>
.n22-foot-shadow
  -webkit-box-shadow 0 -4px 10px hsla(0,0%,60%,.1)
  box-shadow 0 -4px 10px hsla(0,0%,60%,.1)
#foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  height:45.7px;
  width:100%;
  display: flex;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
}
.guide_item {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  .icon_style {
    height:18.8px;
    width:18.8px;
    margin-top: 7px;
    fill: #ccc;
  }
  span {
    // @include sc(10.5px, #666);
    font-size: 10.5px;
    color: #666;
  }
}

.tab_bar_img {
  display: block;
  height: 25px;
}

.tag_img {
  // width: .48rem;
  // height: .48rem;
  display: block;
  // margin: 0 auto;
  // margin-bottom: .06rem;
}
.tag_img1 {
  position: absolute;
  // top: 0px;//更改tabbar组件注释掉
  // left: 2px;
  z-index: 3;
}

.icon-img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

.tabbar {
  //iPhonex适配
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  width: 100%;
  // height: 50px;
  display: flex;
  background-color: white;
}
.al_fixed {
  left: 0;
  bottom: 0;
  position: fixed;
}

.footbarOut0 {
  animation: footbarOut0 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarOut0 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarOut0 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarOut0 0.6s 1 ease-in-out forwards;
}
@keyframes footbarOut0 {
  0% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
}
@-moz-keyframes footbarOut0 {
  0% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
}
@-webkit-keyframes footbarOut0 {
  0% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
}
@-ms-keyframes footbarOut0 {
  0% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
}

.footbarIn0 {
  animation: footbarIn0 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarIn0 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarIn0 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarIn0 0.6s 1 ease-in-out forwards;
}
@keyframes footbarIn0 {
  0% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
}
@-moz-keyframes footbarIn0 {
  0% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
}
@-webkit-keyframes footbarIn0 {
  0% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
}
@-ms-keyframes footbarIn0 {
  0% {
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
    display: block;
  }
}

.footbarOut1 {
  animation: footbarOut1 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarOut1 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarOut1 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarOut1 0.6s 1 ease-in-out forwards;
}
@keyframes footbarOut1 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
}
@-moz-keyframes footbarOut1 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
}
@-webkit-keyframes footbarOut1 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
}
@-ms-keyframes footbarOut1 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
}

.footbarIn1 {
  animation: footbarIn1 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarIn1 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarIn1 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarIn1 0.6s 1 ease-in-out forwards;
}
@keyframes footbarIn1 {
  0% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-moz-keyframes footbarIn1 {
  0% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-webkit-keyframes footbarIn1 {
  0% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-ms-keyframes footbarIn1 {
  0% {
    -moz-transform: translate(-8px, 0);
    -o-transform: translate(-8px, 0);
    -ms-transform: translate(-8px, 0);
    -webkit-transform: translate(-8px, 0);
    transform: translate(-8px, 0);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}

.footbarOut2 {
  animation: footbarOut2 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarOut2 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarOut2 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarOut2 0.6s 1 ease-in-out forwards;
}
@keyframes footbarOut2 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
}
@-moz-keyframes footbarOut2 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
}
@-webkit-keyframes footbarOut2 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
}
@-ms-keyframes footbarOut2 {
  0% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
}

.footbarIn2 {
  animation: footbarIn2 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarIn2 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarIn2 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarIn2 0.6s 1 ease-in-out forwards;
}
@keyframes footbarIn2 {
  0% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-moz-keyframes footbarIn2 {
  0% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-webkit-keyframes footbarIn2 {
  0% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}
@-ms-keyframes footbarIn2 {
  0% {
    -moz-transform: translate(0, -8px);
    -o-transform: translate(0, -8px);
    -ms-transform: translate(0, -8px);
    -webkit-transform: translate(0, -8px);
    transform: translate(0, -8px);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
    display: block;
  }
}

.footbarOut3 {
  animation: footbarOut3 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarOut3 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarOut3 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarOut3 0.6s 1 ease-in-out forwards;
}
@keyframes footbarOut3 {
  0% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
}
@-moz-keyframes footbarOut3 {
  0% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
}
@-webkit-keyframes footbarOut3 {
  0% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
}
@-ms-keyframes footbarOut3 {
  0% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
  100% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
}

.footbarIn3 {
  animation: footbarIn3 0.6s 1 ease-in-out forwards;
  -webkit-animation: footbarIn3 0.6s 1 ease-in-out forwards;
  -moz-animation: footbarIn3 0.6s 1 ease-in-out forwards;
  -ms-animation: footbarIn3 0.6s 1 ease-in-out forwards;
}
@keyframes footbarIn3 {
  0% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
}
@-moz-keyframes footbarIn3 {
  0% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
}
@-webkit-keyframes footbarIn3 {
  0% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
}
@-ms-keyframes footbarIn3 {
  0% {
    -moz-transform: rotateX(90deg);
    -o-transform: rotateX(90deg);
    -ms-transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    opacity: 0;
    display: block;
  }
  100% {
    -moz-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
    display: block;
  }
}
</style>
