<template>
  <div
    class="n22-activity-indicator-spinning"
    :class="{dark: color === 'dark'}"
  >
    <!-- <md-icon
      class="n22-activity-indicator-svg"
      name="spinner"
      :style="{width: `${size}px`, height: `${size}px`}"
    ></md-icon> -->
    <svg-icon :style="{width: `${size}px`, height: `${size}px`}" icon-class="spinner"></svg-icon>
  </div>
</template>

<script>
// import {Icon} from 'mand-mobile'

export default {
  name: 'n22-activity-indicator-spinning',

  components: {
    // [Icon.name]: Icon,
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
  .md-icon
    float left
  &.dark
    .md-icon
      filter invert(1)
</style>
