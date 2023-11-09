# Badge 徽章

按钮上的数字或状态标记。

## 基础用法

展示新消息的数量,值可接受 `Number` 或 `String` 类型。

:::demo

```vue
<template>
  <f-badge :value="12">
    <f-button>comments</f-button>
  </f-badge>
  <f-badge :value="3">
    <f-button>replies</f-button>
  </f-badge>
  <f-badge :value="1" type="primary">
    <f-button>comments</f-button>
  </f-badge>
  <f-badge :value="2" type="warning">
    <f-button>replies</f-button>
  </f-badge>
</template>
```

:::

## 最大值

由 `max` 属性定义，接受 `Number` 值

:::demo

```vue
<template>
  <f-badge :value="200" :max="99">
    <f-button>comments</f-button>
  </f-badge>
  <f-badge :value="100" :max="10">
    <f-button>replies</f-button>
  </f-badge>
</template>
```

:::

## 自定义显示内容

当 `value` 是 `String` 时，可以显示自定义文字

:::demo

```vue
<template>
  <f-badge value="new">
    <f-button>comments</f-button>
  </f-badge>
  <f-badge value="hot">
    <f-button>replies</f-button>
  </f-badge>
</template>
```

:::

## 小红点

使用 `is-dot` 属性，通过小红点标记来告知用户有新内容。

:::demo

```vue
<template>
  <f-badge is-dot>query</f-badge>
  <f-badge is-dot>
    <f-button>replies</f-button>
  </f-badge>
</template>
```

:::

## Badge Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 90px;">属性名</th>
      <th style="width: 160px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>
        <code>primary</code>|
        <code>success</code>|
        <code>warning</code>|
        <code>danger</code>|
        <code>info</code>
      </td>
      <td>
        <code>danger</code>
      </td>
    </tr>
    <tr>
      <td>value</td>
      <td>显示值</td>
      <td>
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
        <code>''</code>
      </td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大值</td>
      <td>
        <code>number</code>
      </td>
      <td>
        <code>99</code>
      </td>
    </tr>
    <tr>
      <td>is-dot</td>
      <td>是否显示小圆点</td>
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
.s-badge {
  margin-right: 40px;
}

td, th {
   border: none!important;
}
</style>
