<template>
  <div class="n22-example-child n22-example-child-scroll-view n22-example-child-scroll-view-2">
    <!-- <n22-scroll-view
      ref="scrollView"
      :scrolling-x="false"
      @refreshing="$_onRefresh"
    >
      <n22-scroll-view-refresh
        slot="refresh"
        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
        :scroll-top="scrollTop"
        :is-refreshing="isRefreshing"
        :is-refresh-active="isRefreshActive"
      ></n22-scroll-view-refresh>
      <div
        v-for="i in list"
        :key="i"
        class="scroll-view-list"
      >
        <p class="scroll-view-item">{{i}}</p>
      </div>
    </n22-scroll-view> -->
  </div>
</template>

<script>// import {ScrollView, ScrollViewRefresh} from 'al-mobile'

export default {
  name: 'scroll-view-demo-0',
  /* DELETE */
  title: '下拉刷新 <a href="javascript:ScrollViewTrigger1()">触发下拉刷新</a>',
  titleEnUS: 'Pull Refresh <a href="javascript:ScrollViewTrigger1()">Trigger Pull Refresh</a>',
  message: '请在移动设备中扫码预览',
  messageEnUS: 'Please scan QR code and preview on mobile device',
  /* DELETE */
  components: {
    // [ScrollView.name]: ScrollView,
    // [ScrollViewRefresh.name]: ScrollViewRefresh,
  },
  data() {
    return {
      list: 5,
    }
  },
  mounted() {
    window.ScrollViewTrigger1 = () => {
      this.$refs.scrollView.triggerRefresh()
    }
  },
  methods: {
    $_onRefresh() {
      // async data
      setTimeout(() => {
        this.list += 5
        this.$refs.scrollView.finishRefresh()
      }, 2000)
    },
  },
}
</script>

<style lang="stylus">
.n22-example-child-scroll-view-2
  height 800px
  background #FFF
  .scroll-view-item
    padding 30px 0
    text-align center
    font-size 28px
    font-family DINAlternate-Bold
    border-bottom .5px solid #efefef
</style>