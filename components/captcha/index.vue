<template>
  <div class="n22-captcha" v-show="isView || value || visible">
    <template v-if="isView">
      <div class="n22-captcha-content">
        <h2 class="n22-captcha-title" v-if="title" v-text="title"></h2>
        <div class="n22-captcha-message">
          <slot></slot>
        </div>
      </div>
      <n22-codebox
        ref="codebox"
        v-model="code"
        :maxlength="maxlength"
        :system="system"
        :mask="mask"
        @submit="$_onSubmit"
        :closable="false"
        :isView="true"
        :justify="true"
        :autofocus="false"
      >
        <footer class="n22-captcha-footer">
          <div class="n22-captcha-error" v-if="errorMsg" v-text="errorMsg"></div>
          <div class="n22-captcha-brief" v-else v-text="brief"></div>
          <button
            class="n22-captcha-btn"
            v-if="count"
            v-text="countBtnText"
            :disabled="this.isCounting"
            @click="$_onResend"
          ></button>
        </footer>
      </n22-codebox>
    </template>
    <template v-else>
      <n22-dialog
        :value="value"
        :closable="true"
        :appendTo="false"
        position="center"
        @input="$_onInput"
        @show="$_onShow"
        @hide="$_onHide"
      >
        <div class="n22-captcha-content">
          <h2 class="n22-captcha-title" v-if="title" v-text="title"></h2>
          <div class="n22-captcha-message">
            <slot></slot>
          </div>
        </div>
        <n22-codebox
          ref="codebox"
          v-model="code"
          :maxlength="maxlength"
          :system="system"
          :closable="false"
          :mask="mask"
          :justify="true"
          :autofocus="false"
          @submit="$_onSubmit"
        >
          <footer class="n22-captcha-footer">
            <div class="n22-captcha-error" v-if="errorMsg" v-text="errorMsg"></div>
            <div class="n22-captcha-brief" v-else v-text="brief"></div>
            <button
              class="n22-captcha-btn"
              v-if="count"
              v-text="countBtnText"
              :disabled="this.isCounting"
              @click="$_onResend"
            ></button>
          </footer>
        </n22-codebox>
      </n22-dialog>
    </template>
  </div>
</template>

<script>
import Dialog from '../dialog'
import Codebox from '../codebox'
import Button from '../button'
// import { Codebox } from 'mand-mobile'
import {mdDocument} from '../_util'

export default {
  name: 'n22-captcha',

  components: {
    [Dialog.name]: Dialog,
    [Codebox.name]: Codebox,
    [Button.name]: Button,
  },

  props: {
    title: {
      type: String,
    },
    brief: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: [Number, String],
      default: 4,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    system: {
      type: Boolean,
      default: false,
    },
    autoCountdown: {
      type: Boolean,
      default: true,
    },
    appendTo: {
      default: () => mdDocument.body,
    },
    count: {
      type: Number,
      default: 60,
    },
    countNormalText: {
      type: String,
      default: '发送验证码',
    },
    countActiveText: {
      type: String,
      default: '{$1}秒后重发',
    },
    isView: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      code: '',
      visible: false,
      errorMsg: '',
      isCounting: false,
      firstShown: false,
      countBtnText: this.countNormalText,
    }
  },

  watch: {
    value(val) {
      if (val) {
        this.code = ''
        if (!this.firstShown) {
          this.firstShown = true
          this.$_onResend()
        }
      }
    },
    code(val) {
      if (val && this.errorMsg) {
        this.errorMsg = ''
      }
    },
  },

  mounted() {
    if (this.appendTo && !this.isView) {
      this.appendTo.appendChild(this.$el)
    }
    if (this.value || this.isView) {
      this.firstShown = true
      this.$_onResend()
    }
  },

  beforeDestroy() {
    if (this.appendTo && !this.isView) {
      this.appendTo.removeChild(this.$el)
    }
  },

  methods: {
    // MARK: events handler, 如 $_onButtonClick
    $_onInput(val) {
      this.$emit('input', val)
    },
    $_onShow() {
      this.visible = true
      this.$refs.codebox.focus()
      this.$emit('show')
    },
    $_onHide() {
      this.visible = false
      this.$refs.codebox.blur()
      this.$emit('hide')
    },
    $_onSubmit(code) {
      this.$emit('submit', code)
    },
    $_onResend() {
      if (this.autoCountdown) {
        this.countdown()
      }
      this.$emit('send', this.countdown)
    },
    // MARK: public methods
    countdown() {
      if (!this.count) {
        return
      }
      clearInterval(this.__counter__)
      const timestamp = Date.now()
      let i = this.count
      this.isCounting = true
      this.countBtnText = this.countActiveText.replace('{$1}', i)
      /* istanbul ignore next */
      this.__counter__ = setInterval(() => {
        if (i <= 1) {
          this.resetcount()
        } else {
          i = this.count - Math.floor((Date.now() - timestamp) / 1000)
          this.countBtnText = this.countActiveText.replace('{$1}', i)
        }
      }, 1000)
    },
    resetcount() {
      this.isCounting = false
      this.countBtnText = this.countNormalText
      clearInterval(this.__counter__)
    },
    setError(msg) {
      this.$nextTick(() => {
        this.errorMsg = msg
        // this.code = ''
      })
    },
  },
}

</script>

<style lang="stylus">
.n22-captcha
  .n22-dialog
    .n22-popup
      z-index captcha-zindex
      position: fixed;
    .n22-dialog-body
      padding 30px 30px 15px 30px
    .n22-dialog-content
      margin-bottom number-keyboard-height
  .n22-codebox
    margin-bottom 28px

.n22-captcha-content
  font-size captcha-font-size
  color captcha-color
  text-align center
  line-height 1.2
  margin-bottom 50px

.n22-captcha-title
  color captcha-title-color
  font-size captcha-title-font-size
  font-weight normal
  line-height 1.15
  margin 0 0 16px 0

.n22-captcha-footer
  margin 28px 0
  display flex
  font-size captcha-footer-font-size
  justify-content space-between
  align-items center
  overflow hidden

.n22-captcha-error, .n22-captcha-brief
  flex 1 1 0%
.n22-captcha-error
  color captcha-error-color
.n22-captcha-brief
  color captcha-brief-color

.n22-captcha-btn
  display inline-block
  color captcha-btn-color
  font-size captcha-footer-font-size
  padding 0
  margin 0 0 0 12px
  border 0
  border-radius 0
  background none
  &:disabled
    color color-text-disabled
</style>
