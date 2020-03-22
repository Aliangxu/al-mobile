<style lang="stylus">
.radio-component {
  display: block;
  min-height: 50px;

  > .radio-cell {
    min-height: inherit;
    display: flex;
    align-items: center;
    > .radio-cell-title {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }

  .radio-label {
    position: relative;
  }

  label > .input-box {
    .radio-input {
      position: absolute;
      width: 800px;
      opacity: 0;
      margin-left: -100px;
      height: 30px;
    }
    .radio-inputok {
      position: absolute;
      width: 800px;
      opacity: 0;
      margin-left: -100px;
      height: 30px;
    }
    > textarea {
      margin-top: 22px;
      width: 330px;
      height: 100px;
    }
    // margin-left: 22px;
    margin-top: 33px;
    .circle_error_not_select{
      background-color: rgb(255, 0, 0)!important;
      color: #fff!important;
      transform: scale(1);
    }
    > input {
      // display: none;
      &:checked + .circle_select {
        background-color: #4091fb;
        color: #fff;
        transform: scale(1);
        border: none;
      }
      &:checked + .circle_error {
        background-color: rgb(255, 0, 0);
        color: #fff;
        transform: scale(1);
      }
      &:disabled + .input-box-circle {
        opacity: 0.5;
      }
      &:disabled + .input-box-circle-select {
        opacity: 0.5;
        background-color: #f2f2f6;
      }
    }
    > .circle_correct {
      background-color: #22e022 !important;
      color: #fff !important;
      transform: scale(1);
    }
    > .input-box-circle {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;

      // float: left;
      z-index: -1;
      margin-left: 20px;
      // display: inline-block;
      width: 28px;
      height: 28px;
      background-color: #f2f2f6;
      border-radius: 100%;
      line-height: 28px;
      text-align: center;
      color: #333;
      font-size: 16px;
      margin-right: 17px;
      // opacity: 0;
      transition: width 0.15s ease-in, height 0.15s ease-in,
        margin 0.15s ease-in;
    }
    > .desc_c {
      line-height: 30px;
      z-index: -1;
    }
    > .input-box-circle-select {
      float: left;
      margin-left: 5px;
      // display: inline-block;
      width: 20px;
      height: 20px;
      // background-color: #f2f2f6;
      border-radius: 100%;
      border: 1px solid #c5cad5;
      line-height: 28px;
      text-align: center;
      font-size: 16px;
      margin-right: 5px;
      transition: width 0.15s ease-in, height 0.15s ease-in,
        margin 0.15s ease-in;
    }
    > .desc_c_select {
      line-height: 21px;
      font-size: 14px;
    }
    > .input-box-text-disabled {
      opacity: 0.5;
    }
    > textarea {
      margin-left: 22px;
    }
  }
}
</style>

<template>
  <div>
    <a class="radio-component" v-for="(option, i) in options" :key="option.key">
      <div class="radio-cell" v-if="isShow">
        <div class="radio-cell-title">
          <label class="radio-label">
            <slot name="input-box">
              <!-- type为单选and多选 -->
              <span
                v-if="type == 'radio' || type == 'checkbox'"
                class="input-box"
              >
                <template v-if="mode == 'select'">
                  <input
                    v-if="type == 'checkbox'"
                    :name="option.optionId"
                    :id="`${mode}-${i}`"
                    :class="
                      type == 'radio' || type == 'checkbox'
                        ? 'radio-input'
                        : 'radio-inputok'
                    "
                    v-model="currentValue"
                    type="checkbox"
                    :disabled="option.disabled == 'disabled'"
                    :value="option.value"
                  />
                  <input
                    v-if="type == 'radio'"
                    :name="option.optionId"
                    :id="`${mode}-${i}`"
                    :class="
                      type == 'radio' || type == 'checkbox'
                        ? 'radio-input'
                        : 'radio-inputok'
                    "
                    v-model="currentValue"
                    type="radio"
                    :disabled="option.disabled == 'disabled'"
                    :value="option.value"
                  />
                  <span class="input-box-circle-select circle_select">
                    {{ option.disabled }}
                    <n22-icon
                      v-show="
                        type == 'radio'
                          ? currentValue == option.value
                          : currentValue.indexOf(option.value) > -1
                      "
                      name="correct"
                    ></n22-icon>
                  </span>
                  <span
                    class="desc_c_select"
                    :class="{ 'input-box-text-disabled': option.disabled }"
                    >{{ option.text }}</span
                  >
                </template>
                <template v-else>
                  <input
                    v-if="type == 'checkbox'"
                    :name="option.optionId"
                    :id="`${mode}-${i}`"
                    :class="
                      type == 'radio' || type == 'checkbox'
                        ? 'radio-input'
                        : 'radio-inputok'
                    "
                    v-model="currentValue"
                    type="checkbox"
                    :disabled="
                      disabled === false
                        ? otherValue.disabled == 'disabled'
                        : disabled
                    "
                    :value="option.optionId || option"
                  />
                  <input
                    v-if="type == 'radio'"
                    :name="option.optionId"
                    :id="`${mode}-${i}`"
                    :class="
                      type == 'radio' || type == 'checkbox'
                        ? 'radio-input'
                        : 'radio-inputok'
                    "
                    v-model="currentValue"
                    type="radio"
                    :disabled="
                      disabled === false
                        ? otherValue.disabled == 'disabled'
                        : disabled
                    "
                    :value="option.optionId || option"
                  />
                  <span
                    class="input-box-circle"
                    :class="
                      dealTrueOrFalse(
                        otherValue.topicAnswer,
                        option.optionId || option,
                        i,
                        'class'
                      )
                    "
                  >
                    <n22-icon
                      v-if="
                        dealTrueOrFalse(
                          otherValue.topicAnswer,
                          option.optionId || option,
                          i,
                          'desc'
                        ) == 'correct' ||
                          dealTrueOrFalse(
                            otherValue.topicAnswer,
                            option.optionId || option,
                            i,
                            'desc'
                          ) == 'close'
                      "
                      :name="
                        dealTrueOrFalse(
                          otherValue.topicAnswer,
                          option.optionId || option,
                          i,
                          'desc'
                        )
                      "
                    ></n22-icon>
                    <span v-else>{{
                      dealTrueOrFalse(
                        otherValue.topicAnswer,
                        option.optionId || option,
                        i,
                        'desc'
                      )
                    }}</span>
                  </span>
                  <span
                    class="desc_c"
                    :class="{ 'input-box-text-disabled': otherValue.disabled }"
                    >{{ option.optionDes || option }}</span
                  >
                </template>
              </span>
              <!-- type为文本输入 -->
              <span class="input-box" v-if="type == 'textarea' && i == 0">
                <textarea v-model="currentValue"></textarea>
              </span>
            </slot>
            <slot></slot>
          </label>
        </div>
      </div>
      <slot name="content" :option="option"></slot>
    </a>
  </div>
</template>

<script>/* eslint-disable */
import {constant} from '../_util'
import Icon from '../icon'
export default {
  name: 'n22-radio',
  components: {
    [Icon.name]: Icon,
  },
  computed: {
    dealTrueOrFalse() {
      return (value, opid, i, type) => {
        let show = {
          desc: this.selectOptionList[i],
          class: 'circle_select',
        }
        if (this.checkIsTrueOrFalse) {
          if (this.type === 'radio') {
            // 单选、判断
            if (opid == this.currentValue) {
              if (value && value == this.currentValue) {
                // 选择了正确答案
                show.desc = 'correct'
                show.class = 'circle_correct'
              } else {
                // 错误答案返回true
                show.desc = 'close'
                show.class = 'circle_error'
              }
            } else if (opid == value) {
              // show.desc = "correct";
              // show.class = "circle_correct";
            }
          } else if (this.type === 'checkbox') {
            this.currentValue.forEach(currentValue => {
              if (opid == currentValue) {
                if (value && value.indexOf(currentValue) > -1) {
                  // 选择了正确答案
                  show.desc = 'correct'
                  show.class = 'circle_correct'
                } else {
                  // 错误答案返回true
                  show.desc = 'close'
                  show.class = 'circle_error'
                }
              } else if (value && value.indexOf(opid) > -1) {
                // show.desc = "close";
                // show.class = "circle_error_not_select";
              }
            })
          }
        }
        return show[type]
      }
    },
  },
  props: {
    options: {
      // 选择数组
      type: Array,
      required: true,
    },
    type: {
      // input type
      type: String,
      required: true,
    },
    mode: {
      // 业务模式--默认选择模式--exam为考试模式
      type: String,
      default: 'select',
    },
    checkIsTrueOrFalse: {
      // 答题模式是否动态处理正确错误选项
      type: Boolean,
      default: false,
    },
    disabled: {
      // 是否可选择
      type: Boolean,
      default: false,
    },
    isShow: {
      // 是否显示选择项
      type: Boolean,
      default: true,
    },
    value: [String, Array, Boolean, Number], // v-modal
    otherValue: Object, // item
    selectOptionList: {
      // 选择显示的选项--默认A-Z
      type: Array,
      default: () => {
        return constant.selectOptionList
      },
    },
  },

  data() {
    return {
      currentValue: this.value ? this.value : this.type == 'checkbox' ? [] : '',
    }
  },
  methods: {
    // selectOptionShowFun(op){
    //   this.otherValue.show = op
    // }
    selectClick(i) {
      console.log('%c selectClick', 'color:green;', `${this.mode}-${i}`)
      // $(`#${this.mode}-${i}`).click()
    },
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal && newVal != oldVal) {
        console.log('%c radio-newVal', 'color:green;', newVal)
        console.log('%c radio-oldVal', 'color:green;', oldVal)
        this.currentValue = newVal
      }
    },

    currentValue(newVal, oldVal) {
      if (newVal != oldVal) {
        console.log('%c radio-currentValue', 'color:green;', 'currentValue更改')
        this.$emit('input', newVal)
        this.$emit('changeData', this.otherValue)
      }
    },
  },
}
</script>
