---
title: list-tabs 标签栏
---

用于创建不含内容区域的标签栏

### 引入

```javascript
import { ListTabs } from '@/compoments'

Vue.component(ListTabs.name, ListTabs)
```


### 代码演示
<!-- DEMO -->

### API

#### ListTabs Props
|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|tabWidth|每个tab的宽度|Number|`40`| - |
|curIndex|当前列表index|Number|`0`| - |
|barWidth|tab底部红色线的宽度|Number|`10`| - |
|swiperTop|顶部距离高度|Array|`[]`|-|
|tabs|列表数组|Array|`[{ name: "默认单个列表不展示", mescroll: null, list: [], isListInit: false }]`| - |
|secMenuAnm|二级菜单动画|String|``| - |

#### ListTabs Slots

#### default
默认内容插槽

#### ListTabs Events

##### @close()
通告栏关闭事件（设置`mode`为`closable`）

