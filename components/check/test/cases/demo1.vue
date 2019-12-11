<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-1">
    <n22-check-group v-model="favorites">
      <n22-check name="watermelon" label="西瓜" />
      <n22-check name="apple" label="苹果" />
      <n22-check name="banana" label="香蕉" />
      <n22-check name="orange" label="橙子" />
      <n22-check name="tomato" label="西红柿" disabled />
    </n22-check-group>
	</div>
</template>

<script>
import {Check, CheckGroup} from 'al-mobile'

export default {
  name: 'check-demo',
  title: '复选项组',
  components: {
    [Check.name]: Check,
    [CheckGroup.name]: CheckGroup,
  },
  data() {
    return {
      favorites: ['apple'],
    }
  },
}

</script>
