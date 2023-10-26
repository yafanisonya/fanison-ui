# Checkbox 多选框

## 基础用法

:::demo

```vue
<template>
  <div>
    <f-checkbox v-model="checked1" label="Option 1" size="large" />
    <f-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <f-checkbox v-model="checked3" label="Option 1" />
    <f-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <f-checkbox v-model="checked5" label="Option 1" size="small" />
    <f-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(true)
    const checked5 = ref(true)
    const checked6 = ref(true)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6
    }
  }
})
</script>
```

:::

## 禁用状态

设置 `disabled` 属性即可。

:::demo

```vue
<template>
  <f-checkbox v-model="checked1" disabled>Disabled</f-checkbox>
  <f-checkbox v-model="checked2" disabled>Select and Disabled</f-checkbox>
  <f-checkbox v-model="checked3">Not disabled</f-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    const checked3 = ref(true)
    return {
      checked1,
      checked2,
      checked3
    }
  }
})
</script>
```

:::

## 多选框组

`checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。

:::demo

```vue
<template>
  <f-checkbox-group v-model="checkList">
    <f-checkbox label="Option A" />
    <f-checkbox label="Option B" />
    <f-checkbox label="disabled" disabled />
    <f-checkbox label="selected and disabled" disabled />
  </f-checkbox-group>
  <f-checkbox-group v-model="checkList" disabled>
    <f-checkbox label="Option A" />
    <f-checkbox label="Option B" />
    <f-checkbox label="disabled" />
    <f-checkbox label="selected and disabled" />
  </f-checkbox-group>
  <f-checkbox-group v-model="checkList" disabled size="small">
    <f-checkbox label="Option A" />
    <f-checkbox label="Option B" />
    <f-checkbox label="disabled" />
    <f-checkbox label="selected and disabled" />
  </f-checkbox-group>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checkList = ref(['selected and disabled', 'Option A'])
    return {
      checkList
    }
  }
})
</script>
```

:::

## 带有边框

设置 `border` 属性可以渲染为带有边框的多选框。

:::demo

```vue
<template>
  <div>
    <f-checkbox v-model="checked1" label="Option1" size="large" border />
    <f-checkbox
      v-model="checked2"
      label="Option2"
      size="large"
      disabled
      border
    />
  </div>
  <div class="mt-10">
    <f-checkbox v-model="checked3" size="small" label="Option1" border />
    <f-checkbox
      v-model="checked4"
      size="small"
      label="Option2"
      disabled
      border
    />
  </div>
  <div class="mt-10">
    <f-checkbox-group v-model="checkboxGroup1" disabled>
      <f-checkbox label="Option1" border />
      <f-checkbox label="Option2" border />
    </f-checkbox-group>
  </div>
  <div class="mt-10">
    <f-checkbox-group v-model="checkboxGroup1" size="small">
      <f-checkbox label="Option1" border />
      <f-checkbox label="Option2" border />
    </f-checkbox-group>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(true)
    const checkboxGroup1 = ref(['Option1'])
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checkboxGroup1
    }
  }
})
</script>
```

:::

## Checkbox Attributes

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
        <code>boolean</code>
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

## CheckboxGroup Attributes

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
        <code>object</code>
      </td>
      <td>
       <code>[]</code>
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
      <td>多选框组尺寸</td>
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
.mt-10{
  margin-top:10px;
}
td, th {
   border: none!important;
}
</style>
