<template>
  <div class="n22-example-child n22-example-child-icon n22-example-child-icon-1">
    <div class="n22-example-item-s">
      <n22-icon name="spinner" size="lg" style="-webkit-filter:invert(1)"></n22-icon>
      <p>spinner</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="success-color" size="lg" svg></n22-icon>
      <p>success-color</p>
    </div>
    <div class="n22-example-item-s">
      <n22-icon name="warn-color" size="lg" svg></n22-icon>
      <p>warn-color</p>
    </div>
  </div>
</template>

<script>
import {Icon} from 'al-mobile'

export default {
  name: 'icon-demo',
  components: {
    [Icon.name]: Icon,
  },
}

</script>
