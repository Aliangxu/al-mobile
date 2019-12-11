<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-3">
    <n22-check-group v-model="insurants">
      <n22-check-box name="self" disabled>自己</n22-check-box>
      <n22-check-box name="couple">配偶</n22-check-box>
      <n22-check-box name="parent">父母</n22-check-box>
      <n22-check-box name="child">子女</n22-check-box>
    </n22-check-group>
	</div>
</template>

<script>
import {CheckBox, CheckGroup} from 'al-mobile'

export default {
  name: 'check-demo',
  components: {
    [CheckBox.name]: CheckBox,
    [CheckGroup.name]: CheckGroup,
  },
  data() {
    return {
      insurants: ['self'],
    }
  },
}

</script>
