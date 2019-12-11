<template>
  <div class="n22-example-child n22-example-child-date-picker n22-example-child-date-picker-3">
    <n22-date-picker
      ref="datePicker"
      type="custom"
      title="选择出险时间"
      :text-render="textRender"
      :custom-types="['yyyy', 'MM','dd', 'hh', 'mm']"
      :default-date="currentDate"
      is-view
    ></n22-date-picker>
  </div>
</template>

<script>
import {DatePicker} from 'al-mobile'

export default {
  name: 'date-picker-demo',
  components: {
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      currentDate: new Date('2018/10/10'),
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
  },
}

</script>