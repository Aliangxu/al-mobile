<template>
  <svg
    v-if="svg || isInnerSvg"
    class="n22-icon icon-svg"
    :class="[`n22-icon-${name}`, size]"
    :style="{fill: color}"
    @click="$emit('click', $event)"
  >
    <use :xlink:href="`#${name}`"/>
  </svg>
  <i
    v-else-if="name"
    class="n22-icon icon-font"
    :class="[`n22-icon-${name}`, name, size]"
    :style="{color}"
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
    font-family  "Mand-Mobile-Icon" !important
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
.n22-icon-rectangle:before
  content "\e900"
.n22-icon-invisible:before
  content "\e601"
.n22-icon-visible:before
  content "\e602"
.n22-icon-right:before
  content "\e905"
.n22-icon-wrong:before
  content "\e906"
.n22-icon-info:before
  content "\e605"
.n22-icon-service:before
  content "\e606"
.n22-icon-edit:before
  content "\e607"
.n22-icon-refresh:before
  content "\e901"
.n22-icon-question:before
  content "\e608"
.n22-icon-setting:before
  content "\e609"
.n22-icon-wait:before
  content "\e902"
.n22-icon-check:before
  content "\e904"
.n22-icon-check-disabled:before
  content "\e903"
.n22-icon-checked:before, .n22-icon-success:before
  content "\e908"
.n22-icon-clear:before, .n22-icon-fail:before
  content "\e60e"
.n22-icon-info-solid:before
  content "\e907"
.n22-icon-warn:before
  content "\e60b"
.n22-icon-security:before
  content "\e60f"
.n22-icon-rmb:before
  content "\e610"
.n22-icon-scan:before
  content "\e611"
.n22-icon-share:before
  content "\e612"
.n22-icon-back:before
  content "\e613"
.n22-icon-card-bag:before
  content "\e614"
.n22-icon-message:before
  content "\e615"
.n22-icon-order:before
  content "\e616"
.n22-icon-balance:before
  content "\e617"
.n22-icon-coupon:before
  content "\e618"
.n22-icon-sort:before
  content "\e619"
.n22-icon-address-book:before
  content "\e61a"
.n22-icon-mobile-phone:before
  content "\e61b"
.n22-icon-home:before
  content "\e61c"
.n22-icon-discovery:before
  content "\e61d"
.n22-icon-calendar:before
  content "\e61e"
.n22-icon-user:before
  content "\e61f"
.n22-icon-time:before
  content "\e620"
.n22-icon-search:before
  content "\e621"
.n22-icon-switch:before
  content "\e622"
.n22-icon-camera:before
  content "\e623"
.n22-icon-clock:before
  content "\e624"
.n22-icon-profession:before
  content "\e625"
.n22-icon-delete:before
  content "\e626"
.n22-icon-id-card:before
  content "\e627"
.n22-icon-filter:before
  content "\e628"
.n22-icon-location:before
  content "\e629"
.n22-icon-authentication:before
  content "\e62a"
.n22-icon-motor-vehicle:before
  content "\e62b"
.n22-icon-phone:before
  content "\e62c"
.n22-icon-volumn:before
  content "\e62d"
.n22-icon-arrow-left:before
  content "\e603"
.n22-icon-arrow-right:before
  content "\e630"
.n22-icon-arrow-up:before
  content "\e633"
.n22-icon-arrow-down:before
  content "\e634"
.n22-icon-close:before
  content "\e604"

@font-face
  font-family Mand-Mobile-Icon
  font-style normal
  font-weight normal
  /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
  /* Version is required */
  src icon-font-family
</style>
