<template>
  <n22-picker
    id="drop-select-show"
    v-if="type === 'single'"
    ref="picker0"
    :title="pickerTitle"
    v-model="isPickerShow"
    :data="pickerDataShow"
    :default-value="dealDefaultValue"
    :has-mask="hasMask"
    @confirm="onPickerConfirm(0)"
    @hide="$_onHide"
    >{{ selectValue }}</n22-picker
  >
  <n22-date-picker
    id="drop-select-show"
    v-else-if="type === 'date'"
    ref="datePicker"
    :title="pickerTitle"
    v-model="isPickerShow"
    :default-date="dealDefaultDate"
    :min-date="minDate"
    :max-date="maxDate"
    :has-mask="hasMask"
    @change="onDatePickerChange"
    @confirm="onDatePickerConfirm"
    @hide="$_onHide"
  ></n22-date-picker>
  <n22-work
    id="drop-select-show"
    v-else-if="type === 'work'"
    ref="picker0"
    :title="pickerTitle"
    :isAppendTo="isAppendTo"
    :data="pickerDataShow"
    :selectValue="selectValue"
    describe="请选择您的职业"
    v-model="isPickerShow"
    :notSelectIdf="notSelectIdf"
    :levelArrayProp="levelArrayProp"
    :has-mask="hasMask"
    @notSelectFun="onNotSelectFun"
    @confirm="onPickerConfirm(0)"
    @hide="$_onHide"
  ></n22-work>
  <n22-tab-picker
    id="drop-select-show"
    v-else-if="type === 'address'"
    :title="pickerTitle"
    :placeholder="titleText"
    :describe="titleText"
    :data="pickerDataShow"
    :searchData="searchData"
    :isSearch="isSearch"
    v-model="isPickerShow"
    :has-mask="hasMask"
    @change="handleChange"
  >
  </n22-tab-picker>
</template>

<script>
// import { mapState, mapActions } from "vuex";//引入组件样例--★★此处为引入vuex推荐此方法引入vuex的各个方法属性使用
import Picker from '../picker'
import DatePicker from '../date-picker'
import TabPicker from '../tab-picker'
import Work from '../work'
// import { TabPicker } from "mand-mobile";
export default {
  name: 'n22-drop-select-show', // 使用xx-xx-xx命名方式具体看操作文档
  components: {
    [Picker.name]: Picker, // 引入组件样例如此
    [DatePicker.name]: DatePicker,
    [Work.name]: Work,
    [TabPicker.name]: TabPicker,
  },
  props: {
    appendTo: {
      default: () => {},
    },
    isAppendTo: {
      // 是挂载dom显示还是内联显示--默认挂载dom显示
      type: Boolean,
      default: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    hasMask: {
      type: Boolean,
      default: true,
    },
    selectValue: [String, Number],
    type: {
      // 下拉选择类型，默认single单一选择滑动，date-时间选择滑动（目前的滑动为三列年月日选择，后期逐渐扩充）
      type: String,
      default: 'single',
    },
    pickerTitle: {
      type: String,
      default: '请选择',
    },
    minDate: {
      type: Date,
      default: () => {
        return new Date('1819/01/01')
      },
    },
    maxDate: {
      type: Date,
      default: () => {
        return new Date()
      },
    },
    defaultDate: {
      type: Date,
      default: () => {
        return new Date()
      },
    },
    pickerData: {
      type: Array,
      default: () => {
        return []
      },
    },
    btns: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {}
      },
    },
    notSelectIdf: {
      type: String,
      default: '',
    },
    levelArrayProp: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    // ...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
    dealDefaultValue() {
      // console.log("%c this.pickerData", "color:green;", this.pickerData);
      return this.selectValue ? [this.selectValue] : []
    },
    dealDefaultDate() {
      let date = this.selectValue
        ? isNaN(new Date(this.selectValue).getTime()) ? this.defaultDate : this.selectValue
        : this.defaultDate
      date && typeof date === 'string' && (date = new Date(date))
      return date
    },
    addressStr() {
      return address => {
        return address.map(item => item.label).join(' ')
      }
    },
  },
  created() {
    // console.log("%c DropSelectShow--pickerData", "color:green;", this.pickerData);
    // console.log("%c DropSelectShow--pickerDataShow", "color:green;", this.pickerDataShow);
    if (this.type === 'single') {
      // this.pickerDataShow = this.pickerData;
    } else if (this.type === 'address') {
      this.pickerDataShow = {}
      if (this.pickerData && this.pickerData.length > 0) {
        if (this.pickerData[0].constructor === Object) {
          this.pickerDataShow = this.pickerData[0]
        } else {
          console.group('%c ', 'color:red;', 'DropSelectShow 数据异常！！！！')
          console.error('%c ▲▲▲地址的码表数据存在问题--请检查：当前传入的码表数据为', 'color:red;', this.pickerData)
          console.log('%c 错误原因--应该传入数组下标为0的为Object对象当前为', 'color:red;', this.pickerData[0].constructor)
          console.groupEnd()
        }
      }
    } else if (this.type === 'work1') {
      this.pickerDataShow = {}
      // let searchData = {
      //   name: 'work',
      //   label: '请选择',
      //   options: []
      // }
      let searchDataArray = []
      // console.log(this.pickerData)
      if (this.pickerData && this.pickerData.length > 0) {
        this.pickerData[0].options.forEach(one => {
          one.children.options.forEach(two => {
            searchDataArray = searchDataArray.concat(two.children.options)
          })
        })
        this.searchData.options = searchDataArray
        this.isSearch = true
        // console.log('%c DropSelectShow-this.searchData','color:green;', searchDataArray);
        if (this.pickerData[0].constructor === Object) {
          this.pickerDataShow = this.pickerData[0]
          //  this.titleText = '请选择职业'
        } else {
          console.group('%c ', 'color:red;', 'DropSelectShow 数据异常！！！！')
          console.error('%c ▲▲▲职业的码表数据存在问题--请检查：当前传入的码表数据为', 'color:red;', this.pickerData)
          console.log('%c 错误原因--应该传入数组下标为0的为Object对象当前为', 'color:red;', this.pickerData[0].constructor)
          console.groupEnd()
        }
      }
    }
  },
  mounted() {
    // console.log("%c window.document", "color:green;", this.appendTo);
    if (this.appendTo) {
      this.appendTo.appendChild(this.$el)
    }
  },
  activated() {
    // console.log("%c 当前 DropSelectShow 页面 ", "color:yellow;", "活跃");
  },
  deactivated() {
    // console.log("%c 当前 DropSelectShow 页面 ", "color:yellow;", "销毁");
    if (this.appendTo) {
      this.appendTo.removeChild(this.$el)
    }
  },
  beforeDestroy() {
    // console.log("%c  当前 DropSelectShow 页面 ","color:green;","beforeDestroy");
    if (this.appendTo) {
      this.appendTo.removeChild(this.$el)
    }
  },
  watch: {
    value(val) {
      // console.log("%c dropselectshow-val", "color:green;", val);
      this.isPickerShow = val
    },
    isPickerShow(val) {
      // console.log("%c dropselectshow-val", "color:green;", val);
      if (this.type === 'address' && val === false && this.appendTo) {
        this.appendTo.removeChild(this.$el)
      }
      this.$emit('input', val)
    },
  },
  data() {
    return {
      titleText: '',
      pickerDataShow: this.pickerData,
      searchData: {},
      isPickerShow: this.value,
      isSearch: false,
    }
  },
  methods: {
    // ...mapActions(["getUserInfo"]),//vuex-action引入样例>>>通过this.getUserInfo()可直接调用获取state数据可异步
    // ...mapMutations([//提交vuex-state更改样例
    //    'USER_INFO',
    // ]),
    close() {
      this.isPickerShow = false
    },
    $_onHide() {
      if (!this.isAppendTo) {
        this.$emit('hide')
      } else {
        this.$emit('hide')
        this.btns.hide.handler.call()
      }
    },
    onNotSelectFun(value) {
      if (!this.isAppendTo) {
        this.$emit('onNotSelectFun', value)
      } else {
        this.btns.onNotSelectFun.handler.call(this, value)
      }
    },
    onPickerConfirm(index, value) {
      console.log(
        '%c this.$refs[picker].getColumnValues()',
        'color:green;',
        this.$refs[`picker${index}`].getColumnValues() + '>>>' + value,
      )
      console.log('%c btns', 'color:green;', this.btns)
      console.log('%c index', 'color:green;', index)
      if (!this.isAppendTo) {
        this.$emit('onPickerConfirm', index, this.$refs[`picker${index}`].getColumnValues())
      } else {
        this.btns.onPickerConfirm.handler.call(this, index, this.$refs[`picker${index}`].getColumnValues())
      }
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
      if (!this.isAppendTo) {
        this.$emit('onDatePickerChange', columnIndex, itemIndex, value)
      } else {
        this.btns.onDatePickerChange.handler.call(this, columnIndex, itemIndex, value)
      }
    },
    handleChange({options}) {
      console.log('%c options', 'color:green;', options)
      let address = this.addressStr(options)
      if (this.type === 'work') {
        address = `${options[2].value}/${options[2].label}`
      }
      if (!this.isAppendTo) {
        this.$emit('onAddressPickerConfirm', 0, address, options)
      } else {
        this.btns.onAddressPickerConfirm.handler.call(this, 0, address, options)
        // this.btns.onGetAddress.handler.call(this, 0, options);
      }
    },
    onDatePickerConfirm(columnsValue) {
      if (!this.isAppendTo) {
        this.$emit('onDatePickerConfirm', columnsValue, this.$refs.datePicker.getFormatDate('yyyy-MM-dd'))
      } else {
        this.btns.onDatePickerConfirm.handler.call(
          this,
          columnsValue,
          this.$refs.datePicker.getFormatDate('yyyy-MM-dd'),
        )
      }
    },
  },
}

</script>
