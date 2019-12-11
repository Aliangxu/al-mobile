<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-7">
    <n22-steps
      direction="vertical"
      :steps="steps"
      :current="1"
      vertical-adaptive
    >
    </n22-steps>
  </div>
</template>

<script>
import {Steps} from 'al-mobile'

export default {
  name: 'steps-demo',
  /* DELETE */
  title: '纵向展示',
  titleEnUS: 'Specify the current step',
  height: 150,
  /* DELETE */
  components: {
    [Steps.name]: Steps,
  },
  data() {
    return {
      steps: [
        {
          name: '登录',
          text: '这是登录的描述',
        },
        {
          name: '开通',
          text: '这是开通的描述',
        },
        {
          name: '验证',
          text: '这是验证的描述',
        },
        {
          name: '成功',
          text: '这是成功的描述',
        },
      ],
    }
  },
}

</script>

<style lang="stylus">
.n22-example-child-steps-7 .n22-steps
  height 420px
</style>
