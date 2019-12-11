<template>
  <div class="n22-example-child n22-example-child-codebox n22-example-child-codebox-0">
    <n22-codebox
      v-model="code"
      :maxlength="4"
      autofocus
    />
  </div>
</template>

<script>
import {Codebox} from 'al-mobile'

export default {
  name: 'codebox-demo',
  components: {
    [Codebox.name]: Codebox,
  },
  data() {
    return {
      code: '1234',
    }
  },
}

</script>
