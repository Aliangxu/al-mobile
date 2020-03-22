<template>
  <div :class="{ al_head: headBottom }" class="bar">
    <!-- <van-nav-bar
      :title="title"
      :left-text="$t('edit.backBtn')"
      :right-text="$t('edit.goBtn')"
      left-arrow
      :fixed=true
      :z-index=zIndex
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />-->
    <slot>
      <div
        class="n22-nav-bar n22-nav-bar--fixed"
        :class="{ 'n22-hairline--bottom': hairline }"
        :style="style"
      >
        <div
          class="n22-nav-bar__left"
          :style="{
            color: opacityStyle.backgroundColor ? opacityStyle.textColor : ''
          }"
          @click="leftText ? $emit('click-left') : onClickLeft()"
        >
          <slot name="left">
            <!-- <icon
            v-if="leftArrow"
            class="n22-nav-bar__arrow"
            name="arrow-left"
            />-->
            <!-- <i v-if="leftArrow" class="fa fa-angle-left"></i> -->

            <n22-icon
              v-if="leftTextIcon"
              class="back_icon"
              :style="{
                color: opacityStyle.backgroundColor
                  ? opacityStyle.textColor
                  : ''
              }"
              :name="leftTextIcon"
            ></n22-icon>
            <!-- <a> -->
            <span
              v-if="leftText"
              v-text="leftText ? leftText : $t('edit.backBtn')"
              :style="{
                color: opacityStyle.backgroundColor
                  ? opacityStyle.textColor
                  : ''
              }"
              class="n22-nav-bar__text"
            ></span>
            <!-- </a> -->
          </slot>
        </div>
        <div
          :style="{
            color: opacityStyle.backgroundColor ? opacityStyle.textColor : ''
          }"
          class="n22-ellipsis n22-nav-bar__title"
        >
          <slot name="title">
            <span
              v-if="title == 'search_all'"
              class="algolia-autocomplete000"
              slot="msite-title"
              style="position: relative; display: inline-block; direction: ltr;"
            >
              <form action="/">
                <input
                  v-on="listeners"
                  :value="value"
                  v-bind="$attrs"
                  type="search"
                  id="search_query"
                  @focus="
                    searchFocusDefault ? $emit('search-focus') : searchFocus()
                  "
                  :placeholder="placeholder"
                  v-focus="searchAutoFocus"
                  class="search_query search_query_icon"
                  style="position: relative; vertical-align: top;"
                />
              </form>
            </span>
            <span v-else class="al-head-title-c">{{
              title ? title : $route.meta.title
            }}</span>
          </slot>
        </div>
        <div
          class="n22-nav-bar__right"
          :style="{
            color: opacityStyle.backgroundColor ? opacityStyle.textColor : ''
          }"
          @click="$emit('click-right')"
        >
          <slot name="right">
            <n22-icon
              v-if="rightTextIcon"
              class="back_icon"
              :style="{
                color: opacityStyle.backgroundColor
                  ? opacityStyle.textColor
                  : ''
              }"
              :name="rightTextIcon"
            ></n22-icon>
            <span
              :style="{
                color: opacityStyle.backgroundColor
                  ? opacityStyle.textColor
                  : ''
              }"
              v-if="rightText"
              v-text="rightText"
              class="n22-nav-bar__text"
            ></span>
          </slot>
        </div>
        <slot name="head_bottom"></slot>
      </div>
    </slot>
  </div>
</template>

<script>
// import { mapState, mapActions, mapMutations } from "vuex";
import Icon from '../icon'

export default {
  name: 'al-all-head',
  inheritAttrs: false,
  components: {
    [Icon.name]: Icon
  },
  directives: {
    focus: {
      // 接收3个参数el binding vnode
      inserted (el, binding, vnode) {
        console.log('%c binding', 'color:#00CD00', binding)
        console.log('%c vnode', 'color:#00CD00', vnode)
        if (binding.value) {
          el.focus()
        }
      }
    }
  },
  mounted () {},
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    leftTextIcon: {
      type: String,
      default: 'back'
    },
    rightText: String,
    rightTextIcon: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    headBottom: {
      type: Boolean,
      default: true
    },
    hairline: {
      type: Boolean,
      default: false
    },
    opacityStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    searchFocusDefault: {
      type: Boolean,
      default: false
    },
    searchAutoFocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入关键字'
    },
    value: String,
    backUrl: String
  },
  computed: {
    // ...mapState(["common"]),
    listeners () {
      return {
        // ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    style () {
      let z = {
        zIndex: this.zIndex
      }
      // eslint-disable-next-line
      let o3 = $.extend({}, z, this.opacityStyle)
      return o3
    }
  },
  methods: {
    // ...mapActions(["getUserInfo"]),
    // ...mapMutations([
    //   //提交vuex-state更改样例
    //   "SHOWSEARCH"
    // ]),
    // native maxlength not work when type = number
    format (target = this.$refs.input) {
      let { value } = target
      // const { maxlength } = this.$attrs;

      // if (this.type === 'number' && this.isDef(maxlength) && value.length > maxlength) {
      //   value = value.slice(0, maxlength);
      //   target.value = value;
      // }

      return value
    },
    onInput (event) {
      this.$emit('input', this.format(event.target))
    },
    onFocus (event) {
      // this.focused = true;
      this.$emit('focus', event)
      // hack for safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur()
      }
    },
    onBlur (event) {
      // this.focused = false;
      this.$emit('blur', event)
    },
    onKeypress (event) {
      if (this.type === 'number') {
        const { keyCode } = event
        const allowPoint = String(this.value).indexOf('.') === -1
        const isValidKey =
          (keyCode >= 48 && keyCode <= 57) ||
          (keyCode === 46 && allowPoint) ||
          keyCode === 45
        if (!isValidKey) {
          event.preventDefault()
        }
      }
      // trigger blur after click keyboard search button
      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur()
      }
      this.$emit('keypress', event)
    },
    onClickLeft () {
      this.back(this.backUrl)
    },
    searchFocus () {
      // this.SHOWSEARCH(true);
    }
    // onClickRight() {
    //   // Toast('按钮');
    // }
  }
}
</script>

<style lang="stylus">
.al-head-title-c {
//   display:inline-block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.algolia-autocomplete {
  line-height: normal;
  display: inline-block;
  margin-top: $ioshead;
}
// @include placeholderStyle("#search_query", color, #f0f0f0);
// // @include placeholderStyle("#search_query", text-align, center);
// @include placeholderStyle("#search_query", padding-left, 80px);
// @include placeholderStyle("#search_query", font-size, 14px);
// @include placeholderStyle("#search_query", line-height, 30px);
placeholderStyle("#search_query", color, #f0f0f0)
placeholderStyle("#search_query", padding-left, 80px)
placeholderStyle("#search_query", font-size, 14px)
placeholderStyle("#search_query", line-height, 30px)
.search_query {
  width: 286px;
  // margin-top: 8px;
  // margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px 0 30px;
  border: 1px solid #e3e3e3;
  color: #2c3e50;
  outline: none;
  border-radius: 3px;
  font-size: 14px;
  // margin-right: 10px;
  transition: border-color 0.2s ease;
  // @include transition(background 0.2s ease);
  transitionAll(background 0.2s ease);
  // background: #fff url(../../assets/images/home/search.png) 103px 5px no-repeat;
  // background-size: 20px;
  vertical-align: middle !important;
}
.search_query_icon {
  background: #fff url(../_style/images/search.png) 83px 5px no-repeat;
  background-size: 20px;
}
// @include placeholderStyle("#search_query:focus",  padding-left, 3px);
.search_query:focus {
  border-color: #4091fb;
  // background: #fff url(../../assets/images/home/search.png) 5px 5px no-repeat;
  // background-size: 20px;
}
.n22-nav-bar {
  height: headTop;
  position: relative;
  user-select: none;
  text-align: center;
  line-height: 44px;
  background-color: color-primary;
}
.back_icon {
  vertical-align: -8px;
  width: 24px;
  height: 24px;
}
.n22-icon {
  color: black;
  vertical-align: middle;
}

.n22-nav-bar__arrow {
  min-width: 1em;
  font-size: 16px;
}

.n22-nav-bar__text {
  margin-left: -20px;
  padding-left: 25px;
}

.n22-nav-bar--fixed {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
}

.n22-nav-bar--absolute {
  width: 100%;
  position: absolute;
}

.n22-nav-bar__title {
  margin: 16px auto;
  // max-width: 70%;
  font-size: 16px;
  font-weight: 500;
}

.n22-nav-bar__left,
.n22-nav-bar__right {
  bottom: 0;
  font-size: 14px;
  position: absolute;
}

.n22-nav-bar__left {
  left: 10px;
}

.n22-nav-bar__right {
  right: 15px;
}

.n22-nav-bar__text {
  color: black;
  margin: 0 -15px;
  padding: 0 15px;
  display: inline-block;
  vertical-align: middle;
}

.n22-nav-bar__text:active {
  background-color: #20b7fd;
}

.al_head {
  height: headTop;
}
// .van-nav-bar {
//   height: $headTop;
//   background-color: $theme-color;
// }

// .bar /deep/ .van-nav-bar .van-icon {
//   color: black;
// }
// .bar /deep/ .van-nav-bar__text {
//   color: black;
// }
// .bar /deep/ .van-nav-bar__title {
//   margin: 16px auto;
// }
</style>
