<template>
  <div class="n22-example-child n22-example-child-tag n22-example-child-tag-1">
    <n22-tag
      size="large"
      shape="fillet"
      type="fill"
      fill-color="rgba(255, 91, 96, .1)"
      font-weight="normal"
      font-color="#FF5B60"
    >逾期23天</n22-tag>
  </div>
</template>

<script>
import {Tag} from 'al-mobile'

export default {
  name: 'tag-demo',
  components: {
    [Tag.name]: Tag,
  },
}

</script>