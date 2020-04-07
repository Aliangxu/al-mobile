<template>
  <div class="n22-example-child n22-example-child-drop-menu n22-example-child-drop-menu-3">
    <n22-drop-menu :data="data">
      <template slot-scope="{ option }">
        <div class="n22-drop-menu-custom-title" v-text="option.text"></div>
        <div class="n22-drop-menu-custom-brief">{{ option.text }}【可使用slot-scope进行自定义描述】</div>
      </template>
    </n22-drop-menu>
    <div class="content">正文区域</div>
  </div>
</template>

<script>
import {DropMenu} from 'al-mobile'

export default {
  name: 'drop-menu-demo',
  /* DELETE */
  title: '自定义菜单项',
  titleEnUS: 'Custom menu options',
  height: 250,
  /* DELETE */
  components: {
    [DropMenu.name]: DropMenu,
  },
  data() {
    return {
      isContentShow: false,
      data: [
        {
          text: '一级选项1',
          options: [
            {
              value: '0',
              text: '二级选项1',
            },
            {
              value: '1',
              text: '二级选项2',
            },
          ],
        },
      ],
    }
  },
}

</script>

<style lang="stylus">
.n22-example-child-drop-menu-3
  .n22-drop-menu-custom-title
    font-size 28px
    text-align center
  .n22-drop-menu-custom-brief
    font-size 20px
    color #999
    text-align center
</style>
