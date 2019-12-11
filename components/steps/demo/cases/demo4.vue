<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-4">
    <n22-steps
      :steps="steps"
      :current="currentStep"
      transition
    >
    </n22-steps>
  </div>
</template>

<script>
import {Steps} from 'al-mobile'

export default {
  name: 'steps-demo',
  /* DELETE */
  title: '进度变化动效 <a href="javascript:window.triggerSteps0()">current = 2</a>',
  titleEnUS: 'Transition of rogress changes <a href="javascript:window.triggerSteps0()">current = 2</a>',
  height: 150,
  /* DELETE */
  components: {
    [Steps.name]: Steps,
  },
  mounted() {
    window.triggerSteps0 = () => {
      this.currentStep = 2
    }
  },
  data() {
    return {
      steps: [
        {
          name: '登录',
        },
        {
          name: '开通',
        },
        {
          name: '验证',
        },
        {
          name: '成功',
        },
      ],
      currentStep: 0,
    }
  },
}

</script>
