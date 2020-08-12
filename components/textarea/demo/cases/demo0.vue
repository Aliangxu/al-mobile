<template>
  <div class="n22-example-child n22-example-child-textarea n22-example-child-textarea-0">
    <n22-textarea
      :border="true"
      :maxHeight="188"
      class="my-textarea"
      placeholder="请具体描述其他问题"
    ></n22-textarea>
  </div>
</template>

<script>
import {Textarea} from 'al-mobile'

export default {
  name: 'textarea-demo',
  /* DELETE */
  title: '文本域',
  titleEnUS: 'textarea',
  /* DELETE */
  components: {
    [Textarea.name]: Textarea,
  },
}

</script>
