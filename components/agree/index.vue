<template>
  <div
    class="n22-agree"
    :class="[
      disabled ? 'disabled' : ''
    ]">
    <div
      class="n22-agree-icon"
      :class="[
        value ? 'checked' : ''
      ]"
      @click="$_onChange($event)">
      <div class="n22-agree-icon-container">
        <svg-icon :icon-class="value?checked:check"></svg-icon>
        <!-- <md-icon name="checked" :size="size"></md-icon>
        <md-icon name="check" :size="size"></md-icon> -->
      </div>
    </div>
    <div @click="isContentClick?$_onChange($event):''" class="n22-agree-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import Icon from '../icon'
export default {
  name: 'n22-agree',

  components: {
    // [Icon.name]: Icon,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },
    checked: {
      type: String,
      default: 'checked',
    },
    check: {
      type: String,
      default: 'check',
    },
    isContentClick: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },

  methods: {
    // MARK: events handler, 如 $_onButtonClick
    $_onChange(event) {
      if (this.disabled) {
        return
      }
      this.$emit('input', !this.value)
      this.$emit('change', event)
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-agree
  display flex
  align-items center
  &.disabled
    opacity agree-disabled-opacity

.n22-agree-icon
  display flex
  justify-content center
  align-items center
  align-self flex-start
  flex-shrink 0
  position relative
  margin-right h-gap-sm
  color agree-fill
  font-size 30px
  // width 50px
  // height 50px
  .n22-agree-icon-container
    /deep/.svg-icon
      height 20px
      width 20px
      transition all .3s ease-in-out-quint
    position relative
    .n22-icon
      display flex
      width auto 
      height auto
      line-height 1
      will-change auto
      &.n22-icon-checked
        position absolute
        top 0
        left 0
        transform scale(0.6)
        color transparent
        transition all .3s ease-in-out-quint
      &.n22-icon-check
        color agree-fill
  &.checked .n22-agree-icon-container
    .n22-icon-checked
      transform scale(1)
      color agree-fill
    .n22-icon-check
      opacity 0.8

.n22-agree-content
  flex 1 1 0%
  line-height 1.5
</style>
