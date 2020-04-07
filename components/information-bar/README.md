---
title: InformationBar 全局咨询导航
preview: https://aliangxu.github.io/al-mobile/examples/#/information-bar
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

| 参数 | 说明 | 类型 | 默认值 | 备注 |
|------|------|------|------|------|
| leftIcon | svg图标 | `String` | - | - |
| leftImg | 图标 | `String` | - | - |
| direction | 咨询滚动方向 | `Boolean` | 默认vertical-垂直滚动，horizontal-水平滚动 | - |
| informationList | 咨询数据 | `Array` | 数据结构参考组件内的default | 咨询样例如下 |
| url | 跳转链接 | `String` | - | - |


##### informationList样例
|属性 | 说明 | 类型| 备注|
|-----|-----|-----|-----|
|label|滚动咨询前logo后的方框-文字文本|String|-|
|labelColor|滚动咨询前logo后的方框-文字颜色|String|-|
|content|滚动咨询内容|String|-|
|contentColor|滚动咨询内容颜色|String|-|
|url|滚动咨询跳转url|String| - |

```
[{
    label: 'N22咨询',
    labelColor: 'red',
    content: '欢迎使用N22在线培训考试系统，系统正在持续开放中，敬请期待。',
    contentColor: 'black',
    url: '/',
}]
```

#### Content Instance Methods

##### @goLink({ url })
注入跳转方法