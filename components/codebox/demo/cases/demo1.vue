<template>
  <div class="n22-example-child n22-example-child-codebox n22-example-child-codebox-1">
    <n22-codebox
      :mask="true"
      :maxlength="6"
      v-model="code"
    />
  </div>
</template>

<script>
import {Codebox} from 'al-mobile'

export default {
  name: 'codebox-demo',
  /* DELETE */
  title: '掩码遮蔽',
  titleEnUS: 'Character mask',
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
