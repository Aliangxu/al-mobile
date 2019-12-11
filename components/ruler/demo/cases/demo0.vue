<template>
  <div class="n22-example-child n22-example-child-single-component">
    <p>当前值：{{ value }}</p>
    <div class="container">
      <n22-ruler
        :scope="scope"
        :step="100"
        :unit="10"
        v-model="value"
      ></n22-ruler>
    </div>
	</div>
</template>

<script>
import {Ruler} from 'al-mobile'

export default {
  name: 'ruler-demo-0',
  /* DELETE */
  title: '基本',
  titleEnUS: 'Basic',
  message: '请在移动设备中扫码预览',
  messageEnUS: 'Please scan QR code and preview on mobile device',
  /* DELETE */
  components: {
    [Ruler.name]: Ruler,
  },
  data() {
    return {
      value: 1000,
      scope: [1000, 2000],
    }
  },
}

</script>

<style lang="stylus" scoped>
.n22-example-child-single-component
  .container
    margin 0 auto
    width 640px
</style>
