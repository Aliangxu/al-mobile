---
title: WaveCircle 全局波浪进度组件
preview: https://qiaoxiyan.com/al-mobile/examples/#/wave-circle
---

用于表示分数等...

### 引入

```javascript
import { WaveCircle } from 'al-mobile'

Vue.component(WaveCircle.name, WaveCircle)
```

### 代码演示
<!-- DEMO -->

### API

#### WaveCircle Props
|属性 | 说明 | 类型 | 默认值 |可选值|
|----|-----|------|------|------|
|value|进度值|Number|`0`|`0-1`|
|size|圆环大小|Number|`70`|单位`px`|
|width|圆环宽度|Number|-|单位`px`|
|color|圆环高亮颜色|String|`#fc9153`|-|
|border-color|圆环颜色|String|`rgba(0, 0, 0, .1)`|-|
|fill|圆环内部填充|String|`transparent`|-|
|linecap|圆环两端形状|String|`round`|`round`, `butt`|
|rotate|圆环旋转|Number|`0`|-|
|transition|进度变化是否使用动效|Boolean|`false`|-|
|duration|进度变化动效时长|Number|`1000`|单位`ms`|
|boundary|分界线--例如当及格分用|Number|`60`|-|
|boundaryUpColor|分界线以上的样式颜色|String|`#FFFFFF`|-|
|boundaryDownColor|分界线以下的样式颜色|String|`#FFFFFF`|-|


#### 圆盘底部到顶部135+65=200px
200px即为满
例如：使用组件为100分的情况，则没一分对应2px