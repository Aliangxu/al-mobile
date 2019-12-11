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
      currentStep: 0,
    }
  },
  mounted() {
    this.currentStep = 1.5
  },
}

</script>
