<template>
  <div>App.vue</div>
  <!-- <h1>Icon</h1>
  <FIcon name="plus"></FIcon>
  <FIcon name="https://vitejs.dev/logo.svg" size="30px"></FIcon>

  <FIcon name="plus" color="red" :size="60"></FIcon>
  <FIcon name="minus" color="black" :size="40"></FIcon>
  <FIcon name="search" color="green"></FIcon>

  <FIcon component="search" color="green" :size="20"></FIcon>
  <FIcon component="plus" color="red" :size="40"></FIcon>
  <FIcon component="minus" color="black" :size="60"></FIcon>
  <ArrowDownIcon color="yellow" :size="40"></ArrowDownIcon> -->

  <div class="my-2 flex items-center text-sm">
    <f-radio-group v-model="radio1" class="ml-4">
      <f-radio label="1" size="large">Option 1</f-radio>
      <f-radio label="2" size="large">Option 2</f-radio>
    </f-radio-group>
  </div>
  <div class="my-2 flex items-center text-sm">
    <f-radio-group v-model="radio2" class="ml-4">
      <f-radio label="1">Option 1</f-radio>
      <f-radio label="2">Option 2</f-radio>
    </f-radio-group>
  </div>

  <div>
    <f-radio-group v-model="radio1">
      <f-radio label="1" size="large" border>Option A</f-radio>
      <f-radio label="2" size="large" border>Option B</f-radio>
    </f-radio-group>
  </div>
  <div style="margin-top: 20px">
    <f-radio-group v-model="radio2" size="small">
      <f-radio label="1" border>Option A</f-radio>
      <f-radio label="2" border>Option B</f-radio>
    </f-radio-group>
  </div>
  <div style="margin-top: 20px">
    <f-radio-group v-model="radio2" size="small" disabled>
      <f-radio label="1" border>Option A</f-radio>
      <f-radio label="2" border>Option B</f-radio>
    </f-radio-group>
  </div>

  <f-radio v-model="radio" label="disabled" size="small">Option A</f-radio>
  <f-radio v-model="radio" label="selected and disabled" size="small"
    >Option B</f-radio
  >
</template>
<script setup lang="ts">
import { ref } from 'vue'
const radio = ref('selected and disabled')
const radio1 = ref('1')
const radio2 = ref('1')
</script>

<style>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
