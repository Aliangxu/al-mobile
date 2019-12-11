<template>
  <div class="n22-example-child n22-example-child-slider">
    <n22-slider v-model="range" range></n22-slider>
	</div>
</template>

<script>
import {Slider} from 'al-mobile'

export default {
  name: 'slider-demo',
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
