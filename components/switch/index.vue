<template>
  <div
    class="n22-switch"
    :class="[
      disabled ? 'disabled' : '',
      value ? 'active' : '']"
    @click="$_onChange($event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'n22-switch',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
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

<style lang="stylus">
.n22-switch
  box-sizing border-box
  position relative
  width 40px
  height 24px
  border-radius 24px
  background-color switch-fill-inverse
  &.disabled
    opacity switch-item-color-disabled
  &::before, &::after
    content ""
    position absolute
    transition transform .3s
  &::before
    top 0
    left 0
    width 40px
    height 24px
    border-radius 12px
    background-color switch-fill-inverse
  &::after
    top 2px
    left 2px
    width 20px
    height 20px
    background-color switch-handle-color
    border-radius 50%
  &.active
    background-color switch-fill
  &.active::before
      transform scale(0)
  &.active::after
      transform translateX(16px)
</style>
