/* eslint-disable */
<template>
  <div class="">
    <input
      v-if="!vvalidateModal"
      class="n22-input"
      :type="type"
      :name="name"
      v-model="value"
      :data-vv-as="dataVvAs"
    />
    <input
      v-else
      class="n22-input"
      :type="type"
      :name="name"
      v-model="value"
      v-validate="vvalidateModal"
      :data-vv-as="dataVvAs"
    />
    <n22-field-item
      v-on="$listeners"
      v-bind="$attrs"
      :title="title"
      :is-show-required="
        isShowRequired ||
        (vvalidateModal &&
        vvalidateModal.indexOf('required') > -1)
          ? true
          : false
      "
      :align="align"
      :isLinefeed="isLinefeed"
      :isLine="isLine"
      :class="[
        isInputError() ? 'is-error' : '',
        isLinefeed ? '' : 'n22_field_item_radio'
      ]"
      :solid="solid"
    >
      <div
        slot="right"
        :style="{ 'text-align': isLinefeed ? 'left' : btnAlign }"
        :class="[isLinefeed ? 'content-margin' : '']"
      >
        <div
          class="n22-switch"
          :class="[disabled ? 'disabled' : '', isSelect ? 'active' : '']"
          :style="showStyle"
          @click="$_onChange($event)"
        >
          <slot></slot>
        </div>
      </div>
      <template slot="children">
        <slot name="children">
          <!-- 错误 -->
          <div v-if="isInputError()" class="n22-input-item-msg">
            <p v-if="error !== ''" v-text="error"></p>
            <p
              v-else-if="errors && errors.first(name) !== ''"
              v-text="errors && errors.first(name)"
            ></p>
            <slot name="error" v-else></slot>
          </div>
        </slot>
      </template>
    </n22-field-item>
  </div>
</template>

<script>
/* eslint-disable */
import FieldItem from '../field-item'
export default {
  name: 'n22-switch-item',
  components: {
    [FieldItem.name]: FieldItem,
  },
  props: {
    value: [String, Array, Boolean, Number], // v-modal值
    itemObject: {
      type: [String, Array, Object, Number],
      default: ()=>{
        return {
          name: "",
          code: "",
          type: ""
        }
      }
    }, //该v-modal字段属性对象
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: [String, Array, Boolean, Number], // 默认值
    options: {
      // 选择码表数组
      type: Array,
      // required: true,
      default: () => {
        return []
      },
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
    isLine: {
      type: Boolean,
      default: true,
    },
    isLinefeed: {
      type: Boolean,
      default: false,
    },

    align: {
      // left, center, right
      type: String,
      default: 'left',
    },
    solid: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
  },

  computed: {
    showStyle(){
      if (this.isSelect) {
        if (this.activeColor) {
          return {
            backgroundColor: this.activeColor,
          }
        }
      } else {
        if (this.inactiveColor) {
          return {
            backgroundColor: this.inactiveColor,
          }
        }
      }
      return "";
    },
    getIsSelect() {
      return (value, options, type) => {
        if (options && options.length > 0) {
          for (let i = 0; i < options.length; i++) {
            const op = options[i]
            if (
              op.optionDes == '否' &&
              ((type == 1 && op.optionId == value) ||
                (type == 2 && value && op.optionId != value) ||
                (!value && type == 1))
            ) {
              this.isSelect = false
              return op.optionId
            } else if (
              op.optionDes == '是' &&
              ((type == 1 && op.optionId == value) ||
                (type == 2 && value && op.optionId != value) ||
                (!value && type == 2))
            ) {
              this.isSelect = true
              return op.optionId
            } else {
              if (type == 1) {
                if (value == op.value && i == 1) {
                  //false为是--默认为否
                  this.isSelect = false
                } else if (value === '') {
                  value = this.defaultValue || (options[1] && options[1].value) || ''
                  this.$emit('input', this.defaultValue || (options[1] && options[1].value) || '')
                  this.$emit('changeData', this.itemObject, this.value, '', false, 'default')
                  this.isSelect = false
                } else {
                  this.isSelect = true
                }
              } else if (type == 2) {
                if (op.value != value) {
                  this.isSelect = !this.isSelect
                  return op.value
                }
              }
            }
          }
        } else {
          if (type === 1) {
            this.isSelect = this.value
          } else if (type === 2) {
            this.isSelect = !this.isSelect
          }
          return this.isSelect
        }
      }
    },
  },

  mounted() {
    console.log('%c n22-switch-item-mounted', 'color:green;', '')
    this.getIsSelect(this.value, this.options, 1)
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal||newVal===false) {
        this.getIsSelectChange(newVal, this.options)
      }
    },
  },

  data() {
    return {
      isSelect: false,
    }
  },

  methods: {
    isInputError() {
      return this.vvalidateModal && this.name && (this.errors && this.errors.first(this.name))
    },
    dealValue(val) {
      let rval = val ? val : this.isDefaultSelect ? this.options && this.options[0] && this.options[0].value : ''
      // console.log("%c rval", "color:green;", rval);
      return this.type == 'radio' ? rval : []
    },
    //validator callback
    onvalidateAll(newval, oldval) {
      const _this = this
      if (this.$validator) {
        this.$validator.validateAll().then(result => {
          console.log('%c drop-select-result', 'color:green;', result)
          if (result) {
            _this.$emit('validatorCallBackFun', result, newval, oldval)
          }
        })
      }
    },
    // MARK: events handler, 如 $_onButtonClick
    $_onChange(event) {
      console.log('%c n22-switch-item', 'color:green;', '$_onChange')
      if (this.disabled) {
        return
      }
      // this.$emit('input', this.getIsSelect(this.value, this.options, 2))
      // this.$emit('changeData', this.itemObject, this.value, '', true, event)
      const value = this.getIsSelect(this.value, this.options, 2)
      this.$emit('input', value)
      this.$emit('changeData', this.itemObject, value, '', true, event)
    },
    //监听v-modal
    getIsSelectChange(value, options) {
      if (options&&options.length>0) {
        for (let a = 0; a < options.length; a++) {
          const op = options[a]
          if (op.value == value && a === 0) {
            this.isSelect = true
          } else if (op.value == value && a === 1) {
            this.isSelect = false
          }
        }
      }else{
        this.isSelect = this.value;
      }
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-switch {
  box-sizing: border-box;
  position: relative;
  width: 40px;
  height: 24px;
  border-radius: 24px;
  background-color: switch-fill-inverse;

  &.disabled {
    opacity: switch-item-color-disabled;
  }

  &::before, &::after {
    content: '';
    position: absolute;
    transition: transform 0.3s;
  }

  &::before {
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    border-radius: 12px;
    // background-color: switch-fill-inverse;
  }

  &::after {
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: switch-handle-color;
    border-radius: 50%;
  }

  &.active {
    background-color: switch-fill;
  }

  &.active::before {
    transform: scale(0);
  }

  &.active::after {
    transform: translateX(16px);
  }
}

.n22-input {
  display: none;
}
</style>
