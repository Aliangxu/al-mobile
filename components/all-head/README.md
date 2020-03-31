---
title: head 布局头部
preview: https://aliangxu.github.io/al-mobile/examples/#/al-all-head
---

用于整体布局的头部处理

### 引入

```javascript
import { Allhead } from 'al-mobile'

Vue.component(Allhead.name, Allhead)
```

### 代码演示
<!-- DEMO -->

### API

#### Allhead Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|title|头部标题|String|`meta.title`|title="search_all"时为头部搜索框|
|fixed|是否fixed布局|Boolean|`true`|-|
|leftText|左边文字内容|String|-|-|
|leftTextIcon|左边icon图标|String|`back`|icon图标使用请参考components的icon组件|
|rightText|右边文字内容|String|-|-|
|rightTextIcon|右边icon图标|String|``|icon图标使用请参考components的icon组件|
|border|边框|Boolean|`true`|-|
|zIndex|z-index|Number|`1`|-|
|headBottom|头部高度|Boolean|`true`|-|
|opacityStyle|头部实现渐进变化透明的样式对象|Object|``|目前只是用了对象中的backgroundColor、textColor|

|searchFocusDefault|是否启用默认的顶部搜索框的弹出事件|Boolean|`true`|配合title="search_all"使用|
|searchAutoFocus|搜索框是否自动聚焦|Boolean|`false`|search组件中的searchAutoFocus是为true的|
|placeholder|搜索框的placeholder|String|`请输入关键字`|-|
|value|绑定的搜索框的value|-|-|v-modal绑定的数值|
|backUrl|this.back的返回参数|-|-|-|


#### tab-bar Props



#### Allhead Slots

##### left
左侧插槽

##### title
标题内容插槽

##### right
右侧插槽

##### head_bottom
底部插槽

##### @click-left()
左侧点击

##### @click-right()
右侧点击