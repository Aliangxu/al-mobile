<template>
  <div class="n22-example-child n22-example-child-icon n22-example-child-icon-3">
    <div class="n22-example-item-s">
      <n22-icon name="security" color="gray"></n22-icon>
      <p>gray</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="security" color="orange"></n22-icon>
      <p>orange</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="security" color="blue"></n22-icon>
      <p>blue</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="security" color="purple"></n22-icon>
      <p>purple</p>
    </div>
  </div>
</template>

<script>
import {Icon} from 'al-mobile'

export default {
  name: 'icon-demo',
  /* DELETE */
  title: '颜色',
  titleEnUS: 'Icon color',
  background: '#fff',
  /* DELETE */
  components: {
    [Icon.name]: Icon,
  },
}

</script>
