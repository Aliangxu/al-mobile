<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-5">
    <n22-radio-group v-model="insurants">
      <n22-radio-box name="self">自己</n22-radio-box>
      <n22-radio-box name="couple">配偶</n22-radio-box>
      <n22-radio-box name="parent">父母</n22-radio-box>
      <n22-radio-box name="child" disabled>子女</n22-radio-box>
    </n22-radio-group>
	</div>
</template>

<script>
import {RadioBox, RadioGroup} from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '单选框组',
  titleEnUS: 'Radio box group',
  align: 'left',
  /* DELETE */
  components: {
    [RadioBox.name]: RadioBox,
    [RadioGroup.name]: RadioGroup,
  },
  data() {
    return {
      insurants: 'self',
    }
  },
}

</script>
