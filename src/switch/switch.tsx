import { defineComponent } from 'vue'
import { SwitchProps, switchProps } from './switch-type'
import './switch.scss'

export default defineComponent({
  name: 'FSwitch',
  props: switchProps,
  emits: ['update:modelValue'],
  setup(props: SwitchProps, { emit }) {
    return () => (
      <div
        class={[
          's-switch',
          props.modelValue ? 'is-checked' : '',
          props.disabled || props.loading ? 'is-disabled' : '',
          props.size ? `s-switch--${props.size}` : ''
        ]}
      >
        <input
          type="checkbox"
          class="s-switch__input"
          checked={props.modelValue}
        />
        {props.inactiveText && (
          <span
            class={[
              's-switch__label',
              's-switch__label--left',
              !props.modelValue ? 'is-active' : ''
            ]}
          >
            {props.inactiveText}
          </span>
        )}
        <span
          class="s-switch__core"
          onClick={() => {
            if (props.disabled || props.loading) return
            emit('update:modelValue', !props.modelValue)
          }}
        >
          <div class="s-switch__action">
            {props.loading && <f-icon name="loading"></f-icon>}
          </div>
        </span>
        {props.activeText && (
          <span
            class={[
              's-switch__label',
              's-switch__label--right',
              props.modelValue ? 'is-active' : ''
            ]}
          >
            {props.activeText}
          </span>
        )}
      </div>
    )
  }
})
