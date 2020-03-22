<template>
  <div class="n22-example-child n22-example-child-scroll-view n22-example-child-scroll-view-1">
    <n22-scroll-view
      ref="scrollView"
      :scrolling-y="false"
      :touch-angle="80"
      :is-prevent="false"
    >
      <div class="scroll-view-list">
        <p
          v-for="i in list"
          :key="i"
          class="scroll-view-item"
        >{{i}}</p>
      </div>
    </n22-scroll-view>
  </div>
</template>

<script>import {ScrollView} from 'al-mobile'

export default {
  name: 'scroll-view-demo-0',
  /* DELETE */
  title: '横向滚动',
  titleEnUS: 'Horizontal scrolling',
  describe: 'isPrevent false, touchAngle 80',
  describEnUs: 'isPrevent false, touchAngle 80',
  /* DELETE */
  components: {
    [ScrollView.name]: ScrollView,
  },
  data() {
    return {
      list: 5,
    }
  },
}
</script>

<style lang="stylus">
.n22-example-child-scroll-view-1
  height 100px
  background #FFF
  .n22-scroll-view
    display flex
    align-items center
    .scroll-view-list
      display flex
      width 1000px
      .scroll-view-item
        flex 1
        text-align center
        font-size 28px
        font-family DINAlternate-Bold
        border-right .5px solid #efefef
</style>