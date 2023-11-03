# Breadcrumb 面包屑

## 基础用法

在 `f-breadcrumb` 中使用 `f-breadcrumb-item` 标签表示从首页开始的每一级;

接受一个 `String` 类型的参数 `separator` 来作为分隔符。 默认值为 '/'

:::demo

```vue
<template>
  <f-breadcrumb separator="/">
    <f-breadcrumb-item :to="{ path: '/' }">homepage</f-breadcrumb-item>
    <f-breadcrumb-item>
      <a href="/components/button/">link to button</a>
    </f-breadcrumb-item>
    <f-breadcrumb-item>promotion list</f-breadcrumb-item>
  </f-breadcrumb>
</template>
```

:::

## 图标分隔符

通过设置 `separator-icon` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 失效。

:::demo

```vue
<template>
  <f-breadcrumb separator-icon="arrowright">
    <f-breadcrumb-item :to="{ path: '/' }">homepage</f-breadcrumb-item>
    <f-breadcrumb-item>promotion management</f-breadcrumb-item>
    <f-breadcrumb-item>promotion list</f-breadcrumb-item>
  </f-breadcrumb>
</template>
```

:::

## Breadcrumb Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 200px;">属性名</th>
      <th style="width: 200px;">说明</th>
      <th style="width: 200px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>separator</td>
      <td>分隔符</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>/</code>
      </td>
    </tr>
    <tr>
      <td>separator-icon</td>
      <td>图标名称</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>-</code>
      </td>
    </tr>
  </tbody>
</table>

## BreadcrumbItem Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 200px;">属性名</th>
      <th style="width: 200px;">说明</th>
      <th style="width: 200px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>to</td>
      <td>路由跳转目标</td>
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
