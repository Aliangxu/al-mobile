<template>
  <div class="n22-example-child  n22-example-child-button n22-example-child-button-3">
    <n22-button type="link" icon="message">评论</n22-button>
    <n22-button type="link" inactive>去看看<n22-icon name="arrow-right" size="md"></n22-icon></n22-button>
  </div>
</template>

<script>
import {Button, Icon} from 'al-mobile'

export default {
  name: 'button-demo',
  /* DELETE */
  title: '文字链接按钮',
  titleEnUS: 'Text link buttons',
  align: 'right',
  /* DELETE */
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-button-3
  .n22-example-box-content
    float left
    width 100%
    padding 60px h-gap-lg
    color color-text-base
    font-size font-minor-large
    text-align left
    background color-bg-base
    box-sizing border-box
    line-height 1.5
    text-indent 2em
  .n22-button
    float left
</style>
