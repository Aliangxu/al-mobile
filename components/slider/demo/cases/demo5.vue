<template>
  <div class="n22-example-child n22-example-child-slider">
    <n22-slider v-model="range" :min="15" :max="80" range></n22-slider>
	</div>
</template>

<script>
import {Slider} from 'al-mobile'

export default {
  name: 'slider-demo',
  /* DELETE */
  title: '边界值',
  titleEnUS: 'Min & Max',
  /* DELETE */
  components: {
    [Slider.name]: Slider,
  },
  data() {
    return {
      range: [25, 50],
    }
  },
}

</script>
