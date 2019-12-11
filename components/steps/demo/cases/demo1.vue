<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-1">
    <n22-steps :steps="steps" :current="1.2"></n22-steps>
  </div>
</template>

<script>
import {Steps} from 'al-mobile'

export default {
  name: 'steps-demo',
  /* DELETE */
  title: '进度非整数',
  titleEnUS: 'Non-integer progress',
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
    }
  },
}

</script>