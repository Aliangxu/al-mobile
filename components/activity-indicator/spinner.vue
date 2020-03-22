<template>
  <div
    class="n22-activity-indicator-spinning"
    :class="{dark: color === 'dark'}"
  >
    <n22-icon
      class="n22-activity-indicator-svg"
      name="spinner"
      :style="{width: `${size}px`, height: `${size}px`}"
    ></n22-icon>
  </div>
</template>

<script>import Icon from '../icon'

export default {
  name: 'n22-activity-indicator-spinning',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    size: {
      type: Number,
      default: 35,
    },
    color: {
      type: String,
      default: 'dark',
      validator(val) {
        return val === 'dark' || val === 'light'
      },
    },
  },
}
</script>

<style lang="stylus">
.n22-activity-indicator-spinning
  clearfix()
  .n22-icon
    float left
  &.dark
    .n22-icon
      filter invert(1)
</style>
