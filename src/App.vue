<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

const confirm = () => {
  console.log('confirm')
}
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test>
    <template #default>slot default</template>
    <template #title>
      <h3>slot title</h3>
    </template>
  </Test>

  <FButton type="primary">primary</FButton>
  <FButton type="secondary" @click="confirm">secondary</FButton>
  <FButton type="text">text</FButton>

  <FButton size="large">large</FButton>
  <FButton size="medium" disabled @click="confirm">medium</FButton>
  <FButton size="small">small</FButton>
</template>
