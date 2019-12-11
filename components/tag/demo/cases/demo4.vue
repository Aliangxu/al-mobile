<template>
  <div class="n22-example-child n22-example-child-tag n22-example-child-tag-3">
    <n22-tag
      size="large"
      shape="coupon"
      fill-color="#FC9153"
      type="fill"
      font-color="#fff"
      style="margin-right:20px;"
    >免息券70.1</n22-tag>
    <n22-tag
      size="large"
      shape="quarter"
      fill-color="#FC9153"
      type="fill"
      font-color="#fff"
      style="margin-right:20px;"
    >
      <n22-icon name="right"></n22-icon>
    </n22-tag>
    <n22-tag
      size="large"
      shape="bubble"
      fill-color="linear-gradient(90deg, #FF5B60 0%, #F98472 100%)"
      type="fill"
    >99</n22-tag>
  </div>
</template>

<script>
import {Tag, Icon} from 'al-mobile'

export default {
  name: 'tag-demo',
  /* DELETE */
  title: '特殊标签',
  titleEnUS: 'Special tags',
  /* DELETE */
  components: {
    [Tag.name]: Tag,
    [Icon.name]: Icon,
  },
}

</script>
