<template>
  <div class="n22-example-child n22-example-child-tip n22-example-child-tip-1">
    <n22-tip content="不错哟" placement="bottom">
      <n22-button type="default">点击我</n22-button>
    </n22-tip>
  </div>
</template>

<script>
import {Tip, Button} from 'al-mobile'

export default {
  name: 'tips-demo',
  /* DELETE */
  title: '下方',
  titleEnUS: 'Bottom',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
}

</script>
