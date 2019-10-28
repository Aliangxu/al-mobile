<template>
  <div
    class="n22-activity-indicator"
    :class="type"
  >
    <div
      class="indicator-container"
      :class="{vertical}"
    >
      <slot name="left"></slot>
      <div class="indicator-loading">
        <template v-if="type === 'roller'">
          <n22-activity-indicator-rolling
            :size="size"
            :color="color"
            :width="width"
          ></n22-activity-indicator-rolling>
        </template>
        <!-- <template v-else-if="type === 'roller-success'">
          <n22-activity-indicator-rolling-success
            :size="size"
            :color="color"
          ></n22-activity-indicator-rolling-success>
        </template> -->
        <template v-else-if="type === 'spinner'">
          <n22-activity-indicator-spinning
            :size="size"
            :color="color"
          ></n22-activity-indicator-spinning>
        </template>
        <template v-else-if="type === 'carousel'">
          <n22-activity-indicator-carousel
            :size="size"
            :color="color"
          ></n22-activity-indicator-carousel>
        </template>
      </div>
      <div
        v-if="$slots.default"
        :style="{fontSize: `${textSize}px`, color: textColor}"
        class="n22-activity-indicator-text indicator-text"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Roller from './roller'
// import RollerSuccess from './roller-success'
import Spinner from './spinner'
import Carousel from './carousel'

export default {
  name: 'n22-activity-indicator',

  components: {
    [Roller.name]: Roller,
    // [RollerSuccess.name]: RollerSuccess,
    [Spinner.name]: Spinner,
    [Carousel.name]: Carousel,
  },

  props: {
    type: {
      type: String,
      default: 'roller', // roller, spinner, carousel
    },
    size: {
      type: Number,
      default: 35,
    },
    width: {
      type: Number,
    },
    color: {
      type: String,
      default() {
        if (this.type === 'spinner') {
          return 'dark'
        } else {
          return '#2F86F6'
        }
      },
    },
    textColor: {
      type: String,
      default: '#999',
    },
    textSize: {
      type: Number,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
}

</script>

<style lang="stylus">
.n22-activity-indicator
  .indicator-container
    display flex
    flex-direction row
    align-items center
    .indicator-text
      margin 0 0 0 15px
      color color-text-minor
    &.vertical
      flex-direction column
      justify-content center
      .indicator-text
        margin 15px 0 0 0
</style>
