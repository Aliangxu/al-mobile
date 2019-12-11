<template>
  <div class="n22-example-child n22-example-child-progress">
    <n22-progress
      :size="100"
      :value="0.2"
      :width="5"
    >
      <span class="progress-value">20%</span>
    </n22-progress>
    <n22-progress
      :size="100"
      :value="0.5"
      :width="5"
    >
      <span class="progress-value">50%</span>
    </n22-progress>
    <n22-progress
      :size="100"
      :value="1"
      :width="5"
    >
      <span class="progress-value">100%</span>
    </n22-progress>
  </div>
</template>

<script>
import {Progress} from 'al-mobile'

export default {
  name: 'progress-demo',
  components: {
    [Progress.name]: Progress,
  },
}

</script>

<style lang="stylus">
.n22-example-child-progress
  display flex
  justify-content center
  .n22-progress
    margin 0 10px
  .progress-value
    font-size 24px
    font-family DINPro-Medium
</style>
