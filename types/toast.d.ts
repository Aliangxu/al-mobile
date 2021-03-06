import { AlComponent } from './component'

export type ToastOptions = {
  content: string
  duration?: number
  parentNode?: Element,
  hasMask?: boolean
}

export type ToastConstructorOptions = {
  icon?: string,
  position?: string
} & ToastOptions

export interface Toast {
  (options?: ToastConstructorOptions): void
  info(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  succeed(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  failed(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  loading(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  hide(): void
  component: AlComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast
  }
}

export const Toast: Toast
