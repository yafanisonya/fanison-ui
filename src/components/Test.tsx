// 1. 函数时组件
// export default () => <div>use function Test</div>

// 2. defineComponent
// import { defineComponent } from 'vue'
// export default defineComponent({
//   setup() {
//     return () => <div>use defineComponent Test</div>
//   }
// })

import { defineComponent, ref, withModifiers } from 'vue'

export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const count = ref(0)

    const inc = () => {
      count.value++
      emit('click')
    }

    const list = ref<string[]>(['a', 'b', 'c'])

    return () => {
      const span = true ? <span>span</span> : null

      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test:{count.value}
          <input type="text" v-focus v-model={count.value} />
          <div>{span}</div>
          <br />
          <ul>
            {list.value.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br />
          <div>{(slots.default && slots.default()) || 'default content'}</div>
          <div>{slots.title ? slots.title() : 'title slot content'}</div>
        </div>
      )
    }
  }
})
