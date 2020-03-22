---
title: InformationBar 全局咨询导航
preview: https://qiaoxiyan.com/al-mobile/examples/#/information-bar
---

全局咨询导航

### 引入

```javascript
import { InformationBar } from 'al-mobile'

Vue.component(InformationBar.name, InformationBar)
```

### 代码演示
<!-- DEMO -->

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| leftIcon | svg图标 | `String` | - | - |
| leftImg | 图标 | `String` | - | - |
| direction | 咨询滚动方向 | `Boolean` | 默认vertical-垂直滚动，horizontal-水平滚动 | - |
| informationList | 咨询数据 | `Array` | 数据结构参考组件内的default | - |
| url | 跳转链接 | `String` | - | - |

##### @goLink({ url })
图片选择完成事件，还未开始读取

|属性 | 说明 | 类型| 备注|
|-----|-----|-----|-----|
|url|跳转url|String|-|