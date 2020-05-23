<template>
  <nav class="n22-tab-bar" :style="{ marginTop: getSwiperTop }">
    <div class="n22-tab-bar-inner" ref="wrapper">
      <template v-if="scrollable">
        <div class="n22-tab-bar-start" v-show="maskStartShown"></div>
        <div class="n22-tab-bar-end" v-show="maskEndShown"></div>
      </template>
      <n22-scroll-view
        ref="scroller"
        :scrolling-x="scrollable"
        :scrolling-y="false"
        :key="scrollerTmpKey"
        @scroll="$_onScroll"
      >
        <div class="n22-tab-bar-list" :style="{ width: contentW + 'px' }">
          <a
            class="n22-tab-bar-item"
            :class="{
              'is-active': currentName === (item[valueKey] || index),
              'is-disabled': !!item.disabled
            }"
            v-for="(item, index) in items"
            :key="item[valueKey] || index"
            ref="items"
            @click="$_onClick(item, index)"
          >
            <slot
              name="item"
              :item="item"
              :items="items"
              :index="index"
              :currentName="currentName"
              >{{ item[textKey] }}</slot
            >
          </a>
        </div>
        <span
          class="n22-tab-bar-ink"
          :class="{
            'is-disabled': currentTab && currentTab.disabled
          }"
          v-if="hasInk"
          :style="{
            width: inkWidth + 'px',
            transform: 'translateX(' + inkPos + 'px)'
          }"
        ></span>
      </n22-scroll-view>
    </div>
    <div v-for="(tab, i) in items" :key="i">
      <transition :name="secMenuAnm">
        <slot
          :curIndex="currentName"
          v-if="i === currentName"
          name="secMenu"
        ></slot>
      </transition>
    </div>
  </nav>
</template>

<script>
import ScrollView from '../scroll-view'
import {ui} from '../_util'

export default {
  name: 'n22-tab-bar',

  components: {
    [ScrollView.name]: ScrollView,
  },

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    hasInk: {
      type: Boolean,
      default: true,
    },
    inkLength: {
      type: Number,
      default: 100,
    },
    immediate: {
      type: Boolean,
      default: false,
    },
    isScrollable: {
      type: Boolean,
      default: true,
    },

    swiperTop: {
      // 顶部距离高度
      type: [Number, Array],
      default: () => {
        return []
      },
    },
    secMenuAnm: {
      // 二级菜单动画
      type: String,
      default: '',
    },
    valueKey: {
      // 码表value对应的key--可自定义--默认就是value
      type: String,
      default: 'name',
    },
    textKey: {
      // 码表text对应的key--可自定义--默认就是text
      type: String,
      default: 'label',
    },
  },

  data() {
    return {
      currentName: '',
      wrapperW: 0,
      contentW: 0,
      inkWidth: 0,
      inkPos: 0,
      scrollerTmpKey: Date.now(),
      maskStartShown: false,
      maskEndShown: true,
    }
  },

  computed: {
    getSwiperTop() {
      // 内容区距离顶部距离
      let head = 0
      if (Array.isArray(this.swiperTop)) {
        head = this.swiperTop[this.currentName] || 0
      } else {
        head = this.swiperTop || 0
      }
      console.log('%c ui.allHeadTopPx', 'color:green;', ui.allHeadTopPx)
      return ui.dealPxToVw(head) + 'vw'
    },
    scrollable() {
      return this.isScrollable ? this.contentW > this.wrapperW : this.isScrollable
    },
    currentIndex() {
      for (let i = 0, len = this.items.length; i < len; i++) {
        if (this.items[i][this.valueKey]) {
          if (this.items[i][this.valueKey] === this.currentName) {
            return i
          }
        }else {
          return this.currentName
        }
      }
    },
    currentTab() {
      if (this.currentIndex) {
        return this.items[this.currentIndex]
      }
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (val !== this.currentName) {
          this.currentName = val
        }
      },
    },
    inkWidth() {
      /* istanbul ignore next */
      this.$nextTick(function() {
        this.reflow()
      })
    },
    items() {
      this.$nextTick(function() {
        this.reflow()
      })
    },
    currentIndex() {
      this.$nextTick(function() {
        this.reflow()
      })
    },
    scrollable() {
      this.scrollerTmpKey = Date.now()
    },
  },

  created() {
    if (this.currentName === '' && this.items.length) {
      this.currentName = this.items[0][this.valueKey]
      this.$emit('change', this.items[0], 0, 0)
    }
  },
  mounted() {
    window.addEventListener('resize', this.reflow)
    this.reflow()

    if (this.immediate) {
      this.$nextTick(() => {
        this.$emit('change', this.items[this.currentIndex], this.currentIndex)
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reflow)
  },

  methods: {
    // MARK: private events
    $_onScroll({scrollLeft}) /* istanbul ignore next */ {
      if (scrollLeft > 0) {
        this.maskStartShown = true
      } else {
        this.maskStartShown = false
      }

      if (scrollLeft >= this.$refs.scroller.contentW - this.$refs.scroller.containerW) {
        this.maskEndShown = false
      } else {
        this.maskEndShown = true
      }
    },
    $_onClick(item, index) {
      if (item.disabled) {
        return
      }
      this.$emit('change', item, index, this.currentIndex)
      this.currentName = item[this.valueKey] || index
      this.$emit('input', item[this.valueKey] || index)
    },
    // MARK: public methods
    reflow() {
      if (!this.$refs.items || this.$refs.items.length === 0) {
        return
      }

      this.wrapperW = this.$refs.wrapper.offsetWidth

      let contentWidth = 0
      for (let i = 0, len = this.items.length; i < len; i++) {
        contentWidth += this.$refs.items[i].offsetWidth
      }
      this.contentW = contentWidth
      this.$refs.scroller.reflowScroller()
      this.$nextTick(() => {
        if (!this.$refs.items || !this.$refs.items[this.currentIndex]) {
          return
        }

        const target = this.$refs.items[this.currentIndex]
        this.inkWidth = target.offsetWidth * this.inkLength / 100
        this.inkPos = target.offsetLeft + (target.offsetWidth - this.inkWidth) / 2

        const prevTarget = this.$refs.items[this.currentIndex - 1]
        const nextTarget = this.$refs.items[this.currentIndex + 1]

        if (!prevTarget) {
          this.$refs.scroller.scrollTo(0, 0, true)
          return
        }

        if (!nextTarget) {
          this.$refs.scroller.scrollTo(this.contentW, 0, true)
          return
        }

        const wrapperRect = this.$refs.wrapper.getBoundingClientRect()
        const prevTargetRect = prevTarget.getBoundingClientRect()
        const nextTargetRect = nextTarget.getBoundingClientRect()

        /* istanbul ignore next */
        if (prevTargetRect && prevTargetRect.left < wrapperRect.left) {
          this.$refs.scroller.scrollTo(prevTarget.offsetLeft, 0, true)
        } else if (nextTargetRect && nextTargetRect.right > wrapperRect.right) {
          this.$refs.scroller.scrollTo(nextTarget.offsetLeft + nextTarget.offsetWidth - this.wrapperW, 0, true)
        }
      })
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-tab-bar
  position relative
  padding-left tab-offset
  padding-right tab-offset
  background-color tab-bg
  box-sizing: border-box;

.n22-tab-bar-inner
  position relative
  width 100%
  // line-height 0

.n22-tab-bar-list
  display flex
  justify-content space-between
  min-width 100%

.n22-tab-bar-item
  flex-shrink 0
  position relative
  display inline-flex
  align-items center
  justify-content center
  color tab-text-color
  font-size tab-font-size
  font-weight tab-font-weight
  min-height tab-height
  padding 0 tab-item-gap
  margin 0 auto
  box-sizing border-box
  -webkit-user-select none
  -webkit-tap-highlight-color transparent
  &.is-active
    color tab-active-color !important
  &.is-disabled
    color tab-disabled-color !important

.n22-tab-bar-ink
  position absolute
  bottom 0
  left 0
  display block
  height tab-ink-height
  background-color tab-active-color
  transition all 300ms
  &.is-disabled
    background-color tab-disabled-color

.n22-tab-bar-start,
.n22-tab-bar-end
  position absolute
  top 0
  left 0
  width 14px
  height tab-height
  overflow hidden
  &::after
    content ''
    display block
    position absolute
    left -14px
    top 50%
    width 14px
    if tab-height is a 'unit'
      margin-top 0 - tab-height * 0.4
      height tab-height * 0.8
    else
      margin-top "calc(0 - %s * 0.4)" % tab-height
      height "calc(%s * 0.8)" % tab-height
    border-radius 50%
    box-shadow: -1px 0 12px 0 rgba(0,0,0,0.2)
.n22-tab-bar-end
  left auto
  right 0
  transform rotate(180deg)

.n22-tab-bar
  .n22-scroll-view
    display block
  .scroll-view-container
    min-width 100%
</style>
