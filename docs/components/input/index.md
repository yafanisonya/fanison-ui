# Input 输入框

## 基础用法

:::demo

```vue
<template>
  <f-input v-model="inputValue" placeholder="Please input" />

  <f-input
    v-model="passwordValue"
    type="password"
    placeholder="Please input password"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const inputValue = ref('')
    const passwordValue = ref('')
    return {
      inputValue,
      passwordValue
    }
  }
})
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

```vue
<template>
  <f-input v-model="inputValue" disabled placeholder="Disabled input" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const inputValue = ref('')
    return {
      inputValue
    }
  }
})
</script>
```

:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

:::demo

```vue
<template>
  <f-input
    v-model="inputValue"
    placeholder="Clearable input"
    clearable
  ></f-input>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const inputValue = ref('')
    return {
      inputValue
    }
  }
})
</script>
```

:::

## 输入长度限制

使用 `maxlength` 属性, 来控制输入内容的最大字数。

:::demo

```vue
<template>
  <f-input
    v-model="input"
    maxlength="20"
    placeholder="Maxlength input"
    type="text"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const inputValue = ref('')
    return {
      inputValue
    }
  }
})
</script>
```

:::

## Input Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 220px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 220px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>
        <code>text</code>|
        <code>password</code>
      </td>
      <td>
       <code>text</code>
      </td>
    </tr>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>
        <code>string</code>
      </td>
      <td>
        —
      </td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>最大输入长度</td>
      <td>
        <code>string</code>
      </td>
      <td>
        —
      </td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>输入框占位文本</td>
      <td>
        <code>string</code>
      </td>
      <td>
        —
      </td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否显示清除按钮</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>    
  </tbody>
</table>

<style>
.s-input:nth-child(1){
  margin-bottom:16px;
}

td, th {
   border: none!important;
}
</style>
