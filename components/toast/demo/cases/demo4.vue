<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-3">
    <n22-button @click="start">连续调用</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '连续调用',
  titleEnUS: 'Continuous call',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    start() {
      Toast.loading('载入中')
      setTimeout(() => {
        Toast.hide()
        setTimeout(() => {
          Toast.failed('载入失败')
        }, 10)
      }, 500)
    },
  },
}
</script>
