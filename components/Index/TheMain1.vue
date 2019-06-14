<template>
  <v-card>
    <!-- <v-card-title primary-title>
      djtmemay
    </v-card-title> -->
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block>Tin tức trong ngày</v-btn>
      </v-flex>
      <v-flex>
        <v-card hover nuxt :to="{ name: 'note' }">
          <v-card-title primary-title>
            ẢNH-CLIP: Hiện trường vụ rơi máy bay ở Khánh Hòa, 2 phi công tử nạn
          </v-card-title>
          <v-container>
            <v-layout row wrap>
              <v-flex xs4>
                <v-img :src="require('~/assets/7.jpg')"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-text class="caption">
                  Vào khoảng 9h30 ngày 14/6, một chiếc máy bay bất ngờ rơi tại
                  khu vực thôn Dầu Sơn, xã Suối Tân, huyện Cam Lâm Khánh...
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex>
        <v-list three-line dense>
          <template v-for="(item, index) in items">
            <v-tooltip color="purple" top>
              <template v-slot:activator="{ on }">
                <v-list-tile v-on="on" :key="item.title" avatar @click="">
                  <v-list-tile-action>
                    <v-icon color="pink darken-4">trending_flat</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>{{
                      item.title
                    }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider
                  v-if="index + 1 < items.length"
                  :key="index"
                ></v-divider>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
          </template>
        </v-list>
      </v-flex>
      <v-flex>
        <div class="text-xs-center">
          <v-pagination v-model="page" :length="3"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title:
            'Cướp máy bay ép bồ nhí sống chung, doanh nhân lãnh án chung thân'
        },
        { title: 'Công dụng bất ngờ của robot tình dục giống người thật?' },
        {
          title:
            'Tình báo Mỹ sốc về số lượng vũ khí dày đặc Nga thiết lập ở Crimea'
        },
        {
          title:
            'Sắp chinh phục tiểu hành tinh chứa kho báu 10.000 triệu tỉ tỉ USD'
        },
        {
          title:
            'Vì sao đang là thế lực hùng cứ đại dương,alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Nga bán hết tàu sân bay cho Trung Quốc làm "mô hình giải...'
        },
        {
          title:
            'Chiến hạm “khủng nhất” của Nhật Bản phô cơ bắp cùng tàu sân bay Mỹ ở Biển Đông'
        },
        { title: 'Trump đưa 1.000 binh sĩ đến "sát nách" Nga' },
        {
          title:
            'Video: Nhà ga tàu điện ngầm sâu nhất TQ, tương đương tòa nhà 31 tầng'
        },
        {
          title:
            'Cựu Chủ tịch tỉnh Sóc Trăng thừa nhận được Trịnh Sướng tặng vé đi du lịch nước ngoài'
        }
      ],
      page: 1
    }
  }
}
</script>

<style scoped></style>
