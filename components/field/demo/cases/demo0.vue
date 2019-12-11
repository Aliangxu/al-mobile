<template>
  <div class="n22-example-child n22-example-child-field n22-example-child-field-0">
    <n22-field title="区域标题" brief="区域描述性文本，可根据具体场景配置">
      <div class="action-container" slot="action" @click="onClick">
        操作 <n22-icon name="rectangle"></n22-icon>
      </div>
      <p slot="footer">区域页脚区域内容插槽</p>
      <n22-field-item solid title="标题区域" placeholder="提示文本" />
      <n22-field-item solid title="标题区域" content="内容文本" addon="次要信息" />
      <n22-field-item solid title="附加内容" content="正文内容">
        <p slot="children">这是子内容区域</p>
      </n22-field-item>
      <n22-field-item solid title="动作条目" arrow @click="onClick" />
      <n22-field-item solid title="禁用条目" content="内容禁用状态" arrow disabled />
    </n22-field>
  </div>
</template>

<script>
import {Field, FieldItem, Dialog, Icon} from 'al-mobile'

export default {
  name: 'field-demo',

  components: {
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Icon.name]: Icon,
  },

  data() {
    return {
      open: false,
    }
  },

  methods: {
    onClick() {
      Dialog.alert({
        content: '点击了',
      })
    },
  },
}

</script>
n22-
<stn22- lang="stylus">
.md-example-child-field-0
  .md-field-action
    height 36px
    align-items flex-end
    .action-container
      dn22-lay flex
      align-items center
      .md-icon
        margin-left 10px
        color #C5CAD5
        font-size 16px
        width auto
        height auto
        line-height normal
</style>

