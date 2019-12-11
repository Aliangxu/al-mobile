<template>
  <div class="n22-example-child n22-example-child-picker n22-example-child-picker-1">
    <n22-picker
      ref="picker"
      :data="pickerData"
      :cols="3"
      :default-index="pickerDefaultIndex"
      :key="tmp"
      is-view
      is-cascade
    ></n22-picker>
  </div>
</template>

<script>
import {Picker} from 'al-mobile'
import district from 'al-mobile/components/picker/demo/data/district'
import {setTimeout} from 'timers'

export default {
  name: 'picker-demo',
  components: {
    [Picker.name]: Picker,
  },
  data() {
    return {
      pickerData: [],
      pickerDefaultIndex: [],
    }
  },
  mounted() {
    this.pickerData = district
    this.pickerDefaultIndex = [3, 2, 1]
    setTimeout(() => {
      this.$refs.picker.refresh()
    }, 0)
  },
}

</script>