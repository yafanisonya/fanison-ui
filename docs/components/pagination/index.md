# Pagination 分页

## 基础用法

`total` 表示总条目数，`size` 用于设置每页显示的页码数量

:::demo

```vue
<template>
  <div>
    <FPagination :total="50" />
  <div>
    <FPagination :total="100" :page-size="50" />
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
    <FPagination :total="80" :current-page="4" />
  </div>
  <div>
    <div>显示左更多按钮</div>
    <FPagination :total="80" :current-page="5" />
  </div>

  <div>
    <div>显示左、右更多按钮</div>
    <FPagination :total="90" :current-page="5" />
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

<style>

.vp-doc ul, .vp-doc ol{
  padding:0 6px !important;
}

.vp-doc li + li{
  margin-top: 0 !important;
}

div{
  margin-bottom:10px;

  &.hide-desc{
    margin-top:20px;
  }
}
</style>
