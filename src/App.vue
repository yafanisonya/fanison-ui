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
  <f-switch v-model="value1" />
  <f-switch v-model="value1" active-text="Open" inactive-text="Close" />

  <f-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <f-switch v-model="value" active-text="Open" inactive-text="Close" />
  <br />
  <f-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
  <f-switch v-model="value" disabled />
  <f-switch v-model="value" loading />
  <f-switch v-model="value1" loading />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(true)
const value1 = ref(false)
</script>

<style></style>
