<template>
  <div class="n22-example-child n22-example-child-tip n22-example-child-tip-2">
    <n22-tip content="不错哟" placement="left">
      <n22-button type="default" size="small" inline>点击我</n22-button>
    </n22-tip>
  </div>
</template>

<script>
import {Tip, Button} from 'al-mobile'

export default {
  name: 'tips-demo',
  /* DELETE */
  title: '左侧',
  titleEnUS: 'Left',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
}

</script>