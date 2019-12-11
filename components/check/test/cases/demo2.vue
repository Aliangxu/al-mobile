<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-2">
    <n22-check-box name="day" v-model="pay" label="日缴" disabled />
    <n22-check-box name="month" v-model="pay" label="月付" />
    <n22-check-box name="season" v-model="pay" label="季度费" />
	</div>
</template>

<script>
import {CheckBox} from 'al-mobile'

export default {
  name: 'check-demo',
  components: {
    [CheckBox.name]: CheckBox,
  },
  data() {
    return {
      pay: '',
    }
  },
}

</script>
