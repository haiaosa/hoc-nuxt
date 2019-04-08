<template>
  <v-toolbar app>
    <v-toolbar-side-icon>
      <v-icon>home</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title>Truyện 1vs3</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat nuxt :to="{ name: 'note' }">Trang Mô tả</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Trang đọc chuyện</v-btn>
      <v-btn flat nuxt :to="{ name: 'index' }">Trang sắp xếp</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Thể loại</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Xếp hạng</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Lịch sử</v-btn>
      <v-btn flat nuxt :to="{ name: 'index' }">Theo dõi</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Thảo luận</v-btn>
      <v-btn flat nuxt :to="{ name: 'index' }">Nhân sự</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-badge color="red">
        <template v-slot:badge>
          <span>!</span>
        </template>
        <v-icon color="grey">
          mail
        </v-icon>
      </v-badge>
    </v-btn>
    <v-btn flat>Phong Nguyễn</v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  }
}
</script>

<style scoped></style>
