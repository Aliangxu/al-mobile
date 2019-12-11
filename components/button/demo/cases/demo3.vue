<template>
  <div class="n22-example-child  n22-example-child-button n22-example-child-button-3">
    <div class="n22-example-section">
      <n22-button type="primary" icon="edit" inline>Inline Primary</n22-button>
      <n22-button type="primary" inline plain>Inline Plain</n22-button>
    </div>
    <div class="n22-example-section">
      <n22-button type="warning" size="small" inline>Warning</n22-button>
      <n22-button type="disabled" size="small" inline>Disabled</n22-button>
    </div>
  </div>
</template>

<script>
import {Button} from 'al-mobile'

export default {
  name: 'button-demo',
  /* DELETE */
  title: '行内按钮',
  titleEnUS: 'Inline buttons',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-button-3
  .n22-example-section
    float left
    width 100%
    margin-bottom 10px
  .n22-button
    float left
</style>
