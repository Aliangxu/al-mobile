<template>
  <div class="n22-drop-select">
    <input
      class="n22-drop-select-input"
      :type="inputType"
      :name="name"
      v-model="selectValue"
      v-validate="vvalidateModal"
      :data-vv-as="dataVvAs"
    >
    <slot name="drop-select-field-item">
      <n22-field-item
        v-on="$listeners"
        v-bind="$attrs"
        :class="[
                    isInputError() && getIsValidator ? 'is-error' : '',
                    isDisabled ? 'is-disabled': '',
                    isSelect ? 'is-select': '',
                ]"
        class="n22-drop-select-field-item"
        :title="title"
        :arrow="itemObject?((getIsShowArrow)?arrow:false):arrow"
        :addon="pickerValue0"
        :is-show-required="isShowRequired&&vvalidateModal&&vvalidateModal.indexOf('required')>-1?true:false"
        @click="isPickerShowClick()"
      >
        <template slot="left">
          <slot name="left"></slot>
        </template>
        <template #right>
          <span class="n22-field-item-right-addon" v-show="itemObject?getIsShowArrow:true">{{ pickerValue0 }}</span>
        </template>
        <template #right-children>
          <slot name="right-children"></slot>
        </template>
        <template slot="children">
          <!-- 错误 -->
          <div v-if="isInputError() && !getIsOnlyErrorLine" class="n22-input-item-msg">
            <p v-if="error !== ''" v-text="error"></p>
            <p v-else-if="errors.first(name) !== ''" v-text="errors.first(name)"></p>
            <slot name="error" v-else></slot>
          </div>
        </template>
      </n22-field-item>
    </slot>
    <slot name="drop-select-picker">
      <!-- 启用下面的升级修复--此处暂时注释掉--等待后期未出现大的升级问题--再行删除 -->
      <!-- <n22-picker
        v-if="type=='single'"
        ref="picker0"
        :title="pickerTitle"
        v-model="isPickerShow0"
        :data="pickerData"
        @confirm="onPickerConfirm(0)"
      ></n22-picker>
      <n22-date-picker
        v-else-if="type=='date'"
        ref="datePicker"
        :title="pickerTitle"
        v-model="isPickerShow0"
        :default-date="defaultDate"
        :min-date="minDate"
        :max-date="maxDate"
        @change="onDatePickerChange"
        @confirm="onDatePickerConfirm"
      ></n22-date-picker>-->

      <!-- 页面级别展示 -->
      <n22-drop-select-show
        v-if="!isAppendTo"
        align="left"
        ref="dropSelectShow"
        :type="type"
        :title="pickerTitle"
        :selectValue="selectValue"
        v-model="isPickerShow0"
        :isAppendTo="isAppendTo"
        :pickerData="pickerData"
        :default-date="defaultDate"
        :min-date="minDate"
        :max-date="maxDate"
        @onPickerConfirm="onPickerConfirm"
        @onDatePickerChange="onDatePickerChange"
        @onDatePickerConfirm="onDatePickerConfirm"
        @onAddressPickerConfirm="onAddressPickerConfirm"
      ></n22-drop-select-show>
      <!-- 非页面级别展示使用操作dom方式--触发DropSelect.show()--以便解决掉ios-flex滑动导致的页面布局，底部弹出层无法展示在flex的层级上面 -->
    </slot>
  </div>
</template>

<script>
//import { mapState, mapActions } from "vuex";//引入组件样例--★★此处为引入vuex推荐此方法引入vuex的各个方法属性使用
import FieldItem from "../field-item";
// import Picker from "../picker";
// import DatePicker from "../date-picker";
import DropSelectShow from "./DropSelectShowIndex";
import { mdDocument, extend } from '../_util';
export default {
  name: "n22-drop-select", //使用xx-xx-xx命名方式具体看操作文档
  inject: {
    rootField: {
      from: 'rootField',
      default: () => ({}),
    },
  },
  components: {
    //[xxxx.name]: xxx,//引入组件样例如此
    [FieldItem.name]: FieldItem,
    // [Picker.name]: Picker,
    // [DatePicker.name]: DatePicker,
    [DropSelectShow.name]: DropSelectShow
  },
  props: {
    defaultValue: [String, Array, Boolean, Number],
    value: [String, Array, Boolean, Number], //v-modal值
    itemObject: [String, Array, Object, Number], //v-modal对象
    appendTo: {
      default: () => mdDocument.body
    },
    isAppendTo: {
      //是挂载dom显示还是内联显示--默认挂载dom显示
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    isShowRequired: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pickerTitle: {
      type: String,
      default: "请选择"
    },
    minDate: {
      type: Date,
      default: () => {
        return new Date("1819/01/01");
      }
    },
    maxDate: {
      type: Date,
      default: () => {
        return new Date();
      }
    },
    defaultDate: {
      type: Date,
      default: () => {
        return new Date();
      }
    },
    ispickerValue: {
      //默认选择的值--不提供默认选择
      type: String,
      default: "请选择"
    },
    options: {
      type: [Array, Object],
      default: () => {
        return [];
      }
    },
    name: {
      //文本name
      type: String,
      default: ""
    },
    arrow: {
      //输入或者下拉左边的图标
      type: String,
      default: "arrow-right"
    },
    inputType: {
      //文本type类型
      type: String,
      default: "text"
    },
    type: {
      //下拉选择类型，默认single单一选择滑动，date-时间选择滑动（目前的滑动为三列年月日选择，后期逐渐扩充）
      type: String,
      default: "single"
    },
    valueKey: {
      type: String,
      default: "value"
    },
    textKey: {
      type: String,
      default: "text"
    },
    error: {
      //错误信息对象--校验
      type: String,
      default: ""
    },
    vvalidateModal: {
      //校验规则对象，字符串，以|隔开
      type: String,
      default: ""
    },
    dataVvAs: {
      //校验规则提示的字段名称
      type: String,
      default: ""
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
  computed: {
    //...mapState(["common"])//引入vuex state样例>>>可通过this.common.userInfo获取vuex-state数据
    getIsValidator() {
      return this.rootField.isValidator?this.isValidator:this.rootField.isValidator
    },
    getIsOnlyErrorLine() {
      return this.rootField.isOnlyErrorLine || this.isOnlyErrorLine
    },
    isDisabled() {
      return this.rootField.disabled || this.disabled
    },
    isSelect() {
      return this.ispickerValue === this.pickerValue0;
    },
    getIsShowArrow() {
      this.isShowArrow = this.itemObject.fieldValueDes1;
      if(typeof this.isShowArrow === 'boolean'){
        return !this.isShowArrow;
      }else{
        if(this.isShowArrow!=""){
          return !JSON.parse(this.isShowArrow);
        }
      }
      return true;
    }
  },
  data() {
    return {
      isShowArrow: true,
      isHand: false,
      isPickerShow0: false,
      pickerValue0: this.ispickerValue || "",
      selectValue: "",
      pickerData:
        this.options.length && this.options[0].length
          ? this.options
          : [this.options]
      // minDate: new Date("1819/01/01"),
      // maxDate: new Date(),
      // defaultDate: new Date()
    };
  },
  methods: {
    isInputError() {
      // return this.vvalidateModal && this.name && this.errors.first(this.name);
      return this.$slots.error || this.error !== '' || (this.getIsValidator&&this.vvalidateModal&&this.name&&this.errors.first(this.name))
    },
    isPickerShowClick() {
      if(this.disabled)return;
      if (!this.isAppendTo) {
        // console.log("%c dropselect-val", "color:green;", this.isPickerShow0);
        // console.log("%c pickerData", "color:green;", this.pickerData);
        this.isPickerShow0 = true;
      } else {
        // console.log("%c DropSelectShow", "color:green;", this.appendTo);
        // console.log("%c pickerData", "color:green;", this.pickerData);
        let _this = this;
        DropSelectShow.show({
          appendTo: this.appendTo,
          type: this.type,
          selectValue: this.selectValue,
          title: this.pickerTitle,
          pickerData: this.pickerData,
          defaultDate: this.defaultDate,
          minDate: this.minDate,
          maxDate: this.maxDate,
          onPickerConfirm: (index, v) => {
            console.log("%c index", "color:green;", index);
            _this.onPickerConfirm(index, v);
          },
          onDatePickerChange: (columnIndex, itemIndex, value) => {
            _this.onDatePickerChange(columnIndex, itemIndex, value);
          },
          onDatePickerConfirm: (columnsValue, value) => {
            _this.onDatePickerConfirm(columnsValue, value);
          },
          onAddressPickerConfirm: (columnsValue, value,options) => {
            _this.onAddressPickerConfirm(columnsValue, value, options);
          }
        });
      }
    },
    onPickerConfirm(index, v) {
      console.log("%c index", "color:green;", index);
      const values = v;
      let val = "";
      let res = "";
      values.forEach(value => {
        value &&
          (val = value.value || value[this.valueKey]) &&
          (res += `${value.text || value.label || value.show} `);
      });
      this[`pickerValue${index}`] = res;
      let oldVal = JSON.parse(JSON.stringify(this.selectValue || ""));
      this.selectValue = val;
      this.isHand = true;
      this.$emit("input", val, this.itemObject);
      // this.$emit("changeData", val, this.itemObject,"","",oldVal);
    },
    onPickerConfirmZD(newval,oldval, index, isHandV) {
       // this.$emit("changeData", val, this.itemObject,1,oldval);//回显
       let isHand = JSON.parse(JSON.stringify(this.isHand));
       this.$emit("changeData", newval, this.itemObject,"","",oldval,isHand);
       this.isHand = false;
      let val = "";
      let res = "";
      if (this.type == "single") {
        this.pickerData[0].forEach(value => {
          (value.value || value[this.valueKey]) == newval &&
            (res += `${value.text || value.label || value.show} `);
        });
        this[`pickerValue${index}`] = res;
        this.selectValue = newval;
      } else if (this.type == "date") {
        this[`pickerValue${index}`] = newval;
        this.selectValue = newval;
      } else if (this.type == "address") {
        this.selectValue = newval;
        if(newval&&newval.indexOf("|")>-1){
           let arr = newval.split("|");
            for (let index = 0; index < this.pickerData.length; index++) {
               const pickerData = this.pickerData[index];
               this.pickerValue0 = "";
               for (let m = 0; m < pickerData.options.length; m++) {
                  const ppm = pickerData.options[m];
                  if(arr[0]==ppm.value){
                     this.pickerValue0+=(ppm.label+" ");
                     for (let mi = 0; mi < ppm.children.options.length; mi++) {
                        const ppmi = ppm.children.options[mi];
                        if(arr[1]==ppmi.value){
                           this.pickerValue0+=(ppmi.label+" ");
                           for (let mij = 0; mij < ppmi.children.options.length; mij++) {
                              const ppmij = ppmi.children.options[mij];
                              if(arr[2]==ppmij.value){
                                 this.pickerValue0+=(ppmij.label);
                                 break
                              }
                           }
                           break
                        }
                        
                     }
                     break
                  }
                  
               }
            }
        }
      } else if (this.type == "work1") {
         // this.$emit("changeData", newval, this.itemObject,"","",oldval);
        this.selectValue = newval;
        if(newval&&newval.indexOf("|")>-1){
           let arr = newval.split("|");
            for (let index = 0; index < this.pickerData.length; index++) {
               const pickerData = this.pickerData[index];
               this.pickerValue0 = "";
               for (let m = 0; m < pickerData.options.length; m++) {
                  const ppm = pickerData.options[m];
                  if(arr[0]==ppm.value){
                     // this.pickerValue0+=(ppm.label+" ");
                     for (let mi = 0; mi < ppm.children.options.length; mi++) {
                        const ppmi = ppm.children.options[mi];
                        if(arr[1]==ppmi.value){
                           // this.pickerValue0+=(ppmi.label+" ");
                           for (let mij = 0; mij < ppmi.children.options.length; mij++) {
                              const ppmij = ppmi.children.options[mij];
                              if(arr[2]==ppmij.value){
                                 this.pickerValue0+=`${ppmij.value}/${ppmij.label}`;
                                 break
                              }
                           }
                           break
                        }
                        
                     }
                     break
                  }
                  
               }
            }
        }
      }
      const _this = this
      this.$validator.validateAll().then(result => {
//      console.log("%c drop-select-result", "color:green;", result);
        if (result) {
          _this.$emit("validatorCallBackFun",result,newval,oldval,this.itemObject,isHandV)
        }
      });
    },
    onDatePickerChange(columnIndex, itemIndex, value) {},
    onDatePickerConfirm(columnsValue, value) {
      //    console.log("%c onDatePickerConfirm", "color:green;", value);
      let val = "";
      val = value;
      this.pickerValue0 = val;
      this.isHand = true;
      this.$emit("input", val, this.itemObject);
      this.$emit("changeData", val, this.itemObject,"","","",this.isHand);
    },
    onAddressPickerConfirm(columnsValue, value, options, text) {
      console.log("%c onAddressPickerConfirm", "color:green;", value);
      let val = "";
      val = value;
      let tex = "";
      val.indexOf("|")<0&&(val = options[0].value + "|" + options[1].value + "|" + options[2].value)
      this.pickerValue0 = text||value;
      this.$emit("input", val, this.itemObject);
      this.$emit("changeData", val, this.itemObject,value);
    },
    assignDefault(newval,type){
       if(this.defaultValue){
         this.selectValue = this.defaultValue;
        this.$emit("input", this.defaultValue);
        this.$emit("changeData", this.defaultValue, this.itemObject);
      }else{
        if(!!!newval&&type===2){
         this.selectValue = "";
          this.pickerValue0 = this.ispickerValue;
          this.$emit("input", "");
          this.$emit("changeData", "", this.itemObject,"","");
        }
      }
    },
  },
  mounted() {
    console.log('%c DropSelect--mounted','color:green;',this.value);
    this.value?(this.onPickerConfirmZD(this.value, 0)):this.assignDefault();
  },
  watch: {
    value(newval, oldval) {
      // console.log("%c DropSelect-触发选择的value值", "color:green;", newval);
      newval?(newval != oldval && this.onPickerConfirmZD(newval,oldval, 0,true)):this.assignDefault(newval,2);
    },
    options: {
      handler(val) {
        // console.log("%c handler--data", "color:green;", val);
        let dealval = val.length && val[0].length ? val : [val];
        this.pickerData = extend([], [val]);
      },
      deep: true
    }
    // isPickerShow0(newval, oldval) {
    //   console.log('%c isPickerShow0','color:green;',newval);
    //   if(newval){
    //     // setTimeout(() => {
    //       console.log('%c isPickerShow0--true','color:green;',this.$parent.$parent);
    //     // }, 3000);
    //   }else if(!newval){
    //   }
    // }
  }
};
</script>

<style lang="stylus">
.n22-drop-select-field-item {
  &.is-error {
    .n22-field-item-content {
      hairline(bottom, input-item-color-error, 0, 4px);
    }
  }
  &.is-disabled {
    .n22-field-item-right-addon {
      color: color-text-disabled;
    }
  }
  &.is-select {
    .n22-field-item-right-addon {
      color: color-text-caption;
    }
  }
}
.n22-field-item-right-addon {
   max-width 220px
   color input-item-color
   // color color-text-base
   // white-space nowrap
   overflow hidden
   text-overflow ellipsis
}

.n22-drop-select-input {
  display none
}
</style>