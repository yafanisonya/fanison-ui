# Tabs 标签页

## 基础用法

默认选中第一个标签页，也可以通过 `value` 属性来指定当前选中的标签页。

:::demo

```vue
<template>
  <f-tabs v-model="activeTab">
    <f-tab name="1" title="Tab1">Tab 1 Content</f-tab>
    <f-tab name="2" title="Tab2">Tab 2 Content</f-tab>
    <f-tab name="3" title="Tab3">Tab 3 Content</f-tab>
  </f-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeTab = ref('1')
    return {
      activeTab
    }
  }
})
</script>
```

:::

## 增加标签页

:::demo

```vue
<template>
  <f-tabs v-model="activeTab" addable>
    <f-tab name="1" title="Tab1">Tab 1 Content</f-tab>
    <f-tab name="2" title="Tab2">Tab 2 Content</f-tab>
    <f-tab name="3" title="Tab3">Tab 3 Content</f-tab>
  </f-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeTab = ref('1')
    return {
      activeTab
    }
  }
})
</script>
```

:::

## 关闭标签页

:::demo

```vue
<template>
  <f-tabs v-model="activeTab" closable>
    <f-tab name="1" title="Tab1">Tab 1 Content</f-tab>
    <f-tab name="2" title="Tab2">Tab 2 Content</f-tab>
    <f-tab name="3" title="Tab3">Tab 3 Content</f-tab>
  </f-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeTab = ref('1')
    return {
      activeTab
    }
  }
})
</script>
```

:::

## 动态增减标签页

:::demo

```vue
<template>
  <f-tabs v-model="activeTab" editable>
    <f-tab name="1" title="Tab1">Tab 1 Content</f-tab>
    <f-tab name="2" title="Tab2">Tab 2 Content</f-tab>
    <f-tab name="3" title="Tab3">Tab 3 Content</f-tab>
  </f-tabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeTab = ref('1')
    return {
      activeTab
    }
  }
})
</script>
```

:::

## Tabs Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 300px;">属性名</th>
      <th style="width: 370px;">说明</th>
      <th style="width: 80px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值，选中选项卡的 name</td>
      <td>
        <code>string</code>
      </td>
      <td>
         <code>-</code>
      </td>
    </tr>
    <tr>
      <td>addable</td>
      <td>标签是否可增加</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>closable</td>
      <td>标签是否可关闭</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>editable</td>
      <td>标签是否同时可增加和关闭</td>
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
.vp-doc ul, .vp-doc ol{
  padding:0 0px !important;
}

.vp-doc li + li{
  margin-top: 0 !important;
}

td, th {
   border: none!important;
}
</style>
