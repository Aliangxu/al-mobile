<template>
  <div class="n22-example-child n22-example-child-date-picker n22-example-child-date-picker-0">
    <n22-date-picker
      ref="datePicker"
      :min-date="minDate"
      :max-date="maxDate"
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
      minDate: new Date('2013/9/9'),
      maxDate: new Date('2020/9/9'),
      currentDate: new Date('2018/2/5'),
    }
  },
}

</script>
