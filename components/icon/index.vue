<template>
  <svg
    v-if="svg || isInnerSvg"
    class="n22-icon icon-svg"
    :class="[`n22-icon-${name}`, size]"
    :style="{ fill: color }"
    @click="$emit('click', $event)"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
  <i
    v-else-if="name"
    class="n22-icon icon-font"
    :class="[`n22-icon-${name}`, name, size]"
    :style="{ color }"
    @click="$emit('click', $event)"
  ></i>
</template>

<script>
import loadSprite from './load-spirte'
import defaultSvg from './default-svg-list'

export default {
  name: 'n22-icon',

  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: '',
    },
    svg: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    loadSprite()
  },

  computed: {
    isInnerSvg() {
      return !!defaultSvg[this.name]
    },
  },
}

</script>

<style lang="stylus">
.n22-icon
  background-size contain
  fill currentColor
  -webkit-backface-visibility hidden
  transform translateZ(0) scale(1.0, 1.0)
  // display flex
  // align-items center
  // justify-content center

  // size
  &.icon-font
    font-family  "Al-Mobile-Icon" !important
    font-size 16px
    font-style normal
    font-weight normal
    font-variant normal
    text-transform none
    line-height 1
    letter-spacing 0
    speak none
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    &.xss
      font-size icon-size-xxs
    &.xs
      font-size icon-size-xs
    &.sm
      font-size icon-size-sm
    &.md
      font-size icon-size-md
    &.lg
      font-size icon-size-lg
    &:before
      position relative
      z-index 2

  &.icon-svg
    &.xss
      width icon-size-xxs
      vertical-height(icon-size-xxs)
    &.xs
      width icon-size-xs
      vertical-height(icon-size-xs)
    &.sm
      width icon-size-sm
      vertical-height(icon-size-sm)
    &.md
      width icon-size-md
      vertical-height(icon-size-md)
    &.lg
      width icon-size-lg
      vertical-height(icon-size-lg)

// name
.n22-icon-view_off:before
  content "\e639"
.n22-icon-view:before
  content "\e640"
.n22-icon-wechat:before
  content "\e642"
.n22-icon-wechat_friends:before
  content "\e641"
.n22-icon-right:before
  content "\e61c"
.n22-icon-wrong:before
  content "\e624"
.n22-icon-edit:before
  content "\e629"
.n22-icon-setting:before
  content "\e662"
.n22-icon-check:before
  content "\e619"
.n22-icon-check_square:before
  content "\e61a"
.n22-icon-check_disabled:before
  content "\e620"
.n22-icon-checked:before, .n22-icon-success:before
  content "\e618"
.n22-icon-checked_sauare:before, .n22-icon-success_square:before
  content "\e61f"
.n22-icon-clear:before, .n22-icon-fail:before
  content "\e61e"
.n22-icon-question_mark:before
  content "\e632"
.n22-icon-warn:before
  content "\e63c"
.n22-icon-warning:before
  content "\e631"
.n22-icon-alipay:before
  content "\e63f"
.n22-icon-scan:before
  content "\e635"
.n22-icon-back:before
  content "\e613"
.n22-icon-add_pro:before
  content "\e614"
.n22-icon-calendar:before
  content "\e615"
.n22-icon-change:before
  content "\e617"
.n22-icon-email:before
  content "\e61b"
.n22-icon-correct:before
  content "\e61c"
.n22-icon-customer_service:before
  content "\e622"
.n22-icon-close:before
  content "\e624"
.n22-icon-proccess:before
  content "\e626"
.n22-icon-camera:before
  content "\e627"
.n22-icon-phone:before
  content "\e60d"
.n22-icon-share:before
  content "\e62a"
.n22-icon-search:before
  content "\e62b"
.n22-icon-message:before
  content "\e62d"
.n22-icon-volumn:before
  content "\e63d"
.n22-icon-triangle:before
  content "\e62f"
.n22-icon-delete:before
  content "\e62e"
.n22-icon-card:before
  content "\e65d"
.n22-icon-right_arrow:before
  content "\e625"
.n22-icon-qq:before
  content "\e633"
.n22-icon-calendar1:before
  content "\e636"
.n22-icon-star:before
  content "\e637"
.n22-icon-star_on:before
  content "\e638"

@font-face
  font-family Al-Mobile-Icon
  font-style normal
  font-weight normal
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
  /* Version is required */
  src icon-font-family
</style>
