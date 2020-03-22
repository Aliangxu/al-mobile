<template>
  <div class="n22-example-child n22-example-child-date-picker n22-example-child-date-picker-3">
    <n22-field>
      <n22-field-item
        name="name"
        title="出险时间"
        arrow="arrow-right"
        align="right"
        :content="datePickerValue"
        @click.native="isDatePickerShow = true">
      </n22-field-item>
    </n22-field>
    <n22-date-picker
      ref="datePicker"
      v-model="isDatePickerShow"
      type="custom"
      title="选择出险时间"
      :text-render="textRender"
      :custom-types="['yyyy', 'MM','dd', 'hh', 'mm']"
      :default-date="currentDate"
      @change="onDatePickerChange"
      @confirm="onDatePickerConfirm"
    ></n22-date-picker>
  </div>
</template>

<script>import {DatePicker, Field, FieldItem} from 'al-mobile'

export default {
  name: 'date-picker-demo',
  /* DELETE */
  title: '自定义类型和选项文案值',
  titleEnUS: 'Custom type and option textual values',
  height: 500,
  /* DELETE */
  components: {
    [DatePicker.name]: DatePicker,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
  },
  data() {
    return {
      currentDate: new Date(),
      isDatePickerShow: false,
      datePickerValue: '',
    }
  },
  methods: {
    textRender() {
      const args = Array.prototype.slice.call(arguments)
      const typeFormat = args[0] // 类型
      // const column0Value = args[1] // 第1列选中值
      // const column1Value = args[2] // 第2列选中值
      const column2Value = args[3] // 第3列选中值
      if (typeFormat === 'dd') {
        return `*${column2Value}日`
      }
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
      console.log(
        `[Al Mobile] DatePicker Change\ncolumnIndex: ${columnIndex},\nitemIndex:${itemIndex},\nvalue: ${JSON.stringify(
          value,
        )}`,
      )
    },
    onDatePickerConfirm(columnsValue) {
      console.log(`[Al Mobile] DatePicker Confirm\nvalue: ${JSON.stringify(columnsValue)}`)
      this.datePickerValue = this.$refs.datePicker.getFormatDate('yyyy/MM/dd hh:mm')
    },
  },
}
</script>