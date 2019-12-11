<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-0">
    <n22-steps :steps="steps"></n22-steps>
  </div>
</template>

<script>
import {Steps} from 'al-mobile'

export default {
  name: 'steps-demo',
  /* DELETE */
  height: 150,
  /* DELETE */
  components: {
    [Steps.name]: Steps,
  },
  data() {
    return {
      steps: [
        {
          name: '登录/注册',
        },
        {
          name: '申请征信报告',
        },
        {
          name: '提取征信报告',
        },
      ],
    }
  },
}

</script>