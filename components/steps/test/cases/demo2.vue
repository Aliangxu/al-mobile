<template>
  <div class="n22-example-child n22-example-child-steps n22-example-child-steps-2">
    <n22-steps
      :steps="steps"
      :current="2"
    >
      <template slot="reached" slot-scope="props">
        <!-- props.index -->
        <n22-icon name="checked" v-if="props.index === 1"></n22-icon>
        <div class="step-node-default" v-else></div>
      </template>
      <template slot="current" slot-scope="props">
        <n22-icon name="location"></n22-icon>
      </template>
    </n22-steps>
  </div>
</template>

<script>
import {Steps, Icon} from 'al-mobile'

export default {
  name: 'steps-demo',
  components: {
    [Steps.name]: Steps,
    [Icon.name]: Icon,
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