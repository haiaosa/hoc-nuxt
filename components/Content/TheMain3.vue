<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block>Robot tình dục</v-btn>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex v-for="n in 4" :key="n" d-flex xs3>
            <v-card hover nuxt :to="{ name: 'note' }">
              <v-img :src="require('~/assets/6.png')"></v-img>
              <v-card-title primary-title>
                Robot tình dục là cứu tinh của nhiều cặp vợ chồng?
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <div class="text-xs-center">
          <v-pagination v-model="page" :length="4"></v-pagination>
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
