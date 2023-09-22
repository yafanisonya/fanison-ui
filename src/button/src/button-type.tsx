import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type IButtonSize = 'large' | 'default' | 'small'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
