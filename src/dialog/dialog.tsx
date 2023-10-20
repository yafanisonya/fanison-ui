import { defineComponent, toRefs } from 'vue'
import BaseDialog from './base-dialog'
import { DialogProps, dialogProps } from './dialog-type'
import './dialog.scss'

export default defineComponent({
  name: 'FDialog',
  props: dialogProps,
  emits: ['update:modelValue'],
  setup(props: DialogProps, { slots, emit }) {
    const { modelValue, title, width, center, showClose, alignCenter } =
      toRefs(props)

    const alignCenterStyle = alignCenter.value
      ? { marginTop: 0, top: '50%', transform: 'translateY(-50%)' }
      : null
    const centerStyle = center.value ? { textAlign: 'center' } : null

    const footerVisible = slots.footer && slots.footer()

    return () => (
      <BaseDialog class="s-modal" modelValue={modelValue.value}>
        <div
          class="s-modal__container"
          style={{ width: width.value, ...alignCenterStyle }}
        >
          {slots.header ? (
            slots.header?.({ close: () => emit('update:modelValue', false) })
          ) : (
            <div class="s-modal__header" style={{ ...centerStyle }}>
              {title.value}

              {/* 增加关闭按钮 */}
              {showClose.value && (
                <svg
                  onClick={() => {
                    emit('update:modelValue', false)
                  }}
                  class="s-modal__close"
                  viewBox="0 0 1024 1024"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                  ></path>
                </svg>
              )}
            </div>
          )}
          <div class="s-modal__body">{slots.default?.()}</div>

          {footerVisible && (
            <div class="s-modal__footer" style={{ ...centerStyle }}>
              {slots.footer?.()}
            </div>
          )}
        </div>
      </BaseDialog>
    )
  }
})
