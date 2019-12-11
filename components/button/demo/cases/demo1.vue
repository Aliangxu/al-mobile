<template>
  <div class="n22-example-child n22-example-child-button n22-example-child-button-1">
    <n22-button type="default" plain>Default & Plain</n22-button>
    <n22-button type="primary" plain>Primary & Plain</n22-button>
    <n22-button type="warning" plain>Warning & Plain</n22-button>
    <n22-button type="disabled" plain>Disabled & Plain</n22-button>
    <n22-button type="primary" plain round>Primary & Plain & Round</n22-button>
    <n22-button type="primary" plain round loading>Primary & Plain & Loading</n22-button>
  </div>
</template>

<script>
import {Button} from 'al-mobile'

export default {
  name: 'button-demo',
  /* DELETE */
  title: '线性按钮',
  titleEnUS: 'Plain buttons',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
}

</script>

