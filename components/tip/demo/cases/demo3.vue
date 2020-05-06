<template>
  <div class="n22-example-child n22-example-child-tip n22-example-child-tip-3">
    <n22-tip content="点击拼车更有优惠，拼成还可能获得随机礼包" placement="right">
      <n22-button type="default" size="small" inline>点击我</n22-button>
    </n22-tip>
  </div>
</template>

<script>
import {Tip, Button} from 'al-mobile'

export default {
  name: 'tips-demo',
  /* DELETE */
  title: '右侧',
  titleEnUS: 'Right',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
}

</script>
