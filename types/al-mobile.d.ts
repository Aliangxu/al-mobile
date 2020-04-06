import Vue from 'vue'
import { AlComponent } from './component'
import { Toast } from './toast'
import { Dialog } from './dialog'
import { ActionSheet } from './action-sheet'

export function install(vue: typeof Vue): void

export const version: string

export class ActionBar extends AlComponent { }
export class ActivityIndicator extends AlComponent { }
export class Agree extends AlComponent { }
export class Amount extends AlComponent { }
export class Bill extends AlComponent { }
export class Button extends AlComponent { }
export class Captcha extends AlComponent { }
export class Cashier extends AlComponent { }
export class CellItem extends AlComponent { }
export class Chart extends AlComponent { }
export class Check extends AlComponent { }
export class CheckBox extends AlComponent { }
export class CheckGroup extends AlComponent { }
export class CheckList extends AlComponent { }
export class Codebox extends AlComponent { }
export class DatePicker extends AlComponent { }
export class DetailItem extends AlComponent { }
export class DropMenu extends AlComponent { }
export class Field extends AlComponent { }
export class FieldItem extends AlComponent { }
export class Icon extends AlComponent { }
export class ImageReader extends AlComponent { }
export class ImageViewer extends AlComponent { }
export class InputItem extends AlComponent { }
export class Landscape extends AlComponent { }
export class NoticeBar extends AlComponent { }
export class NumberKeyboard extends AlComponent { }
export class Picker extends AlComponent { }
export class Popup extends AlComponent { }
export class PopupTitleBar extends AlComponent { }
export class Progress extends AlComponent { }
export class Radio extends AlComponent { }
export class RadioBox extends AlComponent { }
export class RadioGroup extends AlComponent { }
export class RadioList extends AlComponent { }
export class ResultPage extends AlComponent { }
export class Ruler extends AlComponent { }
export class ScrollView extends AlComponent { }
export class ScrollViewMore extends AlComponent { }
export class ScrollViewRefresh extends AlComponent { }
export class Selector extends AlComponent { }
export class Slider extends AlComponent { }
export class Stepper extends AlComponent { }
export class Steps extends AlComponent { }
export class Swiper extends AlComponent { }
export class SwiperItem extends AlComponent { }
export class Switch extends AlComponent { }
export class TabBar extends AlComponent { }
export class TabPane extends AlComponent { }
export class TabPicker extends AlComponent { }
export class Tabs extends AlComponent { }
export class Tag extends AlComponent { }
export class Tip extends AlComponent { }
export class Transition extends AlComponent { }
export class WaterMark extends AlComponent { }
export class TextareaItem extends AlComponent { }
export class Skeleton extends AlComponent { }
/* @init<%export class ${componentNameUpper} extends AlComponent { }%> */



// declare module 'mand-mobile/lib/image-reader/image-processor' {
//   export = imageProcessor
//   /**
//    * export image processor options
//    */
//   export interface ImageProcessorOptions extends imageProcessor.ImageProcessorOptions { }
//   export interface ImageProcessorData extends imageProcessor.ImageProcessorData { }
// }

export {
  Toast,
  Dialog,
  ActionSheet
}
