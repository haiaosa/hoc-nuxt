<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block>VIDEO CHỌN LỌC</v-btn>
      </v-flex>
      <v-flex>
        <v-card hover nuxt :to="{ name: 'note' }">
          <!-- <v-img :src="require('~/assets/7.jpg')" aspect-ratio="2.75"></v-img> -->
          <v-card-title primary-title>
            Video: Nhà ga tàu điện ngầm sâu nhất TQ, tương đương tòa nhà 31 tầng
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex v-for="n in 4" :key="n" d-flex xs3>
            <v-card hover nuxt :to="{ name: 'note' }">
              <v-img :src="require('~/assets/7.jpg')"></v-img>
              <v-card-title primary-title>
                Tàu dầu bị tấn công bằng đạn pháo, hải quân Mỹ tức tốc cử tàu
                chiến...
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
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
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      page: 1
    }
  }
}
</script>

<style scoped></style>
