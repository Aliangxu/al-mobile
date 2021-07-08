<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-4">
    <n22-radio-box name="day" v-model="pay" label="日缴" disabled />
    <n22-radio-box name="month" v-model="pay" label="月付" />
    <n22-radio-box name="season" v-model="pay" label="季度费" />
	</div>
</template>

<script>
import {RadioBox} from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '5、单选框',
  titleEnUS: 'Radio box',
  align: 'left',
  /* DELETE */
  components: {
    [RadioBox.name]: RadioBox,
  },
  data() {
    return {
      pay: '',
    }
  },
}

</script>
