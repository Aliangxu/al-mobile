---
title: Switch 开关
preview: https://aliangxu.github.io/al-mobile/examples/#/switch
---

开关按钮，用于表示开关状态/两种状态之间的切换

### 引入

```javascript
import { Switch } from 'al-mobile'

Vue.component(Switch.name, Switch)
```

### 代码演示
<!-- DEMO -->

### API

#### Switch Props
|属性 | 说明 | 类型 | 默认值|
|----|-----|------|------|
|v-model|打开或者关闭|Boolean|`false`|
|active-color|开关打开时候颜色|String|``|
|inactive-color|开关关闭时候颜色|String|``|

#### Switch Events

##### @change(isActive)
事件说明

|属性 | 说明 | 类型 |
|----|-----|------|
|isActive|开关状态，打开或者关闭|Boolean|
