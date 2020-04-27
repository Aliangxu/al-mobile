<template>
  <div class="n22-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'n22-radio-group',

  props: {
    value: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: 0,
    },
  },

  provide() {
    return {
      rootGroup: this,
    }
  },

  methods: {
    check(name) {
      this.$emit('input', name)
    },
  },
}

</script>

