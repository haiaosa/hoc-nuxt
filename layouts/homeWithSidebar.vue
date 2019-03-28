<template>
  <v-app dark>
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
    <v-content>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex d-flex md9>
            <v-layout row wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <v-card color="indigo" dark>
                  <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex md3>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card-text>
                  <v-text-field
                    label="Tìm kiếm truyện"
                    prepend-icon="search"
                    single-line
                    clearable
                  ></v-text-field>
                </v-card-text>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex v-for="n in 5" :key="n" d-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ],
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  props: {
    source: String
  }
}
</script>
<style></style>
