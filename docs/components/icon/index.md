# Icon 图标

## 基本用法

:::demo

```vue
<template>
  <div class="icon-list">
    <f-icon name="plus"></f-icon>
    <f-icon name="minus"></f-icon>
    <f-icon name="search"></f-icon>
  </div>
</template>
```

:::

## 颜色大小

:::demo

```vue
<template>
  <div class="icon-list">
    <f-icon name="plus" color="red" :size="60"></f-icon>
    <f-icon name="minus" color="blue" :size="40"></f-icon>
    <f-icon name="search" color="green" size="20px"></f-icon>
  </div>
</template>
```

:::

## 图标集合

:::demo

```vue
<template>
  <ul class="demo-icon-list">
    <li class="icon-item" v-for="icon in icons" :key="icon">
      <span class="demo-svg-icon">
        <f-icon :name="icon" class="f-icon"></f-icon>
        <span class="icon-name">{{ icon }}</span>
      </span>
    </li>
  </ul>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const icons = ref([
      'search',
      'plus',
      'minus',
      'closecircle',
      'circleplus',
      'star',
      'notification',
      'arrowleft',
      'arrowright',
      'arrowup',
      'arrowdown',
      'notification',
      'female',
      'male',
      'house',
      'setting',
      'view',
      'connection',
      'position',
      'link',
      'loading',
      'fullscreen',
      'pointer',
      'clock',
      'refresh',
      'service',
      'zoomin',
      'zoomout',
      'user',
      'hide',
      'edit',
      'share',
      'lock',
      'comment',
      'upload',
      'bell',
      'switch',
      'filter',
      'delete',
      'more',
      'check',
      'menu'
    ])
    return {
      icons
    }
  }
})
</script>
```

:::

## Icon Attributes

<table style="border-collapse: separate; border-spacing: 0px 10px; width:100%">
  <thead>
    <tr align="left">
      <th style="width: 200px;">属性名</th>
      <th style="width: 160px;">说明</th>
      <th style="width: 200px">类型</th>
      <th style="width: 200px">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td>
      <td>颜色</td>
      <td>
        <code>string</code>
      </td>
      <td>
         <code>继承颜色</code>
      </td>
    </tr>
    <tr>
      <td>size</td>
      <td>图标的大小</td>
      <td>
        <code>string</code>|
        <code>number</code>
      </td>
      <td>
        <code>继承字体大小</code>
      </td>
    </tr>
  </tbody>
</table>

<style>
.icon-list{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 200px;
}

.vp-doc li + li{
  margin-top: 0 !important;
  list-style-type:none
}

td, th {
   border: none!important;
}


.demo-icon-item{
  margin-top:24px;
}
.demo-icon-title{
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
}

.demo-icon-list{
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7,1fr);
}

.demo-icon-list .icon-item{
  text-align: center;
  color: #606266;
  height: 90px;
  font-size: 13px;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}

.demo-icon-list .icon-item .demo-svg-icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}

.f-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
  font-size: inherit;
}

.demo-icon-list .icon-item .demo-svg-icon .icon-name{
  margin-top:8px;
}

</style>
