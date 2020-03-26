<style lang="stylus" scoped>
.n22-button
  vertical-align middle
  &.theme-primary
    background radio-color-background-uncheck
    border 1px solid radio-color-background-border-uncheck
    border-width 1px
    border-style solid
    &.checked
      background-color radio-color-background-check
      border 1px solid radio-color-background-border-check
      color radio-color-font-check !important
  &.size-xs
    padding 0 10px
    font-size 12px
    height 28px
    line-height 28px
  &.shape-radius
    border-width 1px
    border-style solid
    border-radius 4px


.n22-radio
  box-sizing border-box
  text-align center
  min-width 55px
  height 20px
  line-height 10px
  margin 5px 8px
  font-size 14px
  display inline-block
  position relative
  .switch-prompt
    position absolute
    top -9px
    right -11px
    font-size 12px
    height 18px
    padding 0 4px
    line-height 18px
    border-radius 9px
    background #ff5050
    color #fff
    -webkit-transform scale(.7)
    -ms-transform scale(.7)
    transform scale(.7)

.n22-button,
.n22-button:focus,
.n22-button:hover,
.n22-button:visited
  text-decoration: none
.n22-radio-input
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

.n22-drop-select-input
  display none

.content-margin
  margin-left -10px

.n22-radio-item-input
  &.is-error
    /deep/.n22-field-item-content
      hairline(bottom, input-item-color-error, 0, 4px)
   &.is-disabled
    .checked
      background-color: color-text-disabled !important
      border: 1px solid color-text-disabled
</style>

<template>
  <div class="">
    <!-- <input
      class="n22-drop-select-input"
      :type="type"
      :name="name"
      v-model="value"
      v-validate="vvalidateModal"
      :data-vv-as="dataVvAs"
    > -->
    <n22-field-item
      v-on="$listeners"
      v-bind="$attrs"
      align="left"
      :title="title"
      :is-show-required="
        isShowRequired ||
        (vvalidateModal &&
        vvalidateModal.indexOf('required') > -1)
          ? true
          : false
      "
      :isLinefeed="isLinefeed"
      :isLine="isLine"
      class="n22-radio-item-input"
      :class="[
        isInputError() ? 'is-error' : '',
        isLinefeed ? '' : 'n22_field_item_radio',
        isDisabled ? 'is-disabled' : ''
      ]"
      :solid="solid"
    >
      <div
        :style="{ 'text-align': isLinefeed ? 'left' : btnAlign }"
        :class="[isLinefeed ? 'content-margin' : '']"
      >
        <a
          v-for="(item, i) in options"
          :key="i"
          class="n22-button n22-radio theme-primary size-xs shape-radius"
          :class="dealIsCheck(currentValue, item) ? 'checked' : ''"
        >
          <span>
            <input
              v-if="!vvalidateModal"
              :id="'a' + i"
              :type="type"
              :name="name"
              :disabled="disabled"
              :data-vv-as="dataVvAs"
              class="n22-radio-input"
              v-model="currentValue"
              :value="item.value || item[valueKey]"
            />
            <input
              v-else
              :id="'a' + i"
              :type="type"
              :name="name"
              :disabled="disabled"
              v-validate="vvalidateModal"
              :data-vv-as="dataVvAs"
              class="n22-radio-input"
              v-model="currentValue"
              :value="item.value || item[valueKey]"
            />
            {{ item.text || item[textKey] }}
            <span v-if="item.tag" class="switch-prompt">{{ item.tag }}</span>
          </span>
        </a>
      </div>
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <template slot="left">
        <slot name="left"></slot>
      </template>
      <template slot="right">
        <slot name="right"></slot>
      </template>
      <template slot="children">
        <!-- 错误 -->
        <div
          v-if="isInputError() && !getIsOnlyErrorLine"
          class="n22-input-item-msg"
        >
          <p v-if="error !== ''" v-text="error"></p>
          <p
            v-else-if="errors && errors.first(name) !== ''"
            v-text="errors && errors.first(name)"
          ></p>
          <slot name="error" v-else></slot>
        </div>
      </template>
    </n22-field-item>
  </div>
</template>

<script>/* eslint-disable */
import FieldItem from '../field-item'
import {doPrecision} from '../_util/formate-value'
export default {
  name: 'n22-radio-item',
  inject: {
    rootField: {
      from: 'rootField',
      default: () => ({}),
    },
  },
  computed: {
    dealIsCheck() {
      return (currentValue, item) => {
        if (typeof currentValue == 'string' || typeof currentValue == 'number') {
          if (!isNaN(parseFloat(currentValue)) && this.precision === 0) {
            // 判定为整数时，需要将返回的非整数数据修改为整数
            // console.log('%c n22-radio-item-dealIsCheck-1','color:green;',doPrecision(currentValue,this.precision));
            // console.log('%c n22-radio-item-dealIsCheck-2','color:green;',this.precision);
            currentValue = doPrecision(currentValue, this.precision)
          }
          return currentValue == (item.value || item[this.valueKey])
        } else if (typeof currentValue == 'object') {
          return currentValue.indexOf(item.value || item[this.valueKey]) > -1
        }
      }
    },
    getIsValidator() {
      return this.rootField.isValidator ? this.isValidator : this.rootField.isValidator
    },
    getIsOnlyErrorLine() {
      return this.rootField.isOnlyErrorLine || this.isOnlyErrorLine
    },
    isDisabled() {
      return this.rootField.disabled || this.disabled
    },
  },
  components: {
    [FieldItem.name]: FieldItem,
  },
  props: {
    value: [String, Array, Boolean, Number], // v-modal值
    itemObject: [String, Array, Object, Number], // v-modal对象
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: [String, Array, Boolean, Number], // 默认值
    options: {
      // 选择码表数组
      type: Array,
      required: true,
    },
    isDefaultSelect: {
      // 是否默认选中第一个
      type: Boolean,
      default: false,
    },
    title: {
      // 文本title
      type: String,
      default: '',
    },
    isShowRequired: {
      // field-input是否显示必填的*
      type: Boolean,
      default: false,
    },
    btnAlign: {
      // 按钮对其方式
      type: String,
      default: 'right',
    },
    valueKey: {
      // 码表value对应的key--可自定义--默认就是value
      type: String,
      default: 'value',
    },
    textKey: {
      // 码表text对应的key--可自定义--默认就是text
      type: String,
      default: 'text',
    },
    type: {
      // input表单类型
      type: String,
      default: 'radio',
    },
    name: {
      // 文本name
      type: String,
      default: '',
    },
    error: {
      // 错误信息对象--校验
      type: String,
      default: '',
    },
    vvalidateModal: {
      // 校验规则对象，字符串，以|隔开
      type: String,
      default: '',
    },
    dataVvAs: {
      // 校验规则提示的字段名称
      type: String,
      default: '',
    },
    solid: {
      // 是否固定字段name的长度（超出会自动换行）
      type: Boolean,
      default: false,
    },
    isLine: {
      type: Boolean,
      default: true,
    },
    isLinefeed: {
      type: Boolean,
      default: false,
    },
    isValidator: {
      type: Boolean,
      default: true,
    },
    isOnlyErrorLine: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isHand: false,
      currentValue: '',
    }
  },
  mounted() {
    // console.log(this.defaultValue)
    this.currentValue = this.dealValue(this.value || this.defaultValue)
    this.isHand = true
    //  console.log(this.currentValue)
  },
  methods: {
    isInputError() {
      // return this.vvalidateModal && this.name && this.errors.first(this.name);
      return (
        this.$slots.error ||
        this.error !== '' ||
        (this.getIsValidator && this.vvalidateModal && this.name && (this.errors && this.errors.first(this.name)))
      )
    },
    dealValue(val) {
      let rval = ''
      // 2019-10-25修复当传入值为number类型时判断出错问题--统一将number更改为string
      val !== undefined && (val = val + '')

      if (val) {
        if (this.type == 'radio' && typeof val == 'string') {
          rval = val
        } else if (this.type == 'checkbox' && typeof val == 'string') {
          rval = []
          for (let i = 0; i < 4; i++) {
            if (i === 0) {
              rval.push(val)
            } else {
              this.itemObject && this.itemObject[`fieldValueDes${i}`] && rval.push(this.itemObject[`fieldValueDes${i}`])
            }
          }
        }
      } else {
        if (this.isDefaultSelect && this.options && this.options[0]) {
          rval = this.options[0].value
        }
      }
      // console.log("%c rval", "color:green;", rval);
      return this.type == 'radio' ? rval : rval ? rval : []
    },
    // validator callback
    onvalidateAll(newval, oldval) {
      const _this = this
      if (this.$validator) {
        this.$validator.validateAll().then(result => {
          console.log('%c n22-radio-item-result', 'color:green;', result)
          if (result) {
            _this.$emit('validatorCallBackFun', result, newval, oldval, this.itemObject, this.isHand)
          }
        })
      }
    },
  },
  watch: {
    value(newval, oldval) {
      console.log('%c newval', 'color:green;', newval)
      newval != oldval && (this.currentValue = newval)
      newval && newval != oldval && this.onvalidateAll(newval, oldval)
      // newval&&newval!=oldval?(this.currentValue = newval):'';
    },

    currentValue(newval, oldval) {
      // console.log(
      //   "%c currentValue",
      //   "color:green;",
      //   newval + "===值更改前==" + oldval
      // );
      if (newval != oldval) {
        // console.log(
        //   "%c currentValue",
        //   "color:green;",
        //   newval + "=====" + oldval
        // );
        this.$emit('input', newval)
        this.$emit('changeData', newval, this.itemObject, this.type, oldval)
      } else {
        // console.log('%c newval-oldval','color:green;',`${newval}---${oldval}`);
      }
    },
  },
}
</script>
