<template>
  <div>Demo Page</div>
  <f-select v-model="value" placeholder="Select" clearable>
    <!-- <f-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    /> -->

    <f-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #909399; font-size: 13px">{{
        item.value
      }}</span>
    </f-option>
  </f-select>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3',
    disabled: true
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5',
    disabled: true
  }
]
</script>
<style></style>
