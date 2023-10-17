import { defineComponent, provide, ref } from 'vue'
import './tabs.scss'

export default defineComponent({
  name: 'FTabs',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    const tabsData = ref<
      Array<{ name: string; title: string; type?: 'random'; content?: string }>
    >([])
    provide('tabs-data', tabsData)

    const activeTab = ref(props.modelValue)
    provide('active-tab', activeTab)
    const changeTab = (name: string) => {
      activeTab.value = name
    }

    const removeTab = (targetName: string) => {
      const tabs = tabsData.value
      const activeName = activeTab.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            activeTab.value = nextTab ? nextTab.name : ''
          }
        })
      }
      tabsData.value = tabs.filter(tab => tab.name !== targetName)
      console.log(tabsData.value)
    }

    const addTab = () => {
      const name = Math.random().toString(36).substr(2)
      tabsData.value.push({
        name,
        title: 'New Tab',
        type: 'random',
        content: 'New Tab content'
      })
      activeTab.value = name
    }

    return () => (
      <div class="s-tabs">
        {/* 导航页签 */}
        <ul className="s-tabs__nav">
          {tabsData.value.map(tab => (
            <li
              onClick={() => changeTab(tab.name)}
              class={tab.name === activeTab.value ? 'active' : ''}
            >
              {tab.title}
              {/* 关闭页签 */}
              {props.closable && (
                <svg
                  onClick={() => removeTab(tab.name)}
                  style="margin-left: 8px;"
                  viewBox="0 0 1024 1024"
                  width="12"
                  height="12"
                >
                  <path d="M610.461538 500.184615l256-257.96923c11.815385-11.815385 11.815385-29.538462 0-41.353847l-39.384615-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0L527.753846 417.476923c-7.876923 7.876923-19.692308 7.876923-27.569231 0L242.215385 157.538462c-11.815385-11.815385-29.538462-11.815385-41.353847 0l-41.353846 41.353846c-11.815385 11.815385-11.815385 29.538462 0 41.353846l257.969231 257.969231c7.876923 7.876923 7.876923 19.692308 0 27.56923L157.538462 785.723077c-11.815385 11.815385-11.815385 29.538462 0 41.353846l41.353846 41.353846c11.815385 11.815385 29.538462 11.815385 41.353846 0L498.215385 610.461538c7.876923-7.876923 19.692308-7.876923 27.56923 0l257.969231 257.969231c11.815385 11.815385 29.538462 11.815385 41.353846 0L866.461538 827.076923c11.815385-11.815385 11.815385-29.538462 0-41.353846L610.461538 527.753846c-7.876923-7.876923-7.876923-19.692308 0-27.569231z"></path>
                </svg>
              )}
            </li>
          ))}

          {/* 添加标签按钮 */}
          {props.addable && (
            <li>
              <svg
                onClick={addTab}
                viewBox="0 0 1024 1024"
                width="14"
                height="14"
              >
                <path d="M590.769231 571.076923h324.923077c15.753846 0 29.538462-13.784615 29.538461-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538461-29.538461H590.769231c-11.815385 0-19.692308-7.876923-19.692308-19.692308V108.307692c0-15.753846-13.784615-29.538462-29.538461-29.538461h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538461V433.230769c0 11.815385-7.876923 19.692308-19.692308 19.692308H108.307692c-15.753846 0-29.538462 13.784615-29.538461 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538461 29.538461H433.230769c11.815385 0 19.692308 7.876923 19.692308 19.692308v324.923077c0 15.753846 13.784615 29.538462 29.538461 29.538461h59.076924c15.753846 0 29.538462-13.784615 29.538461-29.538461V590.769231c0-11.815385 7.876923-19.692308 19.692308-19.692308z"></path>
              </svg>
            </li>
          )}
        </ul>
        {/* 内容区 */}
        {slots.default?.()}

        {/* 显示新增的内容 */}
        {tabsData.value
          .filter(tab => tab.type === 'random')
          .map(tab => (
            <div class="s-tab">{tab.content}</div>
          ))}
      </div>
    )
  }
})
