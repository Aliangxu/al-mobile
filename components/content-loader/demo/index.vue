<template>
  <div class="n22-example single-component">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title"></div>
      <div class="n22-example-describe" v-html="demo.describe"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'

export default {
  ...createDemoModule('single-component', [Demo0]),
}
</script>
n22-
<style lang="stylus">
.n22-example.single-component
  position relative
</style>
