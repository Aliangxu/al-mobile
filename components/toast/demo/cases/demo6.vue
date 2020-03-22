<template>
  <div
    class="n22-example-child n22-example-child-toast n22-example-child-toast-0"
  >
    <n22-button @click="showTextToast">自定义位置</n22-button>
    <n22-button @click="showMoreLineToast">提示多行</n22-button>
  </div>
</template>

<script>import {Toast, Button} from 'al-mobile'

export default {
  name: 'toast-demo',
  /* DELETE */
  title: '自定义位置',
  titleEnUS: 'Customize location',
  /* DELETE */
  components: {
    [Button.name]: Button,
  },
  methods: {
    showTextToast() {
      Toast({
        content: '自定义位置',
        position: 'bottom',
      })
    },
    showMoreLineToast() {
      // 使用<##>！中间传入数组，数组中的每个值即为一行
      let lineText = ['啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', '宝贝宝贝宝贝宝贝', '吃吃吃吃吃吃吃', '点点滴滴点点滴滴']
      Toast({
        content: `请检查完善<#${lineText}#>！`,
        position: 'center',
        duration: 3000,
      })
    },
  },
}
</script>
