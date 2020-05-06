<template>
  <div class="n22-tip" :class="wrapperCls">
    <div class="n22-tip-content">
      <template v-if="!$slots.default">
        <n22-icon
          v-if="icon"
          class="content-icon"
          :name="icon"
          :svg="iconSvg"
        />
        <div class="content-text" v-text="content"></div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
      <n22-icon
        v-if="closable"
        name="close"
        size="md"
        @click.native="$_onClose"
      />
    </div>
    <div class="n22-tip-bg"></div>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'n22-tip-content',
  components: {
    [Icon.name]: Icon,
  },

  props: {
    placement: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
    },
    iconSvg: {
      type: Boolean,
    },
    content: {
      type: [String, Number],
    },
    name: {
      type: [String, Number],
    },
  },

  computed: {
    wrapperCls() {
      return {
        'has-close': this.closable,
        [`is-${this.placement}`]: ['left', 'bottom', 'right'].indexOf(this.placement) !== -1,
        [this.name]: !!this.name,
      }
    },
  },

  methods: {
    $_onClose() {
      this.$emit('close')
    },
  },
}

</script>


<style lang="stylus">
.n22-tip
  position relative
  display inline-block
  // max-width 400px
  z-index tip-zindex

.n22-tip-content
  clearfix()
  position relative
  padding tip-padding
  color tip-color
  font-size tip-font-size
  line-height 1.2
  z-index 2
  .content-icon
    float left
    margin-right 14px
  .content-text
    float left
    margin-top 2px


.n22-tip-bg
  position absolute
  absolute-pos()
  border-radius tip-radius
  background-color tip-fill
  box-shadow tip-shadow
  opacity tip-fill-opacity
  &::after
    content ''
    position absolute
    bottom -10px
    left 50%
    margin-left -11px
    width 0
    height 0
    border-style solid
    border-width 10px 11px 0 11px
    border-color tip-fill transparent transparent transparent

.n22-tip
  &.has-close
    .n22-tip-content
      padding-right 60px
  &.is-bottom
    .n22-tip-bg::after
      bottom auto
      top -10px
      border-width 0 11px 10px 11px
      border-color transparent transparent tip-fill transparent
  &.is-left
    .n22-tip-bg::after
      top 50%
      right -6px
      left auto
      margin-top -11px
      border-width 11px 0 11px 10px
      border-color transparent transparent transparent tip-fill
  &.is-right
    .n22-tip-bg::after
      top 50%
      left 4px
      margin-top -11px
      border-width 11px 10px 11px 0
      border-color transparent tip-fill transparent transparent

  .n22-icon.n22-icon-close
    position absolute
    right 16px
    top 50%
    width tip-close-size
    height tip-close-size
    transform translateY(-50%)
</style>
