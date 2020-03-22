<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-0">
    <n22-radio name="0" v-model="checked" label="单选项1" />
    <n22-radio name="1" v-model="checked" label="单选项2" />
  </div>
</template>

<script>import {Radio} from 'al-mobile'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '普通单选项',
  titleEnUS: 'Normal radio',
  /* DELETE */
  components: {
    [Radio.name]: Radio,
  },
  data() {
    return {
      checked: '0',
    }
  },
}
</script>
