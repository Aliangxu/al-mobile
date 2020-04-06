import Vue from 'vue'
import { AlComponent } from './component'

export type ActionSheetItem = {
  value: string,
  text: string
}

export type ActionSheetCreateOptions = {
  value?: boolean,
  title?: string,
  options: Array<ActionSheetItem>,
  defaultIndex?: number,
  invalidIndex?: number,
  cancelText?: string,
  maxHeight?: number,
  onShow?: () => void,
  onHide?: () => void,
  onSelected?: (item: ActionSheetItem) => void,
}

export interface IActionSheet {
  create(options: ActionSheetCreateOptions): Vue
  closeAll(): void
  destroyAll(): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $sheet: IActionSheet
  }
}

export class ActionSheet extends AlComponent {
  static create(options: ActionSheetCreateOptions): Vue
  static closeAll(): void
  static destroyAll(): void
}
