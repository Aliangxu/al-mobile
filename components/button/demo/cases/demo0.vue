<template>
  <div class="n22-example-child n22-example-child-button n22-example-child-button-0">
    <n22-button type="default">Default</n22-button>
    <n22-button type="default" inactive>Default Inactive</n22-button>
    <n22-button type="primary">Primary</n22-button>
    <n22-button type="primary" inactive>Primary Inactive</n22-button>
    <n22-button type="primary" loading>Loading</n22-button>         
    <n22-button type="warning">Warning</n22-button>
    <n22-button type="warning" inactive>Warning Inactive</n22-button>
    <n22-button type="disabled">Disabled</n22-button>
  </div>
</template>

<script>
import {Button} from 'al-mobile'

export default {
  name: 'button-demo',
  components: {
    [Button.name]: Button,
  },
}

</script>

