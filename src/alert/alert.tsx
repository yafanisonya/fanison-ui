import { defineComponent, ref } from 'vue'
import { AlertProps, alertProps } from './alert-type'
import './alert.scss'

export default defineComponent({
  name: 'FAlert',
  props: alertProps,
  emits: ['close'],
  setup(props: AlertProps, { slots, emit }) {
    const visible = ref(true)

    const close = () => {
      visible.value = false
      emit('close')
    }

    return () =>
      visible.value ? (
        <div
          class={['s-alert', `s-alert--${props.type}`, `is-${props.effect}`]}
        >
          <div class={['s-alert__content', props.center ? 'is-center' : '']}>
            <span class="s-alert__title">{props.title}</span>
          </div>
          {props.closeText ? (
            <span class="s-alert__close-btn is-customed" onClick={close}>
              {props.closeText}
            </span>
          ) : null}
          {!props.closeText && props.closable ? (
            <f-icon
              name="closecircle"
              onClick={close}
              class="s-alert__close-btn"
            ></f-icon>
          ) : null}
        </div>
      ) : (
        ''
      )
  }
})
