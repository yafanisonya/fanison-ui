# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

:::demo

```vue
<template>
  <div class="demo-collapse">
    <f-collapse v-model="activeNames">
      <f-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeNames = ref(['1'])
    return {
      activeNames
    }
  }
})
</script>
```

:::

## 手风琴效果

通过 `accordion` 属性来设置是否以手风琴模式显示。

:::demo

```vue
<template>
  <div class="demo-collapse">
    <f-collapse v-model="activeName" accordion>
      <f-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
      </f-collapse-item>
      <f-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
      </f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activeName = ref('1')
    return {
      activeName
    }
  }
})
</script>
```

:::

## Collapse Attributes

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
        <code>array</code>
      </td>
      <td>
       <code>-</code>
      </td>
    </tr>
    <tr>
      <td>accordion</td>
      <td>是否手风琴模式</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
  </tbody>
</table>

## Collapse Item Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 150px;">属性名</th>
      <th style="width: 240px;">说明</th>
      <th style="width: 200px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>唯一标志符</td>
      <td>
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
       <code>-</code>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>面板标题</td>
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
td, th {
   border: none!important;
}
</style>
