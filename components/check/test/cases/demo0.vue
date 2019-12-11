<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-0">
    <n22-check v-model="checked" label="复选项" />
    <n22-check label="禁用" disabled />
	</div>
</template>

<script>
import {Check} from 'al-mobile'

export default {
  name: 'check-demo',
  title: '复选项',
  components: {
    [Check.name]: Check,
  },
  data() {
    return {
      checked: false,
    }
  },
}

</script>
