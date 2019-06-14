<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-btn color="primary" flat block>Video chọn lọc</v-btn>
    </v-flex>
    <v-flex d-flex xs7>
      <v-card>
        <v-img :src="require('~/assets/7.jpg')"></v-img>
        <v-card-title primary-title>
          Google Maps sẽ cảnh báo nếu tài xế taxi cố tình lái lòng vòng
        </v-card-title>
        <v-card-text class="caption">
          Một thanh niên người gặp tai nạn giao thông sau khi dùng chân điều
          khiển chiếc Harley Davidson với tốc độ cao và còn dùng tay nhắn
          tin.Jorian Ponomareff đến từ Pháp có một màn trình diễn ấn tượng với
          motor.
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs5>
      <v-layout column wrap>
        <v-flex v-for="n in 3" :key="n" xs6>
          <v-card>
            <v-container>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-img :src="require('~/assets/7.jpg')"></v-img>
                </v-flex>
                <v-flex xs6>
                  <v-card-title primary-title>
                    Tia sét rực sáng "xé toạc" bầu trời qua hiệu ứng quay chậm
                    của iPhone
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>

<style scoped></style>
