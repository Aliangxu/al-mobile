<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-7">
    <n22-toast ref="toast">
      <n22-activity-indicator
        :size="20"
        :text-size="16"
        color="yellow"
        text-color="white"
      >loading...</n22-activity-indicator>
    </n22-toast>
    <n22-button @click="showTextToast">定制Toast</n22-button>
  </div>
</template>

<script>import {Toast, Button, ActivityIndicator} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '定制Toast',
  titleEnUS: 'Customize toast',
  /* DELETE */
  components: {
    [Toast.component.name]: Toast.component,
    [Button.name]: Button,
    [ActivityIndicator.name]: ActivityIndicator,
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    showTextToast() {
      if (this.isShow) {
        this.$refs.toast.hide()
        this.isShow = false
      } else {
        this.$refs.toast.show()
        this.isShow = true
      }
    },
  },
}
</script>
