<template>
  <div class="n22-example-child n22-example-child-input-item-4">
    <n22-field>
      <n22-input-item
        ref="input9"
        title="清空按钮"
        placeholder="normal text"
        clearable
      ></n22-input-item>

      <n22-input-item
        ref="input10"
        title="金融键盘"
        placeholder="financial number keyboard"
        is-virtual-keyboard
        clearable
        @focus="onFakeInputFocus"
        @blur="onFakeInputBlur"
      ></n22-input-item>

      <n22-input-item
        ref="input11"
        title="自定义键盘"
        placeholder="custom number keyboard"
        is-virtual-keyboard
        virtual-keyboard-vm="myNumberKeyBoard"
        clearable
      ></n22-input-item>
      <n22-number-keyboard type="simple" ref="myNumberKeyBoard"></n22-number-keyboard>

      <n22-input-item
        ref="input11"
        placeholder="left/right slots"
      >
        <n22-icon name="bank-zs" slot="left" svg></n22-icon>
        <n22-icon name="info" slot="right" @click.native="onClick"></n22-icon>
      </n22-input-item>
    </n22-field>
  </div>
</template>

<script>
import {InputItem, NumberKeyboard, Field, Icon, Toast} from 'al-mobile'
import '@examples/assets/images/bank-zs.svg'

export default {
  name: 'input-item-demo',
  /* DELETE */
  title: '表单控件',
  titleEnUS: 'Input with controls',
  message: '请在移动设备中扫码预览',
  messageEnUS: 'Please scan QR code and preview on mobile device',
  /* DELETE */
  components: {
    [InputItem.name]: InputItem,
    [NumberKeyboard.name]: NumberKeyboard,
    [Field.name]: Field,
    [Icon.name]: Icon,
  },
  methods: {
    onClick() {
      Toast({
        content: 'some information',
        icon: 'warn',
      })
    },
    onFakeInputFocus() {
      // function getElementPosition(element) {
      //   const defaultRect = {top: 0, left: 0}
      //   const rect = element
      //     ? (element.getBoundingClientRect && element.getBoundingClientRect()) || defaultRect
      //     : defaultRect
      //   const ret = {
      //     top: rect.top,
      //     left: rect.left,
      //   }
      //   return ret
      // }
      // setTimeout(() => {
      //   const wrapper = this.$el
      //   const inputer = this.$refs['input10']
      //   const inputEl = inputer.$el
      //   const keyboardEl = document
      //     .querySelector(`#${inputer.name}-number-keyboard`)
      //     .querySelector('.n22-number-keyboard-container')
      //   const offset =
      //     keyboardEl.clientHeight +
      //     inputEl.clientHeight -
      //     document.documentElement.clientHeight +
      //     getElementPosition(inputEl).top +
      //     30
      //   const oldPaddingBottom = +wrapper.style.paddingBottom.replace(/px|rem|em/gi, '')
      //   const oldScrollTop = document.body.scrollTop
      //   const newPaddingBottom = oldPaddingBottom + offset
      //   const newScrollTop = oldScrollTop + offset
      //   wrapper.style.paddingBottom = `${newPaddingBottom}px`
      //   document.body.scrollTop = newScrollTop
      //   this.scrollInputBack = () => {
      //     wrapper.style.paddingBottom = `${oldPaddingBottom}px`
      //     document.body.scrollTop = oldScrollTop
      //     this.scrollInputBack = null
      //   }
      // }, 300)
    },
    onFakeInputBlur() {
      this.scrollInputBack && this.scrollInputBack()
    },
  },
}

</script>

<style lang="stylus">
.n22-example-child-input-item-2
  .n22-number-keyboard .n22-popup-box
    max-width 720px
</style>
