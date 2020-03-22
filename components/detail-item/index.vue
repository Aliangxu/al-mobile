<template>
  <div class="n22-detail-item" :class="{ 'is-bold': bold }">
    <slot name="left"></slot>
    <div class="n22-detail-title">
      {{ title }}
      <slot name="title-right"></slot>
    </div>
    <div class="n22-detail-content">
      <slot>{{ content }}</slot>
    </div>
  </div>
</template>

<script>export default {
  name: 'n22-detail-item',

  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: [String, Number],
      default: '',
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
.n22-detail-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.35;
  font-size: detail-item-font-size;
  padding-top: detail-item-gap;
  padding-bottom: detail-item-gap;
}

.n22-detail-title {
  flex-shrink: 0;
  color: detail-item-title-color;
}

.n22-detail-content {
  flex: 1 1 0%;
  color: detail-item-content-color;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: h-gap-sm;
}

.n22-detail-item {
  &.is-bold {
    .n22-detail-title, .n22-detail-content {
      font-weight: bold;
      color: detail-item-content-color;
    }
  }
}
</style>
