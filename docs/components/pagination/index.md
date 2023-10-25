# Pagination 分页

## 基础用法

`total` 表示总条目数，`size` 用于设置每页显示的页码数量

:::demo

```vue
<template>
  <div>
    <f-pagination :total="50" />
  <div>
    <f-pagination :total="100" :page-size="50" />
  </div>
</template>
```

:::

## 显示更多按钮

:::demo

```vue
<template>
  <div>
    <div>显示右更多按钮</div>
    <f-pagination :total="80" :current-page="4" />
  </div>
  <div>
    <div>显示左更多按钮</div>
    <f-pagination :total="80" :current-page="5" />
  </div>

  <div>
    <div>显示左、右更多按钮</div>
    <f-pagination :total="90" :current-page="5" />
  </div>
</template>
```

:::

## 当只有一页时隐藏分页

:::demo

```vue
<template>
  <div>show pagination</div>
  <f-pagination :total="5" />

  <div class="hide-desc" v-if="hideStatus">hide pagination</div>
  <f-pagination :hide-on-single-page="hideStatus" :total="5" />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const hideStatus = ref(true)
    return {
      hideStatus
    }
  }
})
</script>
```

:::

## Pagination Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 400px;">属性名</th>
      <th style="width: 270px;">说明</th>
      <th style="width: 80px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>total</td>
      <td>总条目数</td>
      <td>
        <code>number</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>current-page / v-model:current-page</td>
      <td>当前页数</td>
      <td>
        <code>number</code>
      </td>
      <td>
       <code>1</code>
      </td>
    </tr>
    <tr>
      <td>page-size / v-model:page-size</td>
      <td>每页显示条目个数</td>
      <td>
        <code>number</code>
      </td>
      <td>
       <code>10</code>
      </td>
    </tr>
    <tr>
      <td>hide-on-single-page</td>
      <td>只有一页时是否隐藏</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
  </tbody>
</table>

<style scoped>

.vp-doc ul, .vp-doc ol{
  padding:0 6px !important;
}

.vp-doc li + li{
  margin-top: 0 !important;
  list-style-type:none
}

div{
  margin-bottom:10px;

  &.hide-desc{
    margin-top:20px;
  }
}

td, th {
   border: none!important;
}
</style>
