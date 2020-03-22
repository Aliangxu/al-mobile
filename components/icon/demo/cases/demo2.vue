<template>
  <div class="n22-example-child n22-example-child-icon n22-example-child-icon-2">
    <div class="n22-example-item-s">
      <n22-icon name="warn" size="xs"></n22-icon>
      <p>xs</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="warn" size="sm"></n22-icon>
      <p>sm</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="warn" size="md"></n22-icon>
      <p>md</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="warn" size="lg"></n22-icon>
      <p>lg</p>
    </div>
  </div>
</template>

<script>import {Icon} from 'al-mobile'

export default {
  name: 'icon-demo',
  /* DELETE */
  title: '大小',
  titleEnUS: 'Icon size',
  background: '#fff',
  /* DELETE */
  components: {
    [Icon.name]: Icon,
  },
}
</script>
