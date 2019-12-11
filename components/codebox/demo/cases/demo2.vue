<template>
  <div class="n22-example-child n22-example-child-codebox n22-example-child-codebox-2">
    <n22-codebox
      :maxlength="-1"
      v-model="code"
    />
  </div>
</template>

<script>
import {Codebox} from 'al-mobile'

export default {
  name: 'codebox-demo',
  /* DELETE */
  title: '不限长度',
  titleEnUS: 'Unlimited length',
  /* DELETE */
  components: {
    [Codebox.name]: Codebox,
  },
  data() {
    return {
      code: '',
    }
  },
}

</script>
