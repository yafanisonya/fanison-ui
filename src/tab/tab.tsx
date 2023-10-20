import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  name: 'FTab',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    const activeTab = inject('active-tab') as Ref<string>
    const tabsData = inject('tabs-data') as Ref<
      Array<{ name: string; title: string }>
    >
    tabsData.value.push({
      name: props.name,
      title: props.title
    })
    return () => (
      <>
        {props.name === activeTab.value && (
          <div class="s-tabs__content">{slots.default?.()}</div>
        )}
      </>
    )
  }
})
