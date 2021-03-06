---
title: Agree 勾选按钮
preview: https://aliangxu.github.io/al-mobile/examples/#/agree
---

用于标记切换某种状态，如协议勾选

### 引入

```javascript
import { Agree } from 'al-mobile'

Vue.component(Agree.name, Agree)
```

### 代码演示
<!-- DEMO -->

### API

#### Agree Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|v-model|是否选中|Boolean|`false`|-|
|disabled|是否禁用|Boolean|`false`|-|
|size|按钮大小|String|`md`|可选值参考组件`Icon`|
|check|未选中svg|String|`check`|-|
|checked|选中svg|String|`checked`|-|
|isContentClick|内容区是否可点击触发check的点击|Boolean|`false`|-|

#### Agree Events

##### @change(name, checked)
勾选状态发生变化事件

|属性 | 说明 | 类型 |
|----|-----|------|
|name|单选按钮名称，唯一标识|Number/String|
|checked|是否选中|Boolean|
