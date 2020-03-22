<template>
  <div class="n22-example-child n22-example-child-n22-activity-indicator n22-example-child-n22-activity-indicator-2">
    <n22-activity-indicator
      type="carousel"
      :size="15"
    ></n22-activity-indicator>
    <n22-button type="primary" @click="createPay">
      <n22-activity-indicator
        v-if="loading"
        class="n22-activity-indicator-css"
        type="carousel"
        :size="15"
        color="#fff"
        text-color="#fff"
      ></n22-activity-indicator>
      <span v-else>确认支付</span>
    </n22-button>
	</div>
</template>

<script>import {ActivityIndicator, Button} from 'al-mobile'

export default {
  name: 'activity-indicator-demo',
  title: 'Carousel',
  components: {
    [ActivityIndicator.name]: ActivityIndicator,
    [Button.name]: Button,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    createPay() {
      if (this.loading) {
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>

<style lang="stylus">
.n22-example-child-n22-activity-indicator-2
  display flex
  flex-direction column
  align-items center
  .n22-activity-indicator
    margin-bottom 30px
  .n22-button
    width 100%
    .n22-activity-indicator-css
      margin-bottom 0
      .n22-activity-indicator-svg
        height 15px !important
</style>