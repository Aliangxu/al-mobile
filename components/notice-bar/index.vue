<template>
  <div
    class="n22-notice-bar"
    :class="[
      round && 'n22-notice-bar-round',
      type
    ]"
    v-if="isShow"
  >
    <div class="n22-notice-bar-left" :class="[(!customLeft && !icon) && 'n22-notice-bar-empty']">
      <!-- custom first -->
      <template v-if="customLeft">
        <slot name="left"></slot>
      </template>
      <template v-else-if="icon">
        <n22-icon class="n22-notice-icon" :name="icon" :svg="iconSvg"></n22-icon>
        <!-- <svg-icon class="n22-notice-svg n22-notice-icon" :icon-class="icon"></svg-icon> -->
      </template>
    </div>
    <div
      class="n22-notice-bar-content"
      :class="[
        multiRows && 'n22-notice-bar-multi-content'
      ]"
      ref="wrap"
    >
      <div :class="[(overflow && scrollable) && 'n22-notice-bar-content-animate']" ref="content">
        <slot></slot>
      </div>
    </div>
    <div class="n22-notice-bar-right">
      <!-- custom first -->
      <template v-if="customRight">
        <slot name="right"></slot>
      </template>
      <template v-else-if="mode || closable">
        <n22-icon
          class="n22-notice-icon n22-notice-icon-right"
          :name="rightIcon"
          @click.native.stop="$_close"
        ></n22-icon>
        <!-- <svg-icon class="n22-notice-svg md-notice-icon md-notice-icon-right" :icon-class="rightIcon" @click.native.stop="$_close"></svg-icon> -->
      </template>
    </div>
  </div>
</template>

<script>import Icon from '../icon'
export default {
  name: 'n22-notice-bar',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    mode: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default', // default/activity/warning
    },
    time: {
      type: Number,
      default: 0,
    },
    round: {
      type: Boolean,
      default: false,
    },
    multiRows: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    // will be delete in future
    icon: {
      type: String,
      default: '',
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
    // will be delete in future
    closable: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isShow: true,
      overflow: false,
    }
  },

  computed: {
    customLeft() {
      return !!this.$slots.left
    },

    customRight() {
      return !!this.$slots.right
    },

    rightIcon() {
      return this.mode === 'link' ? 'arrow-right' : 'close'
    },
  },

  updated() {
    this.$_checkOverflow()
  },

  mounted() {
    if (this.time) {
      this.$_hide(this.time)
    }
    this.$_checkOverflow()
  },

  methods: {
    // MARK: private methods
    $_hide(time) {
      setTimeout(() => {
        this.isShow = false
      }, time)
    },
    $_close() {
      if (this.mode === 'closable' || this.closable) {
        this.isShow = false
      }
      this.$emit('close')
    },
    $_checkOverflow() {
      if (!this.scrollable) {
        return
      }
      const {wrap, content} = this.$refs

      /* istanbul ignore if */
      if (!wrap || !content) {
        return
      }
      this.overflow = content.scrollWidth > wrap.clientWidth
    },
  },
}
</script>

<style lang="stylus">
.n22-notice-bar
  display flex
  z-index notice-bar-zindex
  font-size notice-bar-font-size
  min-height 32px
  background-color notice-bar-fill
  color notice-bar-color
  position relative
  padding-left 16px
  box-sizing border-box
  &.n22-notice-bar-round
    border-radius notice-bar-border-radius
  &.activity
    background-color notice-bar-fill-activity
    color notice-bar-color-activity
  &.warning
    background-color notice-bar-fill-warning
    color notice-bar-color-warning

.n22-notice-bar-left,
.n22-notice-bar-right
  display flex
  align-items center
  .n22-notice-svg
    height 20px
    width 20px

.n22-notice-bar-left
  padding-right 6px
.n22-notice-bar-right
  padding-right 16px
.n22-notice-bar-empty
  padding-right 0

.n22-notice-bar-content
  flex 1
  margin auto
  width auto
  line-height 32px
  white-space nowrap
  overflow hidden
  &.n22-notice-bar-multi-content
    padding h-gap-md 0
    line-height font-caption-large
    white-space normal
  .n22-notice-bar-content-animate
    padding-left 100%
    display inline-block
    animation n22-notice-bar-animation linear 16s infinite both

@keyframes n22-notice-bar-animation {
  0% {
    transform translate3d(0, 0, 0)
  }
  100% {
    transform translate3d(-100%, 0, 0)
  }
}
</style>
