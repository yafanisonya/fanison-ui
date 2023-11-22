# Card 卡片

## 基础用法

Card 组件由 `header` 和 `body` 组成。 `header` 是可选的，其内容取决于一个具名的 slot。

:::demo

```vue
<template>
  <f-card class="box-card">
    <template #header>
      <div class="flex">
        <span>Card name</span>
        <f-button>Operation button</f-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </f-card>
</template>
```

:::

## 简单卡片

卡片可以只有内容区域。

:::demo

```vue
<template>
  <f-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </f-card>
</template>
```

:::

## 带有阴影效果的卡片

通过 `shadow` 属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover`或 `never`。

:::demo

```vue
<template>
  <f-card shadow="always" class="box-card item"> Always </f-card>
  <f-card shadow="hover" class="box-card item"> Hover </f-card>
  <f-card shadow="never" class="box-card item"> Never </f-card>
</template>
```

:::

## Card Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 210px;">属性名</th>
      <th style="width: 200px;">说明</th>
      <th style="width: 250px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>卡片的标题</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>shadow</td>
      <td>卡片阴影显示时机</td>
      <td>
        <code>always</code>|
        <code>never</code>|
        <code>hover</code>
      </td>
      <td>
        <code>always</code>
      </td>
    </tr>
  </tbody>
</table>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

td, th {
   border: none!important;
}
</style>
