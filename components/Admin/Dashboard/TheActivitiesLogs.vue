<template>
  <v-card>
    <v-card-actions>
      <v-btn icon class="mt-1">
        <v-icon small>sync</v-icon>
      </v-btn>
      <v-card-title primary-title>
        Activities Logs
      </v-card-title>
    </v-card-actions>
    <v-container fluid grid-list-md>
      <v-data-iterator
        :items="items"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        column
        wrap
      >
        <template v-slot:item="props">
          <v-flex>
            <v-card>
              <v-card-title
                >{{ props.item.name }} {{ props.item.action }}
                {{ props.item.time }} ({{ props.item.ip }})</v-card-title
              >
            </v-card>
          </v-flex>
        </template>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [
      {
        name: 'haiaosa',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'trangtd87',
        action: 'đã restored backup',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'minhphong',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '178.55.212.247'
      },
      {
        name: 'trangtd87',
        action: 'đã restored backup',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'minhphong',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '178.55.212.247'
      },
      {
        name: 'trangtd87',
        action: 'đã restored backup',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'minhphong',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '178.55.212.247'
      },
      {
        name: 'trangtd87',
        action: 'đã restored backup',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'minhphong',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '178.55.212.247'
      },
      {
        name: 'trangtd87',
        action: 'đã restored backup',
        time: '3 phut truoc',
        ip: '88.64.230.139'
      },
      {
        name: 'minhphong',
        action: 'đã đăng nhập',
        time: '3 phut truoc',
        ip: '178.55.212.247'
      }
    ]
  })
}
</script>

<style scoped></style>
