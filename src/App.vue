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

  <!-- <div>
    <f-checkbox v-model="checked1" label="Option 1" size="large" />
    <f-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <f-checkbox v-model="checked3" label="Option 1" />
    <f-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <f-checkbox v-model="checked5" label="Option 1" size="small" />
    <f-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <f-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <f-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>

  <div>
    <f-checkbox v-model="checked1" label="Option1" size="large" border />
    <f-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div>
    <f-checkbox v-model="checked3" label="Option1" border />
    <f-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div>
    <f-checkbox v-model="checked3" label="Option1" border disabled />
    <f-checkbox v-model="checked4" label="Option2" border disabled />
  </div> -->

  <f-checkbox-group v-model="checkList" size="large">
    <f-checkbox label="Option A" />
    <f-checkbox label="Option B" />
    <f-checkbox label="Option C" />
    <f-checkbox label="disabled" disabled />
    <f-checkbox label="selected and disabled" disabled />
  </f-checkbox-group>

  <f-checkbox-group v-model="checkList" size="small">
    <f-checkbox label="Option A" />
    <f-checkbox label="Option B" />
    <f-checkbox label="Option C" />
    <f-checkbox label="disabled" disabled />
    <f-checkbox label="selected and disabled" disabled />
  </f-checkbox-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const checkList = ref(['selected and disabled', 'Option A'])
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(true)
const checked6 = ref(false)
</script>
