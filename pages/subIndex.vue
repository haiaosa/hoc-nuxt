<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs2>
        <TheAdLeft/>
      </v-flex>
      <v-flex d-flex xs8>
        <v-layout column wrap>
          <TheAdTopMid/>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs8>
                <v-tabs
                  v-model="active"
                  color="cyan"
                  dark
                  slider-color="red lighten-2"
                  grow
                >
                  <v-tab v-for="n in 3" :key="n" ripple> Item {{ n }} </v-tab>
                  <v-tab-item v-for="n in 3" :key="n">
                    <v-layout column wrap mt-1>
                      <v-flex d-flex>
                        <TheMain1 :items="text"/>
                      </v-flex>
                      <v-flex d-flex>
                        <TheMain2 :items="newsHN" title="Tin lung tung :D"/>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <TheAdMid2/>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <TheMain3 :items="newsHN" :lists="today"/>
                      </v-flex>
                      <v-flex d-flex>
                        <TheMain4 :items="companies" title="Thông tin doanh nghiệp"/>
                      </v-flex>
                      <v-flex d-flex>
                        <TheMain5 :items="girls" title="Dành riêng cho phái đẹp"/>
                      </v-flex>
                    </v-layout>
                  </v-tab-item>
                </v-tabs>
              </v-flex>
              <v-flex d-flex xs4>
                <v-layout column wrap>
                  <TheRight1 :items="market" />
                  <TheRight2 :items="cuisine" />
                  <TheRight2 :items="stock" />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <TheAdRight/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheRight1 from '~/components/SubIndex/TheRight1'
import TheRight2 from '~/components/SubIndex/TheRight2'
import TheMain1 from '~/components/SubIndex/TheMain1'
import TheMain2 from '~/components/SubIndex/TheMain2'
import TheMain3 from '~/components/SubIndex/TheMain3'
import TheMain4 from '~/components/SubIndex/TheMain4'
import TheMain5 from '~/components/SubIndex/TheMain5'
import TheAdTopMid from '~/components/SubIndex/TheAdTopMid'
import TheAdLeft from '~/components/SubIndex/TheAdLeft'
import TheAdRight from '~/components/SubIndex/TheAdRight'
import TheAdMid2 from '~/components/SubIndex/TheAdMid2'

export default {
  components: {
    TheRight1,
    TheRight2,
    TheMain1,
    TheMain2,
    TheMain3,
    TheMain4,
    TheMain5,
    TheAdTopMid,
    TheAdLeft,
    TheAdRight,
    TheAdMid2
  },
  layout: 'homeWithSidebar',
  data: function() {
    return {
      active: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  computed: {
    market() {
      return this.$store.state.market.market
    },
    cuisine() {
      return this.$store.state.cuisine.cuisine
    },
    stock() {
      return this.$store.state.stock.stock
    },
    newsHN() {
      return this.$store.state.newsHN.newsHN
    },
    today() {
      return this.$store.state.newsHN.today
    },
    companies() {
      return this.$store.state.companies.companies
    },
    girls() {
      return this.$store.state.girls.girls
    }
  }
}
</script>
