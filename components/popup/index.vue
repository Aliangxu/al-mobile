<template>
  <div
    v-show="isPopupShow"
    class="n22-popup"
    :class="[
      hasMask ? 'with-mask' : '',
      position
    ]"
  >
    <transition name="n22-mask-fade">
      <div
        v-show="hasMask && isPopupBoxShow"
        @click="$_onPopupMaskClick"
        class="n22-popup-mask"
      ></div>
    </transition>
    <n22-transition
      :name="transition"
      @before-enter="$_onPopupTransitionStart"
      @before-leave="$_onPopupTransitionStart"
      @after-enter="$_onPopupTransitionEnd"
      @after-leave="$_onPopupTransitionEnd"
    >
      <div
        v-show="isPopupBoxShow"
        class="n22-popup-box"
        :class="[
          transition
        ]"
      >
        <slot></slot>
      </div>
    </n22-transition>
  </div>
</template>

<script>
import Transition from '../transition'
import popupMixin from './mixins'
import {isIOS} from '../_util'

export default {
  name: 'n22-popup',

  mixins: [popupMixin],

  components: {
    'n22-transition': Transition,
  },

  props: {
    position: {
      type: String,
      default: 'center',
    },
    scrollClass: {
      type: String,
      default: 'n22-popup-content',
    },
    transition: {
      type: String,
      default() {
        switch (this.position) {
          case 'bottom':
            return 'n22-slide-up'
          /* istanbul ignore next */
          case 'top':
            return 'n22-slide-down'
          /* istanbul ignore next */
          case 'left':
            return 'n22-slide-right'
          /* istanbul ignore next */
          case 'right':
            return 'n22-slide-left'
          default:
            return 'n22-fade' // fade/fade-bounce/fade-slide/fade-zoom
        }
      },
    },
    preventScroll: {
      type: Boolean,
      default: false,
    },
    preventScrollExclude: {
      type: [String, Function],
      default() {
        return ''
      },
    },
    // Mixin Props
    // value: {
    //   type: Boolean,
    //   default: false,
    // },
    // hasMask: {
    //   type: Boolean,
    //   default: true,
    // },
    // maskClosable: {
    //   type: Boolean,
    //   default: true,
    // },
  },

  data() {
    return {
      // controle popup mask & popup box
      isPopupShow: false,
      // controle popup box
      isPopupBoxShow: false,
      // transtion lock
      isAnimation: false,
      isBind: true,
      startY: 0,
      endY: 0,
    }
  },

  watch: {
    value(val) {
      /* istanbul ignore next */
      if (val) {
        if (this.isAnimation) {
          setTimeout(() => {
            this.$_showPopupBox()
          }, 50)
        } else {
          this.$_showPopupBox()
        }
      } else {
        this.$_hidePopupBox()
      }
    },
    preventScrollExclude(val, oldVal) {
      // remove old listener before add
      /* istanbul ignore next */
      this.$_preventScrollExclude(false, oldVal)
      /* istanbul ignore next */
      this.$_preventScrollExclude(true, val)
    },
  },

  mounted() {
    this.value && this.$_showPopupBox()
  },

  methods: {
    // MARK: private methods
    $_showPopupBox() {
      this.isPopupShow = true
      this.isAnimation = true
      // popup box enter the animation after popup show
      this.isPopupBoxShow = true
      /* istanbul ignore if */
      if (process.env.NODE_ENV === 'test') {
        this.$_onPopupTransitionStart()
        this.$_onPopupTransitionEnd()
      }

      this.$nextTick(()=>{
        this.$_onScroll(true)
      })

      this.preventScroll && this.$_preventScroll(true)
    },
    $_bodyScroll(e){
      const boxer = this.$el.querySelector(`.${this.scrollClass}`)
      if (!this.isBind || (this.endY < this.startY && (boxer.scrollTop >= boxer.scrollHeight - boxer.offsetHeight))) {
        e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
      }
    },
    $_onScroll(isBind) {
      if (!isIOS)return;
      this.isBind = isBind
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const boxer = this.$el.querySelector(`.${this.scrollClass}`)
      let _this = this
      if (boxer) {
        boxer[handler]('touchstart',function (boxerE) {
          _this.startY = boxerE.touches[0].pageY;
        });
        boxer[handler]('touchmove', (boxerE)=>{
          _this.endY = boxerE.touches[0].pageY;  //记录手指触摸的移动中的坐标
          // console.log("boxer.scrolltop:"+boxer.scrollTop+" boxer.offsetTop:"+(boxer.scrollHeight-boxer.offsetHeight))
          // console.log("%c startY","color:#00CD00",_this.startY)
          // console.log("%c endY","color:#00CD00",_this.endY)
          // passive 参数不能省略，用来兼容ios和android
          document.body[handler]('touchmove', _this.$_bodyScroll, { passive: false })
        }, false)
        if (!isBind) {
          document.body[handler]('touchmove', _this.$_bodyScroll, { passive: false })
        }
      }
    },
    $_hidePopupBox() {
      this.isAnimation = true
      this.isPopupBoxShow = false
      this.$_onScroll(false)
      this.preventScroll && this.$_preventScroll(false)
      this.$emit('input', false)
      /* istanbul ignore if */
      if (process.env.NODE_ENV === 'test') {
        this.$_onPopupTransitionStart()
        this.$_onPopupTransitionEnd()
      }
    },
    $_preventScroll(isBind) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const masker = this.$el.querySelector('.n22-popup-mask')
      const boxer = this.$el.querySelector('.n22-popup-box')

      masker && masker[handler]('touchmove', this.$_preventDefault, false)
      boxer && boxer[handler]('touchmove', this.$_preventDefault, false)
      this.$_preventScrollExclude(isBind)
    },
    $_preventScrollExclude(isBind, preventScrollExclude) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      preventScrollExclude = preventScrollExclude || this.preventScrollExclude
      const excluder =
        preventScrollExclude && typeof preventScrollExclude === 'string'
          ? this.$el.querySelector(preventScrollExclude)
          : preventScrollExclude
          console.log("%c excluder","color:#00CD00",excluder)
      excluder && excluder[handler]('touchmove', this.$_stopImmediatePropagation, false)
    },
    $_preventDefault(event) {
      event.preventDefault()
    },
    $_stopImmediatePropagation(event) {
      /* istanbul ignore next */
      event.stopImmediatePropagation()
    },

    // MARK: event handler
    $_onPopupTransitionStart() {
      if (!this.isPopupBoxShow) {
        this.$emit('beforeHide')
        this.$emit('before-hide')
      } else {
        this.$emit('beforeShow')
        this.$emit('before-show')
      }
    },
    $_onPopupTransitionEnd() {
      /* istanbul ignore next */
      if (!this.isAnimation) {
        return
      }

      /* istanbul ignore next */
      if (!this.isPopupBoxShow) {
        // popup hide after popup box finish animation
        this.isPopupShow = false
        this.$emit('hide')
      } else {
        this.$emit('show')
      }

      /* istanbul ignore next */
      this.isAnimation = false
    },
    $_onPopupMaskClick() {
      if (this.maskClosable) {
        this.$_hidePopupBox()
        this.$emit('maskClick')
      }
    },
  },
}

</script>

<style lang="stylus">
.n22-popup
  absolute-pos()
  position fixed
  display flex
  pointer-events none
  z-index popup-zindex

  &.center
    align-items center
    justify-content center

  &.top
    flex-direction column
    justify-content flex-start
    .n22-popup-box
      width 100%

  &.bottom
    flex-direction column
    justify-content flex-end
    .n22-popup-box
      width 100%

  &.left
    justify-content flex-start
    .n22-popup-box
      height 100%

  &.right
    justify-content flex-end
    .n22-popup-box
      height 100%

  &.inner-popup .n22-popup-box
    background-color color-bg-inverse
    border-radius popup-title-bar-radius popup-title-bar-radius 0 0

.n22-popup-mask
  absolute-pos()
  position absolute
  pointer-events auto
  z-index 1
  background-color popup-mask-bg

.n22-popup-box
  position relative
  pointer-events auto
  z-index 2
  max-width 100%
  max-height 100%
  overflow auto

.n22-mask-fade
  &-enter, &-leave-to
    opacity 0.01
  &-enter-active, &-leave-active
    transition opacity 250ms
</style>
