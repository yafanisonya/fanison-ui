import { defineComponent, provide } from 'vue'
import { BreadcrumbProps, breadcrumbProps } from './breadcrumb-type'
import './breadcrumb.scss'

export default defineComponent({
  name: 'FBreadcrumb',
  props: breadcrumbProps,
  setup(props: BreadcrumbProps, { slots }) {
    const separator = props.separator || '/'
    const separatorIcon = props.separatorIcon || null
    provide('separator', separator)
    provide('separatorIcon', separatorIcon)
    return () => <div class="s-breadcrumb">{slots.default?.()}</div>
  }
})
