<template>
  <div class="n22-example-child n22-example-child-agree n22-example-child-3">
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
  title: '未选中不可用状态',
  titleEnUS: 'Unselected and unavailable state',
  height: 120,
  /* DELETE */
  components: {
    [Agree.name]: Agree,
  },
  data() {
    return {
      agreeConf: {
        checked: false,
        name: 'agree3',
        size: 'md',
        disabled: true,
        introduction: '未选中不可用状态',
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