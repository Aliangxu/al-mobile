<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-3">
    <n22-button @click="showLoadingToast">载入</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '载入',
  titleEnUS: 'Loading',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showLoadingToast() {
      Toast.loading('加载中...')
      setTimeout(() => {
        Toast.hide()
      }, 3000)
    },
  },
}
</script>
