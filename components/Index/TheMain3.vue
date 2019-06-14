<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block>Giáo dục du học </v-btn>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card hover nuxt :to="{ name: 'note' }">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs3>
                    <v-img :src="require('~/assets/7.jpg')"></v-img>
                  </v-flex>
                  <v-flex xs9>
                    <v-layout column wrap>
                      <v-flex>
                        <v-card-title primary-title>
                          Google Maps sẽ cảnh báo nếu tài xế taxi cố tình lái
                          lòng vòng
                        </v-card-title>
                      </v-flex>
                      <v-flex>
                        <v-card-text class="caption">
                          Một thanh niên người gặp tai nạn giao thông sau khi
                          dùng chân điều khiển chiếc Harley Davidson với tốc độ
                          cao và còn dùng tay nhắn tin.Jorian Ponomareff đến từ
                          Pháp có một màn trình diễn ấn tượng với motor.
                        </v-card-text>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs9 offset-xs3>
            <v-list three-line dense>
              <template v-for="(item, index) in items">
                <v-tooltip color="purple" top>
                  <template v-slot:activator="{ on }">
                    <v-list-tile v-on="on" :key="item.title" avatar @click="">
                      <v-list-tile-action>
                        <v-icon color="pink darken-4">minimize</v-icon>
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
        </v-layout>
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
            'Cựu Chủ tịch tỉnh Sóc Trăng thừa nhận được Trịnh Sướng tặng vé đi du lịch nước ngoài'
        }
      ],
      page: 1
    }
  }
}
</script>

<style scoped></style>
