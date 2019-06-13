<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block left>TIN LIÊN QUAN </v-btn>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex v-for="n in 6" :key="n" d-flex xs4>
            <v-card hover nuxt :to="{ name: 'note' }">
              <v-img :src="require('~/assets/7.jpg')"></v-img>
              <v-card-title primary-title>
                Nhà thổ lớn nhất thế giới thách thức robot tình dục
              </v-card-title>
            </v-card>
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
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>

<style scoped></style>
