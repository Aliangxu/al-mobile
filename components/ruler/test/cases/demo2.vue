<template>
  <div class="n22-example-child n22-example-child-single-component">
    <p>当前值：{{ value }}</p>
    <div class="container">
      <n22-ruler
        :scope="scope"
        :step="100"
        :unit="10"
        :max="2000"
        :min="1000"
        v-model="value"
      ></n22-ruler>
    </div>
  </div>
</template>

<script>
import {Ruler} from 'al-mobile'

export default {
  name: 'ruler-demo',
  components: {
    [Ruler.name]: Ruler,
  },
  data() {
    return {
      value: 1300,
      scope: [1000, 2000],
    }
  },
  mounted() {
    window.triggerRuler2 = () => {
      this.value = 1500
    }
  },
}

</script>
n22-
<style lang="stylus" scoped>
  .md-example-child-single-component
    .container
      margin 0 auto
      width 640px
</style>
