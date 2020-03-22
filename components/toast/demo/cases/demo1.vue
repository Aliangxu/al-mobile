<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-1">
    <n22-button @click="showSucceedToast">成功</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '成功',
  titleEnUS: 'Success',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showSucceedToast() {
      Toast.succeed('操作成功')
    },
  },
}
</script>
