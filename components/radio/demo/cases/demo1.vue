<template>
  <div class="n22-example-child n22-example-child-radio n22-example-child-radio-1">
    <n22-field>
      <n22-field-item title="婚姻状况" solid>
        <n22-radio name="2" v-model="marriage" label="已婚" inline />
        <n22-radio name="1" v-model="marriage" label="未婚" inline />
        <n22-radio name="3" v-model="marriage" label="保密" inline />
      </n22-field-item>
    </n22-field>
  </div>
</template>

<script>
import { Field, FieldItem} from 'al-mobile'
import Radio from 'al-mobile/components/radio/indexm'

export default {
  name: 'radio-demo',
  /* DELETE */
  title: '表单项内联',
  titleEnUS: 'With Field',
  align: 'left',
  /* DELETE */
  components: {
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Radio.name]: Radio,
  },
  data() {
    return {
      marriage: '2',
    }
  },
}

</script>
