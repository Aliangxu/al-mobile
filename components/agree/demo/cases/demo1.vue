<template>
  <div class="n22-example-child n22-example-child-agree n22-example-child-1">
    <n22-agree
      v-model="agreeConf.checked"
      :disabled="agreeConf.disabled"
      :size="agreeConf.size"
      @change="onChange(agreeConf.name, agreeConf.checked, $event)"
    >
      本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意
    </n22-agree>
  </div>
</template>

<script>
import {Agree} from 'al-mobile'

export default {
  name: 'agree-demo',
  /* DELETE */
  title: '未选中状态',
  titleEnUS: 'Unselected state',
  height: 120,
  /* DELETE */
  components: {
    [Agree.name]: Agree,
  },
  data() {
    return {
      agreeConf: {
        checked: false,
        name: 'agree1',
        size: 'md',
        disabled: false,
        introduction: '未选中状态',
      },
    }
  },
  methods: {
    onChange(name, checked) {
      console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    },
  },
}

</script>