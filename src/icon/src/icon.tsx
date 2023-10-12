import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'FIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    },
    component: {
      type: String,
      default: null
    }
  },
  setup(props, { attrs }) {
    const iconSize = computed(() => {
      return typeof props.size === 'number' ? `${props.size}px` : props.size
    })

    const imgIcon = (
      <img
        src={props.name}
        style={{ width: iconSize.value, verticalAlign: 'middle' }}
        {...attrs}
      ></img>
    )
    const fontIcon = (
      <span
        class={[props.prefix, props.prefix + '-' + props.name]}
        style={{ fontSize: iconSize.value, color: props.color }}
      ></span>
    )

    const svgIcon = (
      <svg
        class="icon"
        style={{ width: iconSize.value, height: iconSize.value }}
      >
        <use
          xlinkHref={`#${props.prefix}-${props.component}`}
          fill={props.color}
        ></use>
      </svg>
    )

    const icon = props.component
      ? svgIcon
      : /http|https/.test(props.name)
      ? imgIcon
      : fontIcon

    return () => icon
  }
})
