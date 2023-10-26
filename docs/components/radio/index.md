# Radio 单选框

## 基础用法

设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`属性的值

:::demo

```vue
<template>
  <div>
    <f-radio v-model="radio1" label="1" size="large">Option 1</f-radio>
    <f-radio v-model="radio1" label="2" size="large">Option 2</f-radio>
  </div>
  <div>
    <f-radio v-model="radio2" label="1">Option 1</f-radio>
    <f-radio v-model="radio2" label="2">Option 2</f-radio>
  </div>
  <div>
    <f-radio v-model="radio3" label="1" size="small">Option 1</f-radio>
    <f-radio v-model="radio3" label="2" size="small">Option 2</f-radio>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio1 = ref('1')
    const radio2 = ref('2')
    const radio3 = ref('1')
    return {
      radio1,
      radio2,
      radio3
    }
  }
})
</script>
```

:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

:::demo

```vue
<template>
  <div>
    <f-radio v-model="radio" label="disabled" disabled>Option A</f-radio>
    <f-radio v-model="radio" label="selected and disabled" disabled>
      Option B
    </f-radio>
  </div>
  <div>
    <f-radio v-model="radio" label="disabled" size="small" disabled>
      Option A
    </f-radio>
    <f-radio
      v-model="radio"
      label="selected and disabled"
      size="small"
      disabled
    >
      Option B
    </f-radio>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('selected and disabled')
    return {
      radio
    }
  }
})
</script>
```

:::

## 单选框组

`f-radio-group`元素和子元素`f-radio`可以实现单选组, 为 `f-radio-group` 绑定 `v-model`，再为 每一个 `f-radio` 设置好 `label` 属性即可

:::demo

```vue
<template>
  <div>
    <f-radio-group v-model="radio1">
      <f-radio :label="3">Option A</f-radio>
      <f-radio :label="6">Option B</f-radio>
      <f-radio :label="9">Option C</f-radio>
    </f-radio-group>
  </div>
  <div>
    <f-radio-group v-model="radio2" size="small">
      <f-radio :label="3">Option A</f-radio>
      <f-radio :label="6">Option B</f-radio>
      <f-radio :label="9">Option C</f-radio>
    </f-radio-group>
  </div>
  <div>
    <f-radio-group v-model="radio3" size="small" disabled>
      <f-radio :label="3">Option A</f-radio>
      <f-radio :label="6">Option B</f-radio>
      <f-radio :label="9">Option C</f-radio>
    </f-radio-group>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio1 = ref(3)
    const radio2 = ref(6)
    const radio3 = ref(9)
    return {
      radio1,
      radio2,
      radio3
    }
  }
})
</script>
```

:::

## 带有边框

设置 `border` 属性为 `true` 可以渲染为带有边框的单选框。

:::demo

```vue
<template>
  <div>
    <f-radio-group v-model="radio1">
      <f-radio label="1" size="large" border>Option A</f-radio>
      <f-radio label="2" size="large" border>Option B</f-radio>
    </f-radio-group>
  </div>
  <div style="margin-top: 20px">
    <f-radio-group v-model="radio2">
      <f-radio label="1" border>Option A</f-radio>
      <f-radio label="2" border>Option B</f-radio>
    </f-radio-group>
  </div>
  <div style="margin-top: 20px">
    <f-radio-group v-model="radio3" size="small">
      <f-radio label="1" border>Option A</f-radio>
      <f-radio label="2" border disabled>Option B</f-radio>
    </f-radio-group>
  </div>
  <div style="margin-top: 20px">
    <f-radio-group v-model="radio4" size="small" disabled>
      <f-radio label="1" border>Option A</f-radio>
      <f-radio label="2" border>Option B</f-radio>
    </f-radio-group>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const radio1 = ref('1')
    const radio2 = ref('1')
    const radio3 = ref('1')
    const radio4 = ref('1')
    return {
      radio1,
      radio2,
      radio3,
      radio4
    }
  }
})
</script>
```

:::

## Radio Attributes

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
      <td>选中项绑定值</td>
      <td>
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>label</td>
      <td>选中状态的值</td>
      <td>
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
       <code>—</code>
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
      <td>border</td>
      <td>是否显示边框</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>size</td>
      <td>Checkbox 的尺寸</td>
      <td>
        <code>large</code>|
        <code>default</code>|
        <code>small</code>
      </td>
      <td>
        <code>default</code>
      </td>
    </tr>
  </tbody>
</table>

## RadioGroup Attributes

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
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
       <code>—</code>
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
      <td>size</td>
      <td>按钮尺寸</td>
      <td>
        <code>large</code>|
        <code>default</code>|
        <code>small</code>
      </td>
      <td>
        <code>default</code>
      </td>
    </tr>
  </tbody>
</table>

<style>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
td, th {
   border: none!important;
}
</style>
