<template>
  <div class="n22-example-child n22-example-child-picker n22-example-child-picker-0">
    <n22-picker
      ref="picker"
      :data="pickerData"
      :invalid-index="[[2, 3, 4]]"
      is-view
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
      pickerData: simple,
    }
  },
}

</script>