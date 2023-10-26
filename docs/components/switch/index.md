# Switch 开关

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

:::demo

```vue
<template>
  <f-switch v-model="value" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(true)
    return { value }
  }
})
</script>
```

:::

## 尺寸

:::demo

```vue
<template>
  <f-switch v-model="value1" size="large" class="mr-20" />
  <f-switch v-model="value2" class="mr-20" />
  <f-switch v-model="value3" size="small" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(false)
    const value3 = ref(true)
    return { value1, value2, value3 }
  }
})
</script>
```

:::

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。

:::demo

```vue
<template>
  <f-switch
    v-model="value1"
    size="large"
    active-text="Open"
    inactive-text="Close"
    class="mr-20"
  />
  <f-switch v-model="value2" active-text="Open" inactive-text="Close" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(false)
    return { value1, value2 }
  }
})
</script>
```

:::

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

:::demo

```vue
<template>
  <f-switch v-model="value1" disabled class="mr-20" />
  <f-switch v-model="value2" class="mr-20" />
  <br />
  <f-switch v-model="value3" disabled size="small" class="mr-20" />
  <f-switch v-model="value4" size="small" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(true)
    const value3 = ref(true)
    const value4 = ref(true)
    return { value1, value2, value3, value4 }
  }
})
</script>
```

:::

## 加载状态

设置 `loading` 属性，接受一个 `Boolean`，设置 `true` 即加载中状态。

:::demo

```vue
<template>
  <f-switch v-model="value1" loading size="large" class="mr-20" />
  <f-switch v-model="value2" loading size="large" />
  <br />
  <f-switch v-model="value3" loading class="mr-20" />
  <f-switch v-model="value4" loading />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(true)
    const value2 = ref(false)
    const value3 = ref(true)
    const value4 = ref(false)
    return { value1, value2, value3, value4 }
  }
})
</script>
```

:::

## Switch Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 150px;">属性名</th>
      <th style="width: 240px;">说明</th>
      <th style="width: 250px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
       <code>false</code>
      </td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否显示加载中</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>size</td>
      <td>switch 的大小</td>
      <td>
        <code>large</code>|
        <code>default</code>|
        <code>small</code>
      </td>
      <td>
        <code>default</code>
      </td>
    </tr>
    <tr>
      <td>active-text</td>
      <td>打开时的文字描述</td>
      <td>
        <code>string</code>
      </td>
      <td>
        <code>-</code>
      </td>
    </tr>
    <tr>
      <td>inactive-text</td>
      <td>关闭时的文字描述</td>
      <td>
        <code>string</code>
      </td>
      <td>
        <code>-</code>
      </td>
    </tr> 
  </tbody>
</table>

<style>
.mr-20{
  margin-right:20px;
}
td, th {
   border: none!important;
}
</style>
