<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs2>
        <TheAdLeft />
      </v-flex>
      <v-flex d-flex xs8>
        <v-layout column wrap>
          <v-flex d-flex>
            <TheMain1 />
          </v-flex>
          <v-flex d-flex>
            <TheMain2 />
          </v-flex>
          <v-flex d-flex>
            <TheMain3 />
          </v-flex>
          <v-flex d-flex>
            <TheAdMid1 />
          </v-flex>
          <v-flex d-flex>
            <TheMain4 />
          </v-flex>
          <v-flex d-flex>
            <TheMain5 />
          </v-flex>
          <v-flex d-flex>
            <TheMain6 />
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
import TheMain1 from '~/components/Content/TheMain1'
import TheMain2 from '~/components/Content/TheMain2'
import TheMain3 from '~/components/Content/TheMain3'
import TheAdMid1 from '~/components/Content/TheAdMid1'
import TheMain4 from '~/components/Content/TheMain4'
import TheMain5 from '~/components/Content/TheMain5'
import TheMain6 from '~/components/Content/TheMain6'
import TheAdLeft from '~/components/AllAds/TheAdLeft'
import TheAdRight from '~/components/AllAds/TheAdRight'

export default {
  layout: 'homeWithSidebar',
  components: {
    TheMain1,
    TheMain2,
    TheMain3,
    TheMain4,
    TheMain5,
    TheMain6,
    TheAdMid1,
    TheAdLeft,
    TheAdRight
  },
  data: function() {
    return {
      active: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
