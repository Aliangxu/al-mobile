<template>
  <div class="n22-example-child n22-example-child-drop-menu n22-example-child-drop-menu-0">
    <n22-drop-menu :data="data" />
    <div class="content">正文区域</div>
  </div>
</template>

<script>
import {DropMenu} from 'al-mobile'

export default {
  name: 'drop-menu-demo',
  /* DELETE */
  title: '基础下拉菜单',
  titleEnUS: 'Basic drop-down menu',
  height: 250,
  /* DELETE */
  components: {
    [DropMenu.name]: DropMenu,
  },
  data() {
    return {
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
