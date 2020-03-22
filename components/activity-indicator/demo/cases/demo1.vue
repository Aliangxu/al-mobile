<template>
  <div class="n22-example-child n22-example-child-n22-activity-indicator n22-example-child-n22-activity-indicator-1">
    <n22-activity-indicator
      type="spinner"
      :size="30"
      :text-size="20"
    >加载中...</n22-activity-indicator>
    <div class="activity-indicator-container">
      <n22-activity-indicator
        class="n22-activity-indicator-css"
        type="spinner"
        :size="30"
        :text-size="20"
        color="light"
      >加载中...</n22-activity-indicator>
    </div>
	</div>
</template>

<script>import {ActivityIndicator} from 'al-mobile'

export default {
  name: 'activity-indicator-demo',
  title: 'Spinner',
  components: {
    [ActivityIndicator.name]: ActivityIndicator,
  },
}
</script>

<style lang="stylus">
.n22-example-child-n22-activity-indicator-1
  display flex
  flex-direction column
  align-items center
  .n22-activity-indicator
    margin-bottom 15px
  .activity-indicator-container
    margin-bottom 15px
    padding 8px 10px
    background rgba(0, 0, 0, .7)
    border-radius 4px
    .n22-activity-indicator-css
      margin-bottom 0
      .n22-activity-indicator-svg
        width 20px !important
        height 20px !important
      .n22-activity-indicator-text
        font-size 14px !important
</style>