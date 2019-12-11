<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-6">
    <n22-steps
      :steps="steps"
      :current="currentStep"
    >
    </n22-steps>
  </div>
</template>

<script>
import {Steps} from 'al-mobile'

export default {
  name: 'steps-demo',
  /* DELETE */
  title: '完成全部步骤',
  titleEnUS: 'Complete all steps',
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
      currentStep: 4,
    }
  },
}

</script>
