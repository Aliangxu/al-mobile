<template>
  <div class="n22-example-child n22-example-child-picker n22-example-child-picker-2">
    <n22-picker
      ref="picker0"
      value
      :data="pickerData0"
      title="选择年份"
    ></n22-picker>
  </div>
</template>

<script>
import {Picker} from 'al-mobile'
import simple from 'al-mobile/components/picker/demo/data/simple'

export default {
  name: 'picker-demo',
  components: {
    [Picker.name]: Picker,
  },
  data() {
    return {
      pickerData0: simple,
    }
  },
}

</script>
