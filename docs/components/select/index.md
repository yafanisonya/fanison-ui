# Select 选择器

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `f-option` 的 `value` 属性值

:::demo

```vue
<template>
  <f-select v-model="value" placeholder="Select">
    <f-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </f-select>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const options = [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      }
    ]
    return {
      value,
      options
    }
  }
})
</script>
```

:::

## 有禁用选项

在 `f-option` 中，设定 `disabled` 值为 `true`，即可禁用该选项

:::demo

```vue
<template>
  <f-select v-model="value" placeholder="Select">
    <f-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </f-select>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const options = [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2',
        disabled: true
      },
      {
        value: 'Option3',
        label: 'Option3'
      }
    ]
    return {
      value,
      options
    }
  }
})
</script>
```

:::

## 禁用状态

为 `f-select` 设置 `disabled` 属性，禁用整个选择器组件。

:::demo

```vue
<template>
  <f-select v-model="value" disabled>
    <f-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </f-select>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const options = [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      }
    ]
    return {
      value,
      options
    }
  }
})
</script>
```

:::

## 自定义模板

将自定义的 HTML 模板插入 `f-option` 的 `slot` 中即可。

:::demo

```vue
<template>
  <f-select v-model="value" placeholder="Select">
    <f-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.value }}</span>
      <span
        style="
          float: right;
          color: #909399; 
          font-size: 13px;
        "
        >{{ item.label }}</span
      >
    </f-option>
  </f-select>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('')
    const cities = [
      {
        value: 'Beijing',
        label: '北京'
      },
      {
        value: 'Shanghai',
        label: '上海'
      },
      {
        value: 'Shenzhen',
        label: '深圳'
      }
    ]
    return {
      value,
      cities
    }
  }
})
</script>
```

:::

## Select Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 260px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>选中项绑定值</td>
      <td>
        <code>string</code> |
        <code>number</code> 
      </td>
      <td>
         <code>-</code>
      </td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位符</td>
      <td>
        <code>string</code>
      </td>
      <td>
        'Select'
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
  </tbody>
</table>

## Option Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 260px;">插槽名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>选项的值</td>
      <td>
        <code>string</code> |
        <code>number</code> 
      </td>
      <td>
        <code>-</code>
      </td>
    </tr>
    <tr>
      <td>label</td>
      <td>选项的标签</td>
      <td>
        <code>string</code> |
        <code>number</code> 
      </td>
      <td>
        <code>-</code>
      </td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用该选项</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
  </tbody>
</table>

## Option Slots

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 350px;">Name</th>
      <th style="width: 350px;">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>
        默认插槽内容
      </td>
    </tr>
  </tbody>
</table>

<style scoped>
td, th {
   border: none!important;
}
</style>
