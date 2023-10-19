<template>
  <div>App.vue</div>
  <h1>Pagination</h1>
  <FPagination :total="1" :hide-on-single-page="true" />
  <FPagination :total="11" />
  <FPagination :total="50" :current-page="2" />
  <FPagination :total="80" :current-page="4" />
  <FPagination :total="90" :current-page="5" />

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

  <!-- <h1>Tab</h1>
  <FTabs v-model="activeTab" closable addable>
    <FTab name="1" title="Tab1">Tab 1 Content</FTab>
    <FTab name="2" title="Tab2">Tab 2 Content</FTab>
    <FTab name="3" title="Tab3">Tab 3 Content</FTab>
  </FTabs> -->

  <!-- <h1>Dialog</h1>
  <FButton @click="dialogVisible = true">click to open the Dialog</FButton>
  <FDialog v-model="dialogVisible" title="Tips">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <FButton @click="dialogVisible = false">Cancel</FButton>
        <FButton type="primary" @click="dialogVisible = false">
          Confirm
        </FButton>
      </span>
    </template>
  </FDialog> -->
  <!-- <FDialog
    v-model="dialogVisible"
    title="Dialog Title Center"
    :center="true"
    :align-center="true"
    :show-close="false"
  >
    <p>Dialog Content</p>
  </FDialog> -->

  <!-- <FDialog v-model="dialogVisible">
    <template #header="{ close }">
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <FButton type="danger" @click="close"> Close </FButton>
      </div>
    </template>
    This is dialog content.
  </FDialog> -->

  <!-- <FDialog v-model="dialogVisible" width="30%" title="Shipping address">
    <table style="border-collapse: separate; border-spacing: 0px 10px">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 100px">2016-05-02</td>
          <td style="width: 100px">John Smith</td>
          <td style="width: 300px">
            No.1518, Jinshajiang Road, Putuo District
          </td>
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
  </FDialog> -->
</template>

<script setup langt="ts">
import { ref } from 'vue'
const activeTab = ref('1')
const dialogVisible = ref(false)
</script>

<style scoped>
.mb-10 {
  margin-bottom: 10px;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-right: 16px;
  word-break: break-all;
}
</style>
