<template>
  <div class="n22-example-child n22-example-child-tag n22-example-child-tag-2">
    <tag size="large" shape="square" font-color="#FF8843" type="ghost">可选</tag>
    <tag size="small" shape="square" font-color="#28AA91" type="ghost">可选</tag>
  </div>
</template>

<script>import {Tag} from 'al-mobile'

export default {
  name: 'tag-demo',
  /* DELETE */
  title: '线框',
  titleEnUS: 'Square',
  /* DELETE */
  components: {
    Tag,
  },
}
</script>
