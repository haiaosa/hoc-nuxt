<template>
  <v-layout row wrap>
    <v-flex v-for="n in 2" :key="n" d-flex xs6>
      <v-card>
        <v-layout column wrap>
          <v-flex>
            <v-btn color="primary" flat block>THẾ GIỚI</v-btn>
          </v-flex>
          <v-flex>
            <v-card hover nuxt :to="{ name: 'note' }">
              <v-card-title primary-title>
                Bộ Văn hóa có ý kiến về việc đóng cửa dinh thự vua Mèo
              </v-card-title>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs5>
                    <v-img :src="require('~/assets/2.jpg')"></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-text class="caption">
                      Hạm đội 5 hải quân Mỹ cho biết họ nhận được 2 cuộc gọi cầu
                      cứu khẩn cấp của 2 tàu chở dầu hôm...
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex>
            <v-list three-line dense>
              <template v-for="(item, i) in items">
                <v-tooltip color="purple" top>
                  <template v-slot:activator="{ on }">
                    <v-list-tile v-on="on" :key="item.title" @click="">
                      <v-list-tile-action>
                        <v-icon color="pink darken-4">trending_flat </v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>{{
                          item.title
                        }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="i + 1 < items.length" :key="i"></v-divider>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
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
