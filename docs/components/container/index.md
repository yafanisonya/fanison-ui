# Container 布局容器

`<f-container>`：外层容器。 当子元素中包含 `<f-header>` 或 `<f-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<f-header>`：顶栏容器。

`<f-aside>`：侧边栏容器。

`<f-main>`：主要区域容器。

`<f-footer>`：底栏容器。

## 常见页面布局

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-header height="100px">Header</f-header>
      <f-main>Main</f-main>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-header>Header</f-header>
      <f-main>Main</f-main>
      <f-footer height="100px">Footer</f-footer>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-aside width="250px">Aside</f-aside>
      <f-main>Main</f-main>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-header>Header</f-header>
      <f-container>
        <f-aside>Aside</f-aside>
        <f-main>Main</f-main>
      </f-container>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-header>Header</f-header>
      <f-container>
        <f-aside width="250px">Aside</f-aside>
        <f-container>
          <f-main>Main</f-main>
          <f-footer>Footer</f-footer>
        </f-container>
      </f-container>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-aside width="250px">Aside</f-aside>
      <f-container>
        <f-header>Header</f-header>
        <f-main>Main</f-main>
      </f-container>
    </f-container>
  </div>
</template>
```

:::

:::demo

```vue
<template>
  <div class="common-layout">
    <f-container>
      <f-aside width="250px">Aside</f-aside>
      <f-container>
        <f-header>Header</f-header>
        <f-main>Main</f-main>
        <f-footer>Footer</f-footer>
      </f-container>
    </f-container>
  </div>
</template>
```

:::

## Container Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 170px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>direction</td>
      <td>子元素的排列方向</td>
      <td>
        <code>horizontal</code>|
        <code>vertical</code>
      </td>
      <td>
       <code>horizontal</code>
      </td>
    </tr>
  </tbody>
</table>

## Header Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 170px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>height</td>
      <td>顶栏高度</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>60px</code>
      </td>
    </tr>
  </tbody>
</table>

## Aside Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 170px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>	侧边栏宽度</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>300px</code>
      </td>
    </tr>
  </tbody>
</table>

## Footer Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 170px;">属性名</th>
      <th style="width: 220px;">说明</th>
      <th style="width: 300px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>height</td>
      <td>底栏高度</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>60px</code>
      </td>
    </tr>
  </tbody>
</table>

<style>
.common-layout .s-header,
.common-layout .s-footer,
.common-layout .s-main,
.common-layout .s-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}

.common-layout .s-header, .common-layout .s-footer { background-color: #c6e2ff; color: #303133; text-align: center; }

.common-layout .s-aside { background-color: #d9ecff; color: #303133; text-align: center; }

.common-layout .s-main { background-color: #ecf5ff; color: #303133; text-align: center; height: 150px; }

td, th {
   border: none!important;
}

</style>
