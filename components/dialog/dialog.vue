<template>
  <div class="n22-dialog">
    <n22-popup
      v-model="value"
      :hasMask="hasMask"
      :maskClosable="maskClosable"
      position="center"
      :transition="transition"
      :preventScroll="preventScroll"
      :preventScrollExclude="preventScrollExclude"
      @input="$_onInput"
      @show="$_onShow"
      @hide="$_onHide"
    >
      <div class="n22-dialog-content">
        <slot name="header"></slot>
        <div class="n22-dialog-body">
          <a
            role="button"
            v-if="closable"
            class="n22-dialog-close"
            @click="close"
          >
            <svg-icon class="icon_c" icon-class="close"></svg-icon>
            <!-- <n22-icon name="close" /> -->
          </a>
          <div v-if="icon" class="n22-dialog-icon">
            <svg-icon v-if="!iconSvg" :icon-class="icon"></svg-icon>
            <img v-else :src="icon" alt="">
            <!-- <n22-icon :name="icon" :svg="iconSvg"/> -->
          </div>
          <h2 class="n22-dialog-title" v-if="title" v-text="title"></h2>
          <slot>
            <div class="n22-dialog-text" v-html="content"></div>
          </slot>
        </div>
        <footer class="n22-dialog-actions" :class="{ 'is-column': layout === 'column' }">
          <template v-for="(btn, index) in btns">
            <a
              role="button"
              class="n22-dialog-btn"
              :class="{
                disabled: !!btn.disabled,
                warning: !btn.disabled && !!btn.warning
              }"
              :key="index"
              v-text="btn.text"
              @click="$_onClick(btn)"
              @touchmove.prevent
            ></a>
          </template>
        </footer>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import Popup from '../popup'
// import Icon from '../icon'
import {mdDocument} from '../_util'

export default {
  name: 'n22-dialog',

  components: {
    [Popup.name]: Popup,
    // [Icon.name]: Icon,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: '',
    },
    btns: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return []
      },
    },
    layout: {
      type: String,
      default: 'row',
    },
    appendTo: {
      default: () => mdDocument.body,
    },
    hasMask: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: 'n22-fade',
    },
    preventScroll: {
      type: Boolean,
      default: false,
    },
    preventScrollExclude: {
      type: String,
      default: '',
    },
  },

  mounted() {
    if (this.appendTo) {
      this.appendTo.appendChild(this.$el)
    }
  },

  beforeDestroy() {
    if (this.appendTo) {
      this.appendTo.removeChild(this.$el)
    }
  },

  methods: {
    // MARK: private methods

    // MARK: events handler
    $_onInput(val) {
      this.$emit('input', val)
    },
    $_onShow() {
      this.$emit('show')
    },
    $_onHide() {
      this.$emit('hide')
    },
    $_onClick(btn) {
      if (btn.disabled || btn.loading) {
        return
      }
      if (typeof btn.handler === 'function') {
        btn.handler.call(null, btn)
      } else {
        this.close()
      }
    },
    // MARK: public methods
    close() {
      this.$emit('input', false)
    },
  },
}

</script>

<style lang="stylus">
.n22-dialog
  .n22-popup
    z-index dialog-zindex

.n22-dialog-content
  width dialog-width
  border-radius dialog-radius
  background-color color-bg-inverse
  overflow hidden

.n22-dialog-body
  color dialog-text-color
  font-size dialog-text-font-size
  text-align left
  padding dialog-body-padding

.n22-dialog-icon
  position relative
  display block
  width dialog-icon-size
  height dialog-icon-size
  margin v-gap-md auto 28px
.icon_c 
  height 24px!important
  width 24px!important
  color #000000 
.n22-dialog .n22-dialog-icon .n22-icon
  display flex
  align-items center
  justify-content center
  position absolute
  top 0
  left 0
  width dialog-icon-size
  height dialog-icon-size
  fill dialog-icon-fill
  color dialog-icon-fill
  font-size dialog-icon-size
  line-height dialog-icon-size

.n22-dialog-close
  position absolute
  color dialog-close-color
  top 20px
  right 20px
  z-index 15

.n22-dialog-title
  color dialog-title-color
  text-align center
  font-size dialog-title-font-size
  font-weight font-weight-normal
  line-height 1.2
  margin 0 0 28px 0

.n22-dialog-text
  display flex
  justify-content center

.n22-dialog-actions
  position relative
  display flex
  hairline(top, dialog-action-border-color)
  &.is-column
    flex-direction column
    .n22-dialog-btn
      flex 0 0 auto
      remove-hairline(right)
      &:not(:first-child)
        hairline(top, dialog-action-border-color)
      &:last-child
        color color-text-minor
      &:first-child
        color dialog-action-highlight-color

.n22-dialog-btn
  position relative
  flex 1 1 0%
  display flex
  align-items center
  justify-content center
  height dialog-action-height
  font-size dialog-action-font-size
  font-weight dialog-action-font-weight
  color color-text-minor
  text-align center
  hairline(right, dialog-action-border-color)
  transition background-color .3s
  -webkit-user-select none
  -webkit-tap-highlight-color transparent
  &.warning
    color color-text-error !important
  &:last-child
    color dialog-action-highlight-color
    remove-hairline(right)
  &:active
    background-color color-bg-tap
</style>
