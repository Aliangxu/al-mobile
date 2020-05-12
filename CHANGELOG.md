---
title: 更新日志
toc: hidden
---

### 0.0.25

`2020-05-06`

- Feat
  - `Dialog`属性`title`、`btn`，由v-text修改为v-html，因此0.0.25版本可以使用String或者vnode
- Fix
  - `head`修复头部样式污染n22-icon样式问题
  - `switch-item`修复changeData改变回掉事件中，第二个参数value值错误问题

### 0.0.24

`2020-05-06`

- Fix
  - `content`修复tab中isMescrollUp
  - `switch-item`修复没有options时，true跟false的boolearn值回显赋值问题（mounted赋值错误）
  - `switch-item`修复changeData改变回掉事件中，第二个参数value值错误问题

### 0.0.23

`2020-04-12`

- Feat
  - `TabBar`新增key、value自定义属性值
- Fix
  - `radio`修复
  - `dom`修复dom距离

### 0.0.22

`2020-04-04`

- Feat
  - `radio-item`增加属性`plain`镂空属性
  - `drop-select-item`增加统一表单滑动选择器demo实例

- Fix
  - `drop-select-item`修复type为single时赋初始值不显示问题
  - `drop-select-item`修复type为work时三级职业回显问题
  - `check-group`修复itemObject参数
  - `check`修复check选中icon参数
  - `picker`修复picker demo显示问题