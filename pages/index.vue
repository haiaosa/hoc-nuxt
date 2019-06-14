<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs2>
        <TheAdLeft />
      </v-flex>
      <v-flex d-flex xs8>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row wrap>
              <v-flex v-for="n in 8" :key="n" d-flex xs6>
                <TheMain1 />
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <TheMain2 />
          </v-flex>
          <v-flex xs12>
            <v-layout column wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <TheMain3 />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <TheAdRight />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheAdLeft from '~/components/AllAds/TheAdLeft'
import TheAdRight from '~/components/AllAds/TheAdRight'
import TheMain1 from '~/components/Index/TheMain1'
import TheMain2 from '~/components/Index/TheMain2'
import TheMain3 from '~/components/Index/TheMain3'

export default {
  layout: 'homeWithSidebar',
  components: {
    TheMain1,
    TheMain2,
    TheMain3,
    TheAdLeft,
    TheAdRight
  },
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
