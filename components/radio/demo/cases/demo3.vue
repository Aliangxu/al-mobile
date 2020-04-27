<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-3">
    <n22-radio-group v-model="favorites">
      <n22-radio name="watermelon" label="西瓜"/>
      <n22-radio name="apple" label="苹果" />
      <n22-radio name="banana" label="香蕉" />
      <n22-radio name="orange" label="橙子" />
      <n22-radio name="tomato" label="西红柿" disabled />
    </n22-radio-group>
  </div>
</template>

<script>
import {RadioGroup} from 'al-mobile'
import Radio from 'al-mobile/components/radio/indexm'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '单选项组',
  titleEnUS: 'Radio group',
  align: 'left',
  /* DELETE */
  components: {
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
  },
  data() {
    return {
      favorites: 'apple',
    }
  },
}

</script>
