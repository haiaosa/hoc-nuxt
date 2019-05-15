<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>24h</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="subheading">Nổi bật</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat nuxt :to="{ name: 'note' }">Trang Mô tả</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Trang đọc chuyện</v-btn>
      <v-btn flat nuxt :to="{ name: 'index' }">Trang sắp xếp</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style scoped></style>
