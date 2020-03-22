<template>
  <div class="al">
    <al-all-head v-if="!isHome" :zIndex="9999" :title="$route.meta.description"></al-all-head>
    <!-- <al-content ref="alcontent" :isAutoTopMargin="!isHome" @upRefreshFun="upRefreshFun" upRefreshFun="upRefreshFun"> -->
      <template v-if="isHome">
        <router-view></router-view>
      </template>
      <template v-else>
        <div class="n22-nav">
          <p class="home" @click="goToCategory">
            <n22-icon name="home" size="lg"></n22-icon>
          </p>
          <p class="name" v-text="navTitle"></p>
          <p class="name-zh" v-text="navSubTitle"></p>
        </div>
        <div class="n22-example-wrapper">
          <router-view ref="alview"></router-view>
        </div>
      </template>
    <!-- </al-content> -->
  </div>
</template>

<script>
import AllHead from '../components/all-head' 
import Content from '../components/content' 
import Icon from '../components/icon' 
import './assets/responsive'
export default {
  name: 'app',
  components: {
    [AllHead.name]: AllHead,
    [Content.name]: Content,
    [Icon.name]: Icon
  },
  computed: {
    navTitle() {
      return this.$route.name
    },
    navSubTitle() {
      return this.$route.meta.description
    },
    isHome() {
      const path = this.$route.path
      return path === '/' || path === '/home' || path === '/category'
    },
  },
  watch: {
    '$route' (value){
      const cvalue = value
      console.log('%c 监听到router改变xxxx','color:#FF00FF;',cvalue)
      if(cvalue.name!=="category"){
        this.$refs.alcontent.tabs[0].mescroll.scrollTo(0, 500)
      }
    },
  },
  methods: {
    upRefreshFun() {
      this.$refs.alview.$refs.aldemo.forEach(demo => {
        if(demo.upRefreshFun()){
          console.log("%c 触发demo组件的upRefreshFun","color:#00CD00",)
        }
      });
    },
    goToCategory() {
      this.$router.push('/category')
    },
  },
}

</script>

<style lang="stylus">
.n22-nav-bar__title 
  margin auto!important
block()
  float left
  width 100%
.al
  position relative
  min-height 100%
  max-width 750px
  font-size 28px
  font-size-adjust none
  -webkit-text-size-adjust 100%
  -webkit-overflow-scrolling touch
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background color-primary-background
  .n22-nav
    position relative
    display flex
    padding 32px 20px
    p
      position relative
      display inline-block
      line-height 1
      &.home
        top 10px
        .n22-icon
          color color-text-base
      &.name
        margin-left h-gap-lg
        font-size font-heading-large
        font-weight font-weight-medium
        color color-text-base
      &.name-zh
        top 9px
        margin-left h-gap-sm
        font-size font-body-large
        font-weight font-weight-normal
        color color-text-minor

  .n22-example-wrapper
    position relative
    z-index 3
    padding 20px
    clearfix()
    .n22-example
      .n22-example-section
        clearfix()
        margin-bottom 30px
        color color-text-base
        .n22-example-title
          block()
          font-size font-body-normal
          font-weight font-weight-medium
          a
            margin-right 5px
            background color-primary
            color #fff
            padding 5px 10px
            border-radius radius-normal
            font-size font-minor-large
            font-weight 300
            line-height 28px
            text-decoration none
        .n22-example-describe
          block()
          margin-top 15px
          font-size font-minor-large
          font-weight 300
          color color-text-minor
        .n22-example-content
          block()
          position relative
          margin-top 20px
          box-sizing border-box
          font-size 28px
.n22-dialog pre
  width 100%
  padding 20px 10px
  box-sizing border-box
  white-space pre-wrap
  word-wrap break-word
  font-size font-minor-normal
  background color-primary-background
  border-radius radius-normal
@media screen and (min-width: 749px)
  .al
    margin-left -360px
    left 50%
</style>

