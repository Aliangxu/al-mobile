<template>
  <div class="n22-example-child n22-example-child-date-picker n22-example-child-date-picker-2">
    <n22-date-picker
      ref="datePicker"
      type="datetime"
      :min-date="currentDate"
      is-view
    ></n22-date-picker>
  </div>
</template>

<script>
import {DatePicker, Dialog} from 'al-mobile'

export default {
  name: 'date-picker-demo',
  /* DELETE */
  title: '日期时间选择 <a href="javascript:window.triggerDatePicker0()">getFormatDate()</a>',
  titleEnUS: 'Date & Time selection <a href="javascript:window.triggerDatePicker0()">getFormatDate()</a>',
  /* DELETE */
  components: {
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date('2018/8/30 11:30'),
    }
  },
  mounted() {
    window.triggerDatePicker0 = () => {
      Dialog.alert({
        content: this.$refs.datePicker.getFormatDate(),
      })
    }
  },
}

</script>
