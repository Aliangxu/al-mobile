<template>
  <div class="n22-slider" :class="{'is-disabled': disabled}">
    <template v-if="range">
      <div class="n22-slider-bar" :style="barStyle"></div>
      <div class="n22-slider-handle is-lower"
        :data-hint="format(values[0])"
        :class="{
          'is-active': isDragging && !isDragingUpper
        }"
        :style="{'left': lowerHandlePosition + '%'}">
        <span
          @mousedown="$_startLowerDrag"
          @touchstart="$_startLowerDrag"
        ></span>
      </div>
      <div class="n22-slider-handle is-higher"
        :data-hint="format(values[1])"
        :class="{
          'is-active': isDragging && isDragingUpper
        }"
        :style="{'left': upperHandlePosition + '%'}">
        <span
          @mousedown="$_startUpperDrag"
          @touchstart="$_startUpperDrag"
        ></span>
      </div>
    </template>
    <template v-else>
      <div class="n22-slider-bar" :style="barStyle"></div>
      <div class="n22-slider-handle"
        :data-hint="format(values[0])"
        :class="{
          'is-active': isDragging
        }"
        :style="{'left': lowerHandlePosition + '%'}">
        <span
          @mousedown="$_startLowerDrag"
          @touchstart="$_startLowerDrag"
        ></span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'n22-slider',

  props: {
    value: {
      type: [Array, Number],
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    range: {
      type: Boolean,
      default: false,
    },
    format: {
      type: Function,
      default(val) {
        return val
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
  },

  data() {
    return {
      isDragging: false,
      isDragingUpper: false,
      values: [this.min, this.max],
      startDragMousePos: 0,
      startVal: 0,
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (
          (Array.isArray(val) && (val[0] !== this.values[0] || val[1] !== this.values[1])) ||
          val !== this.values[0]
        ) {
          this.$_updateValue(val)
        }
      },
    },
    disabled(newVal) {
      if (!newVal) {
        this.$_stopDrag()
      }
    },
  },

  computed: {
    lowerHandlePosition() {
      return (this.values[0] - this.min) / (this.max - this.min) * 100
    },
    upperHandlePosition() {
      return (this.values[1] - this.min) / (this.max - this.min) * 100
    },
    barStyle() {
      if (this.range) {
        return {
          width: (this.values[1] - this.values[0]) / (this.max - this.min) * 100 + '%',
          left: this.lowerHandlePosition + '%',
        }
      } else {
        return {
          width: this.values[0] / (this.max - this.min) * 100 + '%',
        }
      }
    },
  },

  methods: {
    $_updateValue(newVal, e) {
      let newValues = []

      if (Array.isArray(newVal)) {
        newValues = [newVal[0], newVal[1]]
      } else {
        newValues[0] = newVal
      }

      if (typeof newValues[0] !== 'number') {
        newValues[0] = this.values[0]
      } else {
        newValues[0] = Math.round((newValues[0] - this.min) / this.step) * this.step + this.min
      }

      if (typeof newValues[1] !== 'number') {
        newValues[1] = this.values[1]
      } else {
        newValues[1] = Math.round((newValues[1] - this.min) / this.step) * this.step + this.min
      }

      // value boundary adjust
      if (newValues[0] < this.min) {
        newValues[0] = this.min
      }
      if (newValues[1] > this.max) {
        newValues[1] = this.max
      }
      if (newValues[0] > newValues[1]) {
        if (newValues[0] === this.values[0]) {
          newValues[1] = newValues[0]
        } else {
          newValues[0] = newValues[1]
        }
      }

      if (this.values[0] === newValues[0] && this.values[1] === newValues[1]) {
        return
      }

      this.values = newValues

      if (this.range) {
        this.$emit('input', this.values, e)
      } else {
        this.$emit('input', this.values[0], e)
      }
    },
    $_startLowerDrag(e) {
      if (this.disabled) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      e = e.changedTouches ? e.changedTouches[0] : e
      this.startDragMousePos = e[this.direction === "vertical" ? "pageY" : "pageX"]
      this.startVal = this.values[0]
      this.isDragingUpper = false
      this.isDragging = true
      window.addEventListener('mousemove', this.$_onDrag)
      window.addEventListener('touchmove', this.$_onDrag)
      window.addEventListener('mouseup', this.$_onUp)
      window.addEventListener('touchend', this.$_onUp)
    },
    $_startUpperDrag(e) {
      if (this.disabled) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      e = e.changedTouches ? e.changedTouches[0] : e
      this.startDragMousePos = e[this.direction === "vertical" ? "pageY" : "pageX"]
      this.startVal = this.values[1]
      this.isDragingUpper = true
      this.isDragging = true
      window.addEventListener('mousemove', this.$_onDrag)
      window.addEventListener('touchmove', this.$_onDrag)
      window.addEventListener('mouseup', this.$_onUp)
      window.addEventListener('touchend', this.$_onUp)
    },
    $_onDrag(e) {
      if (this.disabled) {
        return
      }
      e.preventDefault()
      e.stopPropagation()
      if (!this.isDragging) {
        return
      }
      e = e.changedTouches ? e.changedTouches[0] : e
      window.requestAnimationFrame(() => {
        let diff = (e[this.direction === "vertical" ? "pageY" : "pageX"] - this.startDragMousePos) / this.$el.offsetWidth * (this.max - this.min)
        let nextVal = this.startVal + diff
        if (this.isDragging) {
          if (this.isDragingUpper) {
            this.$_updateValue([null, nextVal], e)
          } else {
            this.$_updateValue([nextVal, null], e)
          }
        }
      })
    },
    $_onUp(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$_stopDrag()
    },
    $_stopDrag() {
      this.isDragging = false
      this.isDragingUpper = false
      window.removeEventListener('mousemove', this.$_onDrag)
      window.removeEventListener('touchmove', this.$_onDrag)
      window.removeEventListener('mouseup', this.$_onUp)
      window.removeEventListener('touchend', this.$_onUp)
    },
  },
}

</script>

<style lang="stylus">
.n22-slider
  position relative
  width 100%
  height 30px
  &::before
    content ''
    position absolute
    top 12px
    left 0
    right 0
    height 8px
    border-radius 4px
    background-color slider-bg-base
  &.is-disabled
    .n22-slider-bar
      opacity 0.35
    .n22-slider-handle span
      cursor: not-allowed

.n22-slider-bar
  position absolute
  left 0
  top 12px
  height 8px
  background-color slider-bg-tap
  border-radius 2px
  z-index 5
  border-radius 100px
  border-top-left-radius 100px

.n22-slider-handle
  position absolute
  top 3px
  left 0
  margin-left -10px
  z-index 15
  overflow visible
  &::after
    content attr(data-hint)
    color tip-color
    position absolute
    pointer-events none
    opacity 0
    visibility hidden
    z-index 15
    font-size font-minor-normal
    line-height 1.25
    padding 4px 8px
    border-radius radius-normal
    background-color tip-fill
    white-space nowrap
    left 50%
    bottom 100%
    margin-bottom 10px
    transform translateX(-50%)

  &:hover::after,
  &:active::after
    opacity 1
    visibility visible

  &.is-higher
    z-index 20
  &.is-active span
    transform scale(1.3)
  span
    display block
    cursor pointer
    width 25px
    height 25px
    background-color slider-handle-bg
    border-radius 50%
    box-shadow 0 1px 2px rgba(0, 0, 0, 0.2)
    transition transform 200ms
</style>
