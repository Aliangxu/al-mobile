<template>
  <div class="n22-example-child n22-example-child-tip n22-example-child-tip-0">
    <n22-tip content="不错哟" placement="top">
      <n22-button type="default">点击我</n22-button>
    </n22-tip>
  </div>
</template>

<script>
import {Tip, Button} from 'al-mobile'

export default {
  name: 'tips-demo',
  /* DELETE */
  title: '上方',
  titleEnUS: 'Top',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
}

</script>
