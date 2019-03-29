<template>
  <v-toolbar app clipped-right>
    <v-toolbar-side-icon>
      <v-icon>home</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-items>
      <v-btn flat nuxt :to="{ name: 'index' }">Trang chủ</v-btn>
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
    <v-toolbar-side-icon>
      <v-icon>home</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-side-icon>
      <v-badge color="red">
        <template v-slot:badge>
          <span>!</span>
        </template>
        <v-icon color="grey">
          mail
        </v-icon>
      </v-badge>
    </v-toolbar-side-icon>
    <v-toolbar-items>
      <v-btn flat>Phong Nguyễn</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index" @click="">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
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
