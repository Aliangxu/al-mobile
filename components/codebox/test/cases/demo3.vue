<template>
  <div class="n22-example-child n22-example-child-codebox n22-example-child-codebox-3">
    <n22-codebox
      :maxlength="-1"
      v-model="code"
      system
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
