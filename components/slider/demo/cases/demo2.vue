<template>
  <div class="n22-example-child n22-example-child-slider">
    <n22-slider v-model="quantity" :format="format"></n22-slider>
	</div>
</template>

<script>
import {Slider} from 'al-mobile'

export default {
  name: 'slider-demo',
  /* DELETE */
  title: '格式化',
  titleEnUS: 'Format',
  /* DELETE */
  components: {
    [Slider.name]: Slider,
  },
  data() {
    return {
      quantity: 50,
    }
  },
  methods: {
    format(val) {
      return '￥' + val
    },
  },
}

</script>
