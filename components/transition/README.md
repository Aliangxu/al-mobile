---
title: Transition 动画
preview: https://aliangxu.github.io/al-mobile/examples/#/transition
---

复用动画切换组件

### 引入

```javascript
import { Transition } from 'al-mobile'

Vue.component(Transition.name, Transition)
```

### 代码演示
<!-- DEMO -->

### API
`n22-transition`组件为Vue内置`transtion`的一层封装，支持所有Transition的属性参数。

其中内置动画`name`参数如下：

- `n22-fade`
- `n22-fade-up`
- `n22-fade-down`
- `n22-fade-left`
- `n22-fade-right`
- `n22-slide-up`
- `n22-slide-down`
- `n22-slide-left`
- `n22-slide-right`
- `n22-bounce`
- `n22-punch`
- `n22-zoom`

