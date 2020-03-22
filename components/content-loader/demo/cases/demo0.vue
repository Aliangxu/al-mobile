<template>
  <div class="n22-example-child n22-example-child-single-component">
    <div class="container">
      <ContentLoader :height="90">
         <rect x="55" y="5" rx="3" ry="3" width="90" height="5"/>
         <rect x="160" y="7" rx="3" ry="3" width="30" height="5"/>
         <rect x="55" y="20" rx="3" ry="3" width="75" height="5"/>
         <rect x="145" y="20" rx="3" ry="3" width="45" height="5"/>
         <rect x="55" y="33" rx="3" ry="3" width="50" height="5"/>
         <rect x="5" y="3" rx="3" ry="3"  width="45" height="35"/>
      </ContentLoader>
    </div>
	</div>
</template>

<script>import {ContentLoader} from 'al-mobile'

export default {
  name: 'content-loader-demo-0',
  /* DELETE */
  title: '基本',
  titleEnUS: 'Basic',
  message: '使用vue-content-loader组件库',
  messageEnUS: 'use vue-content-loader',
  /* DELETE */
  components: {
    [ContentLoader.name]: ContentLoader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.n22-example-child-single-component
  .container
    margin 0 auto
    width 640px
</style>
