# Dialog 对话框

## 基础用法

需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。

Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 slot。 `title` 属性用于定义标题，它是可选的，默认值为空。

:::demo

```vue
<template>
  <f-button @click="dialogVisible = true">click to open the Dialog</f-button>
  <f-dialog v-model="dialogVisible" title="Tips">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <FButton @click="dialogVisible = false">Cancel</FButton>
        <FButton type="primary" @click="dialogVisible = false">
          Confirm
        </FButton>
      </span>
    </template>
  </f-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dialogVisible = ref(false)
    return {
      dialogVisible
    }
  }
})
</script>
```

:::

## 自定义头部

`header` 可用于自定义显示标题的区域。

:::demo

```vue
<template>
  <f-button @click="dialogVisible = true"
    >open Dialog with customized header</f-button
  >
  <f-dialog v-model="dialogVisible" width="40%">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <FButton type="danger" @click="close"> Close </FButton>
      </div>
    </template>
    This is dialog content.
  </f-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dialogVisible = ref(false)
    return {
      dialogVisible
    }
  }
})
</script>
```

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。

:::demo

```vue
<template>
  <f-button @click="dialogVisible = true">open a Table nested Dialog</f-button>
  <f-dialog v-model="dialogVisible" width="35%" title="Shipping address">
    <table style="border-collapse: separate; border-spacing: 0px 10px">
      <thead>
        <tr>
          <th style="width: 200px">Date</th>
          <th style="width: 200px">Name</th>
          <th style="width: 500px">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2016-05-02</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-04</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-01</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
        <tr>
          <td>2016-05-03</td>
          <td>John Smith</td>
          <td>No.1518, Jinshajiang Road, Putuo District</td>
        </tr>
      </tbody>
    </table>
  </f-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dialogVisible = ref(false)
    return {
      dialogVisible
    }
  }
})
</script>
```

:::

## 内容居中

将`center`设置为`true`即可使标题和底部居中。 `center`仅影响标题和底部区域。

:::demo

```vue
<template>
  <f-button @click="centerDialogVisible = true">
    click to open the Dialog
  </f-button>
  <f-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <f-button @click="centerDialogVisible = false">Cancel</f-button>
        <f-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </f-button>
      </span>
    </template>
  </f-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const centerDialogVisible = ref(false)
    return {
      centerDialogVisible
    }
  }
})
</script>
```

:::

## 居中对话框

设置 `align-center` 为 `true` 使对话框水平垂直居中。

:::demo

```vue
<template>
  <f-button @click="centerDialogVisible = true">
    click to open the Dialog
  </f-button>
  <f-dialog
    v-model="centerDialogVisible"
    title="Warning"
    width="30%"
    align-center
    :show-close="false"
  >
    <span>Open the dialog from the center from the screen</span>
    <template #footer>
      <span class="dialog-footer">
        <f-button @click="centerDialogVisible = false">Cancel</f-button>
        <f-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </f-button>
      </span>
    </template>
  </f-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const centerDialogVisible = ref(false)
    return {
      centerDialogVisible
    }
  }
})
</script>
```

:::

## Dialog Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 270px;">属性名</th>
      <th style="width: 410px;">说明</th>
      <th style="width: 80px">类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>是否显示 Dialog</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>对话框 Dialog 的标题</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>—</code>
      </td>
    </tr>
    <tr>
      <td>width</td>
      <td>对话框的宽度</td>
      <td>
        <code>string</code>
      </td>
      <td>
       <code>30%</code>
      </td>
    </tr>
    <tr>
      <td>show-close</td>
      <td>是否显示关闭按钮</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>true</code>
      </td>
    </tr>
    <tr>
      <td>center</td>
      <td>是否让 Dialog 的 header 和 footer 部分居中排列</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>align-center</td>
      <td>是否水平垂直对齐对话框</td>
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
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}

td, th {
   border: none!important;
}
</style>
