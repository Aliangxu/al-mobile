<template>
  <div class="n22-example-child n22-example-child-n22-activity-indicator n22-example-child-n22-activity-indicator-0">
    <n22-activity-indicator
      :size="20"
      :text-size="16"
    >加载中...</n22-activity-indicator>
    <n22-activity-indicator
      :size="20"
      :text-size="16"
      vertical
    >vertical loading</n22-activity-indicator>
    <n22-activity-indicator
      class="n22-activity-indicator-css"
    >loading...</n22-activity-indicator>
	</div>
</template>

<script>import {ActivityIndicator} from 'al-mobile'

export default {
  name: 'activity-indicator-demo',
  title: 'Roller',
  components: {
    [ActivityIndicator.name]: ActivityIndicator,
  },
}
</script>

<style lang="stylus">
.n22-example-child-n22-activity-indicator-0
  display flex
  flex-direction column
  align-items center
  .n22-activity-indicator
    margin-bottom 15px
    &.n22-activity-indicator-css
      .n22-activity-indicator-svg
        width 30px !important
        height 30px !important
      .n22-activity-indicator-text
        font-size 16px
</style>