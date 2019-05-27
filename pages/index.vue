<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap justify-space-between>
      <v-flex d-flex lg2>
        <v-card color="indigo" dark>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex lg8>
        <v-flex d-flex lg12>
          <v-layout row wrap>
            <v-flex v-for="n in 2" :key="n" d-flex lg6>
              <v-card color="red lighten-2" dark>
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>
      <v-flex d-flex lg2>
        <v-card color="green" dark>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex d-flex lg12>
        <v-card color="cyan lighten-1" dark>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'homeWithSidebar',
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
