<template>
  <div class="n22-example-child n22-example-child-button n22-example-child-button-2">
    <n22-button type="default" round>Default & Round</n22-button>
    <n22-button type="primary" round>Primary & Round</n22-button>
    <n22-button type="warning" round>Warning & Round</n22-button>
    <n22-button type="disabled" round>Disabled & Round</n22-button>
  </div>
</template>

<script>
import {Button} from 'al-mobile'

export default {
  name: 'button-demo',
  /* DELETE */
  title: '圆角按钮',
  titleEnUS: 'Round Buttons',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
}

</script>

