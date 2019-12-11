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
import {DatePicker} from 'al-mobile'

export default {
  name: 'date-picker-demo',
  components: {
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      currentDate: new Date('2018/10/10'),
      minDate: new Date('2018/8/30 11:30'),
    }
  },
}

</script>
