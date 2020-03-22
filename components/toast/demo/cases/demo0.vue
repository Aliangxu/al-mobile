<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-0">
    <n22-button @click="showTextToast">纯文字</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '纯文字',
  titleEnUS: 'Plain text',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showTextToast() {
      Toast.info('一段文字')
    },
  },
}
</script>
