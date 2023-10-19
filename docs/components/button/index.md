# Button 按钮

## 基础用法

使用 `type`、`round` 来定义按钮的样式。

:::demo

```vue
<template>
  <div class="mb-10">
    <f-button>Default</f-button>
    <f-button type="primary">Primary</f-button>
    <f-button type="success">Success</f-button>
    <f-button type="info">Info</f-button>
    <f-button type="warning">Warning</f-button>
    <f-button type="danger">Danger</f-button>
  </div>
  <div class="mb-10">
    <f-button round>Default</f-button>
    <f-button type="primary" round>Primary</f-button>
    <f-button type="success" round>Success</f-button>
    <f-button type="info" round>Info</f-button>
    <f-button type="warning" round>Warning</f-button>
    <f-button type="danger" round>Danger</f-button>
  </div>
</template>
```

:::

## 禁用状态

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::demo

```vue
<template>
  <div class="mb-10">
    <f-button disabled>Default</f-button>
    <f-button type="primary" disabled>Primary</f-button>
    <f-button type="success" disabled>Success</f-button>
    <f-button type="info" disabled>Info</f-button>
    <f-button type="warning" disabled>Warning</f-button>
    <f-button type="danger" disabled>Danger</f-button>
  </div>

  <div class="mb-10">
    <f-button round disabled>Default</f-button>
    <f-button type="primary" round disabled>Primary</f-button>
    <f-button type="success" round disabled>Success</f-button>
    <f-button type="info" round disabled>Info</f-button>
    <f-button type="warning" round disabled>Warning</f-button>
    <f-button type="danger" round disabled>Danger</f-button>
  </div>
</template>
```

:::

## 调整尺寸

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

:::demo

```vue
<template>
  <div class="mb-10">
    <FButton size="large">Large</FButton>
    <FButton size="default">Default</FButton>
    <FButton size="small">Small</FButton>
  </div>

  <div class="mb-10">
    <FButton size="large" round>Large</FButton>
    <FButton size="default" round>Default</FButton>
    <FButton size="small" round>Small</FButton>
  </div>
</template>
```

:::

## 加载状态

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::demo

```vue
<template>
  <div>
    <FButton type="primary" loading>Loading</FButton>
    <FButton type="primary" round loading>Loading</FButton>
  </div>
</template>
```

:::

## Button Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 100px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 400px">类型</th>
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
       —
      </td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸</td>
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
      <td>round</td>
      <td>是否为圆角按钮</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否为禁用状态</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否为加载中状态</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>    
  </tbody>
</table>

<!-- | 属性名 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| type | 类型 | `primary`、`success`、`warning`、`danger`、`info` | -- |
| size | 尺寸 | `large`、`default` 、`small` | `default` |
| round | 是否为圆角按钮 | `boolean` | `false` |
| disabled | 按钮是否为禁用状态 | `boolean` | `false` |
| loading | 是否为加载中状态 | `boolean` | `false` | -->

<style>
.mb-10 {
  margin-bottom: 16px;
}
button {
  margin-right: 20px;
}

td, th {
   border: none!important;
}
</style>
