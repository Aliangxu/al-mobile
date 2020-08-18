<template>
  <div class="n22-toast" :class="[position]">
    <n22-popup
      :value="visible"
      @show="$_onShow"
      @hide="$_onHide"
      :hasMask="hasMask"
      :maskClosable="false"
      :style="{ top: isAutoTop ? getTop : '' }"
    >
      <div class="n22-toast-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="n22-toast-content" v-else>
        <n22-icon v-if="icon" :name="icon" size="llg" :svg="iconSvg" :img="iconImg"/>

        <!-- <div v-if="icon" class="svg_class">
          <svg-icon :icon-class="icon"></svg-icon>
        </div> -->
        <!-- <template v-if="content">
          {{maxTextNum}}
          <div
            :class="content.length < maxTextNum ? '' : 'n22-toast-text'"
            v-if="content && content.match(/#(\S*)#/) === null"
            v-text="content"
          ></div>
          <div :class="content.length < maxTextNum ? '' : 'n22-toast-text'" v-else>
            <span v-html="getContent(content)"></span>
          </div>
        </template> -->
        <toast-content
          v-if="content"
          :class="content.length < maxTextNum ? '' : 'n22-toast-text'"
          :maxTextNum="maxTextNum"
          v-model="content"
          :isHaveNum="isHaveNum"
        ></toast-content>
      </div>
    </n22-popup>
  </div>
</template>

<script>
import {ui} from '../_util'
import Popup from '../popup'
import Icon from '../icon'
import ToastContent from './toast-content.js'

export default {
  name: 'n22-toast',
  computed: {
    // ...mapState(["common"]), //引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
    getTop() {
      return ui.dealPxToVw(ui.allHeadTopPx, true)
    }
  },

  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [ToastContent.name]: ToastContent,
  },

  // computed: {
  //   getContent () {
  //     return content => {
  //       let con = ''
  //       if (content) {
  //         let m = content.match(/#(\S*)#/)
  //         console.log('%c m[1]', 'color:green;', m[1])
  //         m[1].split(',').forEach(val => {
  //           con += `${content.split(m[0])[0]}${val}${
  //             content.split(m[0])[1]
  //           }<br>`
  //         })
  //       } else {
  //         con = content
  //       }
  //       return con
  //     }
  //   }
  // },

  props: {
    maxTextNum: {
      type: Number,
      default: 40,
    },
    isHaveNum: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: '',
    },
    iconImg: {
      type: Boolean,
      default: false,
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
    content: {
      type: [String, Number, Object],
      default: '',
    },
    duration: {
      type: Number,
      default: 0,
    },
    position: {
      // top, left, bottom
      type: String,
      default: 'center',
    },
    hasMask: {
      type: Boolean,
      default: false,
    },
    isAutoTop: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visible: false,
    }
  },

  beforeDestroy() {
    if (this.$_timer) {
      clearTimeout(this.$_timer)
    }
  },

  methods: {
    $_onShow() {
      this.$emit('show')
    },
    $_onHide() {
      this.$emit('hide')
    },
    fire() {
      if (this.$_timer) {
        clearTimeout(this.$_timer)
      }
      if (this.visible && this.duration) {
        this.$_timer = setTimeout(() => {
          this.hide()
        }, this.duration)
      }
    },
    show() {
      this.visible = true
      this.fire()
    },
    hide() {
      this.visible = false
    },
  },
}

</script>

<style lang="stylus">
.n22-toast {
  .n22-popup {
    z-index: toast-zindex;
  }

  .n22-icon {
    flex-shrink: 0;
    color: toast-color;
  }

  .n22-icon + .n22-toast-text {
    margin-left: h-gap-xs;
  }

  .n22-popup {
    .n22-popup-box {
      // width 540px
      // max-width: 90%;
      display: flex;
      justify-content: center;
    }

    .n22-popup-mask {
      background: transparent;
    }
  }

  &.bottom {
    .n22-popup .n22-popup-box {
      position: absolute;
      bottom: 50px;
      // left: 50%;
      // transform: translateX(-50%);
    }
  }

  &.top {
    .n22-popup .n22-popup-box {
      position: absolute;
      top: 50px;
      // left: 50%;
      // transform: translateX(-50%);
    }
  }
}

.n22-toast-content {
  text-align: center;
  // display: inline-flex;
  align-items: center;
  max-width: 300px;
  min-width: 80px;
  padding: toast-padding;
  border-radius: toast-radius;
  font-size: toast-font-size;
  // text-align: left;
  line-height: 1.42857142;
  color: toast-color;
  background-color: toast-fill;
  box-sizing: border-box;
  overflow: hidden;
}

.n22-toast-text {
  text-align justify
  // white-space: nowrap;
  // text-overflow: ellipsis;
  // overflow: hidden;
}

.svg_class {
  height: 16px;
  width: 16px;
  margin-right: 5px;
}
</style>
