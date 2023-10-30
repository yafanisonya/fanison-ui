# Alert 提示

## 基础用法

Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

:::demo

```vue
<template>
  <f-alert title="success alert" type="success" />
  <f-alert title="info alert" type="info" />
  <f-alert title="warning alert" type="warning" />
  <f-alert title="error alert" type="error" />
</template>
```

:::

## 主题

通过设置 `effect` 属性来改变主题，默认为 `light`。

:::demo

```vue
<template>
  <f-alert title="success alert" type="success" effect="dark" />
  <f-alert title="info alert" type="info" effect="dark" />
  <f-alert title="warning alert" type="warning" effect="dark" />
  <f-alert title="error alert" type="error" effect="dark" />
</template>
```

:::

## 自定义关闭按钮

`closable` 属性决定 Alert 组件是否可关闭，默认为 `false`。

设置 `close-text` 属性来代替右侧的关闭图标，必须是 `string`。

:::demo

```vue
<template>
  <f-alert title="unclosable alert" type="success" :closable="false" />
  <f-alert title="customized close-text" type="info" close-text="Gotcha" />
  <f-alert title="alert with callback" type="warning" />
</template>
```

:::

## 文字居中

使用 `center` 属性来让文字水平居中。

:::demo

```vue
<template>
  <f-alert title="success alert" type="success" center />
  <f-alert title="info alert" type="info" center />
  <f-alert title="warning alert" type="warning" center />
  <f-alert title="error alert" type="error" center />
</template>
```

:::

## Alert Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 120px;">属性名</th>
      <th style="width: 200px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>Alert 标题</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>type</td>
      <td>Alert 类型</td>
      <td>
        <code>success</code>|
        <code>warning</code>|
        <code>info</code>|
        <code>error</code>
      </td>
      <td>
       <code>info</code>
      </td>
    </tr>
    <tr>
      <td>effect</td>
      <td>主题样式</td>
      <td>
        <code>light</code>|
        <code>dark</code>
      </td>
      <td>
       <code>light</code>
      </td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可以关闭</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>close-text</td>
      <td>自定义关闭按钮文本</td>
      <td>
        <code>string</code>
      </td>
      <td>
        <code>—</code>
      </td>
    </tr>    
    <tr>
      <td>center</td>
      <td>文字是否居中</td>
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
.s-alert {
  margin: 20px 0 0;
}
.s-alert:first-child {
  margin: 0;
}

td, th {
   border: none!important;
}
</style>
