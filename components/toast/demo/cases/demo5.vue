<template>
  <div class="n22-example-child n22-example-child-toast n22-example-child-toast-1">
    <n22-button @click="showToast">长文字</n22-button>
    <div style="font-size:14px;">下面设置maxTextNum-15>>>默认一般一行为15个字符,此处设置为15个字符，15之后的会被省略</div>
    <n22-button @click="showToast15">showToast15</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '长文字',
  titleEnUS: 'Long text',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showToast() {
      Toast.succeed('所有文案部分字数最多展示默认为40个字符，可以根据传入的maxTextNum自定义调整。')
    },
    showToast15() {
      Toast.succeed('此处设置为15个字符，15之后的会被省略！！！', 15)
    },
  },
}
</script>
