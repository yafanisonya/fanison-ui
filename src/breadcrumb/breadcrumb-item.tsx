import { defineComponent, inject } from 'vue'
import './breadcrumb.scss'

export default defineComponent({
  name: 'FBreadcrumbItem',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const separator = inject('separator', '/')
    const separatorIcon = inject('separatorIcon', null)
    const link = props.to ? (
      <router-link to={props.to}>{slots.default?.()}</router-link>
    ) : null

    const icon = separatorIcon ? (
      <f-icon name={separatorIcon}></f-icon>
    ) : (
      separator
    )

    return () => (
      <span class="s-breadcrumb__item">
        <span class={['s-breadcrumb__inner', props.to ? 'is-link' : null]}>
          {link || slots.default?.()}
        </span>
        <span class="s-breadcrumb__separator">{icon}</span>
      </span>
    )
  }
})
