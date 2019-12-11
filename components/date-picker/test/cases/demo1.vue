<template>
  <div class="n22-example-child n22-example-child-date-picker n22-example-child-date-picker-1">
    <n22-date-picker
      type="time"
      :unit-text="['', '', '', '\'', '\'\'']"
      :minute-step="1"
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
}

</script>