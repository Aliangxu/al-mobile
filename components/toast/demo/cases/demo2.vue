<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-2">
    <n22-button @click="showSucceedToast">失败</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '失败',
  titleEnUS: 'Failure',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showSucceedToast() {
      Toast.failed('操作失败')
    },
  },
}
</script>
