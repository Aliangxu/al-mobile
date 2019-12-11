---
title: work 职业专用三级以上组件
preview: xxxxxxxyyyyy
---

用于职业的专属应用组件

### 引入

```javascript
import { Work } from 'al-mobile'

Vue.component(Work.name, Work)
```

### 代码演示
<!-- DEMO -->

### API

#### Tag Props
|属性 | 说明 | 类型 | 默认值 | 说明 |
|----|-----|------|------|------|
|levelArrayProp|码表code拆分级别|Array|`[2,4]`|-|
|disabled|使用可选|Boolearn|`false`|-|
|v-modal|选中最后一级值|Object|-|-|
|data|码表数组|Array|`[]`|数组形式为三级嵌套数组形式，`[[],[],[]]`|
|isAppendTo|是挂载dom显示还是内联显示|Boolearn|`true`|默认挂载dom显示|
|notSelectIdf|无法点击时提示toast-title|String|``|-|
|isShowSearch|是否启用搜索|Boolearn|`false`|暂时未开发搜索功能|
