<template>
  <div class="n22-example-child n22-example-child-textarea n22-example-child-textarea-0">
    <n22-textarea></n22-textarea>
  </div>
</template>

<script>
import {Textarea} from 'al-mobile'

export default {
  name: 'tips-demo',
  /* DELETE */
  title: '上方',
  titleEnUS: 'Top',
  /* DELETE */
  components: {
    [Tip.name]: Tip,
    [Button.name]: Button,
  },
}

</script>
