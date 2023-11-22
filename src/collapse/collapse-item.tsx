import { defineComponent, toRefs, inject, Ref, computed } from 'vue'

import './collapse.scss'

export default defineComponent({
  name: 'FCollapseItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const { title, name } = toRefs(props)
    const collapseModelValue = inject(
      'collapse-modelValue',
      null
    ) as unknown as Ref<string | Array<string>>
    const collapseAccordion = inject(
      'collapse-accordion',
      false
    ) as unknown as Ref<boolean>

    const updateModelValue = inject('updateModelValue', null) as unknown as (
      value: string[] | string
    ) => void

    const updateValue = () => {
      if (collapseAccordion.value) {
        updateModelValue(name.value)
      } else {
        if (collapseModelValue.value.includes(name.value)) {
          collapseModelValue.value.splice(
            collapseModelValue.value.indexOf(name.value),
            1
          )
        } else {
          collapseModelValue.value.push(name.value)
        }
        updateModelValue(collapseModelValue.value)
      }
    }

    const isActive = computed(() => {
      if (collapseAccordion.value) {
        return collapseModelValue.value === name.value
      } else {
        return collapseModelValue.value.includes(name.value)
      }
    })

    console.log('isActive', isActive.value)

    return () => (
      <div class={['s-collapse-item', { 'is-active': isActive.value }]}>
        <div
          class={['s-collapse-item__header', { 'is-active': isActive.value }]}
          onClick={updateValue}
        >
          {title.value}
          <f-icon
            name="arrowright"
            class={[
              's-collapse-item__arrow',
              isActive.value ? 'is-active' : ''
            ]}
          ></f-icon>
        </div>
        {isActive.value && (
          <div class="s-collapse-item__wrap">
            <div class="s-collapse-item__content">{slots.default?.()}</div>
          </div>
        )}
      </div>
    )
  }
})
