<template>
  <!-- <h1>Button</h1>
  <div class="mb-10">
    <FButton>Default</FButton>
    <FButton type="primary">Primary</FButton>
    <FButton type="success">Success</FButton>
    <FButton type="info">Info</FButton>
    <FButton type="warning">Warning</FButton>
    <FButton type="danger">Danger</FButton>
  </div>

  <div class="mb-10">
    <FButton round>Default</FButton>
    <FButton type="primary" round>Primary</FButton>
    <FButton type="success" round>Success</FButton>
    <FButton type="info" round>Info</FButton>
    <FButton type="warning" round>Warning</FButton>
    <FButton type="danger" round>Danger</FButton>
  </div>

  <div class="mb-10">
    <FButton disabled>Default</FButton>
    <FButton type="primary" disabled>Primary</FButton>
    <FButton type="success" disabled>Success</FButton>
    <FButton type="info" disabled>Info</FButton>
    <FButton type="warning" disabled>Warning</FButton>
    <FButton type="danger" disabled>Danger</FButton>
  </div>

  <div class="mb-10">
    <FButton round disabled>Default</FButton>
    <FButton type="primary" round disabled>Primary</FButton>
    <FButton type="success" round disabled>Success</FButton>
    <FButton type="info" round disabled>Info</FButton>
    <FButton type="warning" round disabled>Warning</FButton>
    <FButton type="danger" round disabled>Danger</FButton>
  </div>

  <div class="mb-10">
    <FButton size="large">Large</FButton>
    <FButton size="default">Default</FButton>
    <FButton size="small">Small</FButton>
  </div>

  <div class="mb-10">
    <FButton size="large" round>Large</FButton>
    <FButton size="default" round>Default</FButton>
    <FButton size="small" round>Small</FButton>
  </div>

  <div class="mb-10">
    <FButton type="primary" loading>Loading</FButton>
    <FButton type="primary" round loading>Loading</FButton>
  </div> -->

  <h1>Pagination</h1>

  <FPagination :total="1" :hide-on-single-page="true" />
  <FPagination :total="11" />
  <FPagination :total="50" :current-page="2" />
  <FPagination :total="80" :current-page="4" />
  <FPagination :total="90" :current-page="5" />
</template>

<style scoped>
.mb-10 {
  margin-bottom: 10px;
}
</style>
