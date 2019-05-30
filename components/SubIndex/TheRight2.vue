<template>
  <v-flex d-flex shrink>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-items>
          <v-btn flat large block :ripple="false" class="custom-btn"
            >ẨM THỰC</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="item.subtitle" avatar>
            <v-list-tile-avatar>
              {{ index }}
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtitle: 'Món cá quỷ khiến thực khách hết hồn'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          subtitle: '10 nguyên tắc ăn uống hợp lý để ung thư không đến gõ cửa'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          subtitle: '6 loại thực phẩm tuyệt đối không nên ăn khi bụng đói'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          subtitle:
            'Căn nhà hình ống tăm tối bỗng lột xác nhờ thiết kế đơn giản...'
        }
      ]
    }
  }
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
