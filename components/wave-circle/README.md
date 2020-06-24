---
title: WaveCircle 全局波浪进度组件
preview: https://aliangxu.github.io/al-mobile/examples/#/wave-circle
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
|v-modal|进度值|Number|`0`|`0-1`|
|sizeC|圆环大小|Number|`70`|单位`px`|
|widthC|圆环宽度|Number|-|单位`px`|
|circle-title|圆环内部文本显示内容|String|-|-|
|isLoadCircle|显示模式|Boolearn|false|如果为true则显示`process`组件|
|boundary|分界线--例如当及格分用|Number|`60`|-|
|boundaryUpColor|分界线以上的样式颜色|String|`#FFFFFF`|-|
|boundaryDownColor|分界线以下的样式颜色|String|`#FFFFFF`|-|


#### 圆盘底部到顶部135+65=200px
200px即为满
例如：使用组件为100分的情况，则没一分对应2px