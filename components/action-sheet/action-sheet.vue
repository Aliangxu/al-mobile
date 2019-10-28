<template>
  <div class="n22-action-sheet">
    <n22-popup
      v-model="isActionSheetShow"
      position="bottom"
      prevent-scroll
      @show="$_onShow"
      @hide="$_onHide"
    >
      <div class="n22-action-sheet-content">
        <header class="n22-action-sheet-header" v-if="title">{{ title }}</header>
        <ul class="n22-action-sheet-list">
          <template v-for="(item, index) in options">
            <!-- <mu-ripple tag="li" color="#ffcc00" :opacity="0.7" :key="index"> -->
              <li
                :key="index"
                v-if="isShowSelect?true:(index !== clickIndex)"
                :class="{
                  'active': isShowSelectActive?index === clickIndex:false,
                  'disabled': index=== invalidIndex,
                  'n22-action-sheet-item': true
                }"
                @click="$_onSelect(item, index)"
              >
                <div class="n22-action-sheet-item-wrapper">
                  <div class="n22-action-sheet-item-section" v-html="item.text || item.label"></div>
                </div>
              </li>
            <!-- </mu-ripple> -->
          </template>
        </ul>
      </div>
      <div class="n22-action-sheet-content" style="margin-top: 2%;">
        <ul>
          <!-- <mu-ripple color="#ffcc00" :opacity="0.7"> -->
            <div class="n22-action-sheet-cancel" @click="$_onCancel">{{ cancelText }}</div>
          <!-- </mu-ripple> -->
        </ul>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import Popup from '../popup'
import {inArray} from '../_util'

export default {
  name: 'n22-action-sheet',

  components: {
    [Popup.name]: Popup,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
    isShowSelect: {
      type: Boolean,
      default: true,
    },
    isShowSelectActive: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
    defaultIndex: {
      type: Number,
      default: -1,
    },
    invalidIndex: {
      type: Number,
      default: -1,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },

  data() {
    return {
      isActionSheetShow: this.value,
      clickIndex: -1,
      scroller: '',
    }
  },

  watch: {
    value(newVal) {
      this.isActionSheetShow = newVal
    },
  },

  created() {
    this.clickIndex = this.defaultIndex
  },

  methods: {
    // MARK: events handler, 如 $_onButtonClick
    $_onShow() {
      this.$emit('show')
    },
    $_onHide() {
      this.$emit('hide')
      this.$_hideSheet()
    },
    onSelectno(index) {
      if (index === this.invalidIndex || inArray(this.invalidIndex, index)) {
        return
      }
      this.clickIndex = index
    },
    $_onSelect(item, index) {
      if (index === this.invalidIndex || inArray(this.invalidIndex, index)) {
        return
      }
      this.clickIndex = index
      this.$emit('selected', item)
      this.$_hideSheet()
    },
    $_onCancel() {
      this.$emit('cancel')
      this.$_hideSheet()
    },
    $_hideSheet() {
      this.isActionSheetShow = false
      this.$emit('input', false)
    },
  },
}
</script>
<style lang="stylus" scoped>
.n22-action-sheet /deep/ .md-popup.bottom .md-popup-box {
    bottom: 1%;
    left: 2%;
    width 96%;
}
</style>

<style lang="stylus">
// .md-popup.bottom .md-popup-box {
//     bottom: 1%;
//     left: 2%;
//     width 96%;
// }
// .n22-action-sheet
//   color action-sheet-color
//   -webkit-font-smoothing antialiased
//   .n22-action-sheet-content
//     border-radius: 10px
//     position relative
//     width 100%
//     font-size action-sheet-font-size
//     background action-sheet-bg
//     text-align center
//     overflow auto
//     header
//       vertical-height(action-sheet-height)
//       padding 0 30px
//       word-ellipsis()
//     >ul
//       li
//         vertical-height(action-sheet-height)
//         hairline(top, color-border-base)
//         box-sizing border-box
//         font-size action-sheet-font-size
//         &.active
//           color action-sheet-color-highlight
//         &.disabled
//           opacity action-sheet-disabled-opacity
//         &.cancel-btn
//           vertical-height(action-sheet-height)
//           hairline(top, color-border-base)
//           color action-sheet-color-cancel
//           // &::before
//           //   display block
//           //   content ''
//           //   height 12px
//           //   background action-sheet-cancel-gap-bg
//   .md-popup-box
//     // background-color color-bg-base


.n22-action-sheet
  color action-sheet-color
  -webkit-font-smoothing antialiased
  .md-popup
    z-index action-sheet-zindex
  .md-popup-box
    // background-color color-bg-base

.n22-action-sheet-content
  border-radius: 10px
  position relative
  width 100%
  font-size action-sheet-font-size
  background action-sheet-bg
  text-align center
  overflow auto

.n22-action-sheet-header
  position relative
  vertical-height(action-sheet-height)
  hairline(bottom, color-border-base)
  word-ellipsis()
  overflow visible

.n22-action-sheet-item
  position relative
  vertical-height(action-sheet-height)
  padding 0 action-sheet-padding-h
  box-sizing border-box
  font-size action-sheet-font-size
  transition background-color .3s
  -webkit-user-select none
  &.active
    color action-sheet-color-highlight
  &.disabled .n22-action-sheet-item-section
    opacity action-sheet-disabled-opacity
  &:first-of-type
    .n22-action-sheet-item-wrapper:after
      display none
  &:active
    background-color color-bg-tap
    &.disabled
      background-color transparent

.n22-action-sheet-item-wrapper
  position relative
  hairline(top, color-border-base)

.n22-action-sheet-cancel
  vertical-height(action-sheet-height)
  color action-sheet-color-cancel
  font-weight font-weight-medium
  // &::before
  //   display block
  //   content ''
  //   height 12px
  //   background action-sheet-cancel-gap-bg
</style>
