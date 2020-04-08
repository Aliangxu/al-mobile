<template>
  <n22-field-item
    ref="n22input"
    class="n22-input-item"
    :class="[
      isHighlight ? 'is-highlight' : '',
      isTitleLatent ? 'is-title-latent' : '',
      isInputActive ? 'is-active' : '',
      isInputFocus ? 'is-focus' : '',
      isInputError() || isInputOnlyErrorLine() ? 'is-error' : '',
      isInputBrief() && !isInputError() ? 'with-brief' : '',
      isDisabled ? 'is-disabled' : '',
      isAmount ? 'is-amount' : '',
      clearable ? 'is-clear' : '',
      align,
      size
    ]"
    v-on="$listeners"
    v-bind="$attrs"
    :is-show-required="
      isShowRequired ||
      (vvalidateModal && vvalidateModal.indexOf('required') > -1)
        ? true
        : false
    "
    :title="title"
    :solid="solid && !isTitleLatent"
  >
    <template slot="left">
      <slot name="left"></slot>
    </template>
    <!-- ------------ -->
    <!--    INPUT     -->
    <!-- ------------ -->
    <!-- Native Input -->
    <template v-if="!isVirtualKeyboard">
      <input
        v-if="!vvalidateModal"
        class="n22-input-item-input"
        :type="inputType"
        :name="name"
        v-model="inputBindValue"
        :placeholder="inputPlaceholder"
        :disabled="isDisabled"
        :readonly="readonly"
        :maxlength="isFormative ? '' : maxlength"
        autocomplete="off"
        :data-vv-as="dataVvAs"
        @focus="$_onFocus"
        @blur="$_onBlur"
        @keyup="$_onKeyup"
        @keydown="$_onKeydown"
        @input="$_onInput"
      />
      <input
        v-else
        class="n22-input-item-input"
        :type="inputType"
        :name="name"
        v-model="inputBindValue"
        :placeholder="inputPlaceholder"
        :disabled="isDisabled"
        :readonly="readonly"
        :maxlength="isFormative ? '' : maxlength"
        autocomplete="off"
        v-validate="vvalidateModal"
        :data-vv-as="dataVvAs"
        @focus="$_onFocus"
        @blur="$_onBlur"
        @keyup="$_onKeyup"
        @keydown="$_onKeydown"
        @input="$_onInput"
      />
    </template>
    <!-- Fake Input -->
    <template v-else>
      <div
        class="n22-input-item-fake"
        :class="{
          'is-focus': isInputFocus,
          disabled: isDisabled,
          readonly: readonly
        }"
        @click="$_onFakeInputClick"
      >
        <span v-text="inputValue"></span>
        <span
          class="n22-input-item-fake-placeholder"
          v-if="inputValue === '' && inputPlaceholder !== ''"
          v-text="inputPlaceholder"
        ></span>
      </div>
    </template>

    <template slot="right">
      <!-- ------------ -->
      <!--  CLEART BTN  -->
      <!-- ------------ -->
      <div
        class="n22-input-item-clear"
        v-if="clearable && !isDisabled && !readonly"
        v-show="!isInputEmpty && isInputFocus"
        @click="$_clearInput"
      >
        <n22-icon name="clear"></n22-icon>
      </div>

      <!-- ------------ -->
      <!--  RIGHT SLOT  -->
      <!-- ------------ -->
      <slot name="right"></slot>
    </template>

    <template slot="children">
      <!-- -------------------- -->
      <!-- BRIEF/ERROR TIP -->
      <!-- -------------------- -->
      <div v-if="isInputError()" class="n22-input-item-msg">
        <p v-if="error !== ''" v-text="error"></p>
        <p
          v-else-if="errors && errors.first(name) !== ''"
          v-text="errors && errors.first(name)"
        ></p>
        <slot name="error" v-else></slot>
      </div>
      <div
        v-if="isInputBrief() && !isInputError()"
        class="n22-input-item-brief"
      >
        <p v-if="brief !== ''" v-text="brief"></p>
        <slot name="brief" v-else></slot>
      </div>
      <!-- ------------ -->
      <!--   KEYBORARD  -->
      <!-- ------------ -->
      <n22-number-keyboard
        v-if="isVirtualKeyboard && !virtualKeyboardVm"
        ref="number-keyboard"
        :id="`${name}-number-keyboard`"
        class="n22-input-item-number-keyboard"
        :ok-text="virtualKeyboardOkText"
        :disorder="virtualKeyboardDisorder"
      ></n22-number-keyboard>
    </template>
  </n22-field-item>
</template>

<script>
import Icon from '../icon'
import FieldItem from '../field-item'
import NumberKeyboard from '../number-keyboard'
import { getCursorsPosition, setCursorsPosition } from './cursor'
import { noop, randomId } from '../_util'
import {
  formatValueByGapRule,
  formatValueByGapStep,
  trimValue
} from '../_util/formate-value'

export default {
  name: 'n22-input-item',

  components: {
    [Icon.name]: Icon,
    [FieldItem.name]: FieldItem,
    [NumberKeyboard.name]: NumberKeyboard
  },

  inject: {
    rootField: {
      from: 'rootField',
      default: () => ({})
    }
  },

  provide () {
    return {
      $validatora: this.$validator
    }
  },

  props: {
    type: {
      // text, bankCard, password, phone,gatPhone, money, digit
      type: String,
      default: 'text'
    },
    name: {
      type: [String, Number],
      default () {
        return randomId('input-item')
      }
    },
    title: {
      type: String,
      default: ''
    },
    isShowRequired: {
      type: Boolean,
      default: false
    },
    brief: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [String, Number],
      default: ''
    },
    size: {
      // large, normal
      type: String,
      default: 'normal'
    },
    align: {
      // left, center, right
      type: String,
      default: 'left'
    },
    error: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    solid: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    isVirtualKeyboard: {
      type: Boolean,
      default: false
    },
    virtualKeyboardDisorder: {
      type: Boolean
    },
    virtualKeyboardOkText: {
      type: String
    },
    virtualKeyboardVm: {
      type: [Object, String],
      default: null
    },
    isTitleLatent: {
      type: Boolean,
      default: false
    },
    isFormative: {
      type: Boolean,
      default () {
        const type = this.type
        return (
          type === 'bankCard' ||
          type === 'phone' ||
          type === 'gatPhone' ||
          type === 'money' ||
          type === 'digit' ||
          type === 'realNum'
        )
      }
    },
    isHighlight: {
      type: Boolean,
      default: false
    },
    isAmount: {
      type: Boolean,
      default: false
    },
    formation: {
      type: Function,
      default: noop
    },

    // 2019-03-18新增
    isToNumber: {
      type: Boolean,
      default: false
    },
    vvalidateModal: {
      type: String,
      default: ''
    },
    dataVvAs: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: () => {
        return 'defaultid'
      }
    },

    // 2019-05-09新增
    defaultValue: [String, Number],
    itemObject: {
      type: [String, Array, Object, Number],
      default: () => {
        return {
          name: '',
          code: '',
          type: ''
        }
      }
    }, // 该v-modal字段属性对象
    // 2019-09-05新增input是否开启数值更改触发validatorCallBack 默认不开启
    isValidatorCallBack: {
      type: Boolean,
      default: false
    },
    isValidator: {
      type: Boolean,
      default: true
    },
    isOnlyErrorLine: {
      type: Boolean,
      default: false
    },

    precision: {
      type: Number,
      default: 2
    }
  },

  data () {
    return {
      inputValue: '',
      inputBindValue: '',
      inputNumberKeyboard: '',
      isInputFocus: false
    }
  },

  computed: {
    inputType () {
      let inputType = this.type || 'text'
      if (
        inputType === 'bankCard' ||
        inputType === 'phone' ||
        inputType === 'gatPhone' ||
        inputType === 'digit'
      ) {
        inputType = 'tel'
      } else if (inputType === 'money') {
        inputType = 'text'
      }
      return inputType
    },
    inputMaxLength () {
      if (this.type === 'phone') {
        return 11
      } else if (this.type === 'gatPhone') {
        return 13
      } else {
        return this.maxlength
      }
    },
    inputPlaceholder () {
      return this.isTitleLatent && this.isInputActive ? '' : this.placeholder
    },
    isInputActive () {
      return !this.isInputEmpty || this.isInputFocus
    },
    isInputEmpty () {
      return !this.inputValue.length
    },
    isDisabled () {
      return this.rootField.disabled || this.disabled
    },
    getIsValidator () {
      return this.rootField.isValidator
        ? this.isValidator
        : this.rootField.isValidator
    },
    getIsOnlyErrorLine () {
      return this.rootField.isOnlyErrorLine || this.isOnlyErrorLine
    }
  },

  watch: {
    value (val, oldVal) {
      // Filter out two-way binding
      !val && !oldVal && this.$emit('input', this.defaultValue)
      if (val !== this.$_trimValue(this.inputValue)) {
        this.inputValue = this.$_formateValue(this.$_subValue(val + '')).value
      }
    },
    inputValue (val, oldval) {
      val &&
        val !== oldval &&
        this.isValidatorCallBack &&
        this.onvalidateAll(val, oldval)
      this.inputBindValue = val
      val = this.isFormative ? this.$_trimValue(val) : val
      if (val !== this.value) {
        this.$emit('input', this.isToNumber ? Number(val) : val)
        if (!this.itemObject.name) {
          this.itemObject.name = this.name
        }
        this.$emit(
          'change',
          this.itemObject,
          val,
          oldval,
          false,
          this.defaultValue
        )
      }
    },
    isInputFocus (val) {
      if (!this.isVirtualKeyboard || !this.inputNumberKeyboard) {
        return
      }
      if (val) {
        this.inputNumberKeyboard.show()
        this.$emit('focus', this.name)
      } else {
        this.inputNumberKeyboard.hide()
        this.$emit('blur', this.name)
      }
    }
  },
  created () {
    //  console.log('%c this.value','color:green;',this.value);
    this.inputValue = this.$_formateValue(
      this.$_subValue(this.value + '')
    ).value
  },
  mounted () {
    !this.value && this.defaultValue && this.$emit('input', this.defaultValue)
    this.value && (this.inputBindValue = this.value)
    this.isVirtualKeyboard &&
      this.$nextTick(() => {
        this.$_initNumberKeyBoard()
      })
  },
  beforeDestroy () {
    const keyboard = this.inputNumberKeyboard
    if (keyboard && keyboard.$el) {
      document.body.removeChild(keyboard.$el)
    }
  },

  methods: {
    // validator callback
    onvalidateAll (newval, oldval) {
      const _this = this
      if (this.$validator) {
        this.$validator.validateAll().then(result => {
          console.log('%c n22-input-item-result', 'color:green;', result)
          if (result) {
            _this.$emit(
              'validatorCallBackFun',
              result,
              newval,
              oldval,
              this.itemObject
            )
          }
        })
      }
    },

    // MARK: private methods
    $_formateValue (curValue, curPos = 0) {
      const type = this.type
      const name = this.name
      const oldValue = this.inputValue
      const isAdd = oldValue.length > curValue.length ? -1 : 1

      let formateValue = { value: curValue, range: curPos }

      // no format
      if (!this.isFormative || curValue === '') {
        return formateValue
      }

      // custom format by user
      const customValue = this.formation(name, curValue, curPos)

      if (customValue) {
        return customValue
      }

      // default format by component
      let gap = ' '
      switch (type) {
        case 'bankCard':
          curValue = this.$_subValue(trimValue(curValue.replace(/\D/g, '')))
          formateValue = formatValueByGapStep(
            4,
            curValue,
            gap,
            'left',
            curPos,
            isAdd,
            oldValue
          )
          break
        case 'phone':
          curValue = this.$_subValue(trimValue(curValue.replace(/\D/g, '')))
          formateValue = formatValueByGapRule(
            '3|4|4',
            curValue,
            gap,
            curPos,
            isAdd
          )
          break
        case 'money':
          gap = ','
          curValue = this.$_subValue(trimValue(curValue.replace(/[^\d.]/g, '')))
          this.isDisabled &&
            (curValue = this.doPrecision(curValue, this.precision))
          // curValue = curValue.replace(/\D/g, '')
          const dotPos = curValue.indexOf('.')
          // format if no dot or new add dot or insert befor dot
          const moneyCurValue1 = curValue.split('.')[0]
          const moneyCurValue2 = curValue.split('.')[1]
          let moneyCurDecimal = ~dotPos
            ? `.${
                moneyCurValue2 && moneyCurValue2.length > this.precision
                  ? moneyCurValue2.slice(0, this.precision)
                  : moneyCurValue2
              }`
            : ''
          formateValue = formatValueByGapStep(
            3,
            trimValue(moneyCurValue1, gap),
            gap,
            'right',
            curPos,
            isAdd,
            oldValue.split('.')[0]
          )
          //  console.log('%c formateValue.value + moneyCurDecimal','color:green;',moneyCurDecimal);
          //  console.log('%c formateValue.value + moneyCurDecimal','color:green;',formateValue.value);
          formateValue.value += moneyCurDecimal
          break
        case 'digit':
          curValue = this.$_subValue(trimValue(curValue.replace(/\D/g, '')))
          formateValue.value = curValue
          break
        case 'realNum':
          curValue = this.$_subValue(trimValue(curValue.replace(/[^\d.]/g, '')))
          const dotPosNum = curValue.indexOf('.')
          const numCurValue1 = curValue.split('.')[0]
          const numCurValue2 = curValue.split('.')[1]
          curValue = ~dotPosNum
            ? `${numCurValue1}.${
                numCurValue2 && numCurValue2.length > this.precision
                  ? numCurValue2.slice(0, this.precision)
                  : numCurValue2
              }`
            : curValue
          // console.log(
          //   '%c formateValue.value + moneyCurDecimal',
          //   'color:green;',
          //   curValue
          // )
          formateValue.value = curValue
          break
        /* istanbul ignore next */
        default:
          break
      }

      return formateValue
    },
    doPrecision (value, precision, isRoundUp) {
      const exponentialForm = Number(`${value}e${precision}`)
      const rounded = isRoundUp
        ? Math.round(exponentialForm)
        : Math.floor(exponentialForm)
      return Number(`${rounded}e-${precision}`).toFixed(precision)
    },
    isInputError () {
      // console.log('%c xxxxxxxxxxxxxxxxxxxxxxxerror','color:green;',this.errors.first(this.name));
      return (
        this.$slots.error ||
        this.error !== '' ||
        (this.getIsValidator &&
          this.vvalidateModal &&
          this.name &&
          this.errors && this.errors.first(this.name))
      )
    },
    isInputOnlyErrorLine () {
      return (
        this.$slots.error ||
        this.error !== '' ||
        (this.getIsOnlyErrorLine &&
          this.vvalidateModal &&
          this.name &&
          this.errors && this.errors.first(this.name))
      )
    },
    isInputBrief () {
      return this.$slots.brief || this.brief !== ''
    },
    $_trimValue (val) {
      return trimValue(val, '\\s|,')
    },
    $_subValue (val) {
      const len = this.inputMaxLength
      if (len !== '') {
        return val.substring(0, len)
      } else {
        return val
      }
    },
    $_clearInput () {
      this.inputValue = ''
      !this.isTitleLatent && this.focus()
    },
    $_focusFakeInput () {
      this.isInputFocus = true

      setTimeout(() => {
        this.$_addBlurListener()
      }, 0)
    },
    $_blurFakeInput () {
      this.isInputFocus = false
      this.$_removeBlurListener()
    },
    $_addBlurListener () {
      document.addEventListener('click', this.$_blurFakeInput, false)
    },
    $_removeBlurListener () {
      document.removeEventListener('click', this.$_blurFakeInput, false)
    },
    $_initNumberKeyBoard () {
      let keyboard =
        (typeof this.virtualKeyboardVm === 'object'
          ? this.virtualKeyboardVm
          : this.$vnode.context.$refs[this.virtualKeyboardVm]) ||
        this.$refs['number-keyboard']

      if (Array.isArray(keyboard)) {
        keyboard = keyboard[0]
      }

      keyboard.$on('enter', this.$_onNumberKeyBoardEnter)
      keyboard.$on('delete', this.$_onNumberKeyBoardDelete)
      keyboard.$on('confirm', this.$_onNumberKeyBoardConfirm)
      this.inputNumberKeyboard = keyboard
      document.body.appendChild(keyboard.$el)
    },

    // MARK: events handler
    $_onInput (event) {
      const formateValue = this.$_formateValue(
        event.target.value,
        this.isFormative ? getCursorsPosition(event.target) : 0
      )

      this.inputValue = formateValue.value
      this.inputBindValue = formateValue.value

      if (this.isFormative) {
        this.$nextTick(() => {
          setCursorsPosition(event.target, formateValue.range)
        })
      }
    },
    $_onKeyup (event) {
      this.$emit('keyup', this.name, event)
      if (+event.keyCode === 13 || +event.keyCode === 108) {
        this.$emit('confirm', this.name, this.inputValue)
      }
    },
    $_onKeydown (event) {
      this.$emit('keydown', this.name, event)
    },
    $_onFocus () {
      this.isInputFocus = true
      this.$emit('focus', this.name)
    },
    $_onBlur () {
      // 解决微信浏览器bug-微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位
      // if (!window.cordova) {
      //   setTimeout(function() {
      //     window.scrollTo(0, ui.clientHeight);
      //   }, 100);
      // }
      setTimeout(() => {
        this.isInputFocus = false
        this.$emit('blur', this.name)
      }, 100)
    },
    $_onFakeInputClick (event) {
      if (this.isDisabled || this.readonly) {
        return
      }

      this.$_blurFakeInput()

      if (!this.isInputFocus) {
        this.$_focusFakeInput(event)
      }
    },
    $_onNumberKeyBoardEnter (val) {
      if (
        this.inputMaxLength > 0 &&
        this.$_trimValue(this.inputValue).length >= this.inputMaxLength
      ) {
        return
      }
      this.inputValue = this.$_formateValue(this.inputValue + val).value
    },
    $_onNumberKeyBoardDelete () {
      const inputValue = this.inputValue
      if (inputValue === '') {
        return
      }
      this.inputValue = this.$_formateValue(
        inputValue.substring(0, inputValue.length - 1)
      ).value
    },
    $_onNumberKeyBoardConfirm () {
      this.$emit('confirm', this.name, this.inputValue)
    },

    // MARK: public methods
    focus () {
      if (this.isVirtualKeyboard) {
        this.$_onFakeInputClick()
      } else {
        this.$el.querySelector('.n22-input-item-input').focus()
        setTimeout(() => {
          this.isInputFocus = true
        }, 200)
      }
    },
    blur () {
      if (this.isVirtualKeyboard) {
        this.$_blurFakeInput()
      } else {
        this.$el.querySelector('.n22-input-item-input').blur()
        this.isInputFocus = false
      }
    },
    getValue () {
      return this.inputValue
    }
  }
}
</script>

<style lang="stylus">
.svg_icon
  height 16px
  width 16px
  color: #4091FB
.n22-input-item
  .n22-field-item-content
    padding-top 0
    padding-bottom 0
  .n22-field-item-control
    display flex
    align-items center

.n22-input-item-clear
  padding 10px 0
  color input-item-icon
  .n22-icon
    display flex
    background color-bg-base
    border-radius radius-circle

.n22-input-item-input,
.n22-input-item-fake
  // display flex
  width 100%
  height input-item-height
  color input-item-color
  font-size input-item-font-size
  font-weight input-item-font-weight
  font-family font-family-normal
  line-height 1
  -webkit-appearance none
  border none
  background transparent
  outline none
  box-sizing border-box
  -webkit-tap-highlight-color transparent
  appearance none

.n22-input-item-input
  &:disabled, &[disabled]
    opacity 1
  &::-webkit-input-placeholder
    color input-item-placeholder
    font-weight font-weight-normal
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
    -webkit-appearance none

.n22-input-item-fake
  line-height input-item-height
  word-ellipsis()
  cursor text
  &::after
    position relative
    z-index 2
    display none
    content " "
    height input-item-font-size
    border-right solid 1.5px color-text-base
    animation keyboard-cursor infinite 1s step-start
  &.is-focus:after
    display inline

.n22-input-item-fake-placeholder
  position absolute
  top 0
  left 0
  width 100%
  color input-item-placeholder
  font-weight font-weight-normal

.n22-input-item-msg,
.n22-input-item-brief
  word-break()
  &:not(:last-child)
    margin-bottom 10px

.n22-input-item-brief
  font-size input-item-font-size-brief
  color input-item-color-brief

.n22-input-item-msg
  font-size input-item-font-size-error
  color input-item-color-error

.n22-input-item
  &.left
    .n22-input-item-input,
    .n22-input-item-fake
      text-align left

  &.center
    .n22-input-item-input,
    .n22-input-item-fake
      text-align center

  &.right
    .n22-input-item-input,
    .n22-input-item-fake
      text-align right

  &.is-title-latent
    .n22-field-item-title
      position absolute
      top 50%
      left 0
      height auto
      font-size input-item-title-latent-font-size
      color input-item-title-latent-color
      transform translate3d(0, -50%, 0)
      transition all .3s ease
      opacity 0
      will-change auto
    .n22-field-item-content
      min-height 57.5px
      color:red
    .n22-field-item-content,
    .n22-field-item-left,
    .n22-field-item-right,
    .n22-input-item-input,
    .n22-input-item-fake
      padding-top 10px
    &.is-active
      .n22-field-item-title
        opacity 1
        top 20px
        transform translate3d(0, 0, 0)

  &.is-highlight
    &.is-focus
      .n22-field-item-content
        hairline(bottom, input-item-color-highlight, 0, 4px)

  &.is-disabled
    .n22-input-item-input,
    .n22-input-item-fake,
    .n22-input-item-fake-placeholder
      -webkit-text-fill-color input-item-color-disabled
      color input-item-color-disabled

  &.is-amount
    .n22-input-item-input,
    .n22-input-item-fake
      // padding-top 5px
      font-family font-family-number
    &.large
      .n22-input-item-input,
      .n22-input-item-fake
        padding-top v-gap-xs

  &.large
    .n22-input-item-input,
    .n22-input-item-fake
      padding-bottom 15px
      font-size input-item-font-size-large
    .n22-input-item-input::-webkit-input-placeholder
        font-size 30px
        line-height 50px

  &.is-error
    .n22-field-item-content
      hairline(bottom, input-item-color-error, 0, 4px)

  &.is-ios
    .n22-input-item-input::-webkit-input-placeholder
      position relative
      top 3px
      overflow visible
    .n22-input-item-fake::after
      border-right solid 6px #2C6CF5
      border-radius 2px
  &.is-android
    .n22-input-item-fake::after
      border-right solid 4px color-text-base

@-webkit-keyframes keyboard-cursor
  0%
    opacity 1
  50%
    opacity 0
  to
    opacity 1
@keyframes keyboard-cursor
  0%
    opacity 1
  50%
    opacity 0
  to
    opacity 1
</style>
