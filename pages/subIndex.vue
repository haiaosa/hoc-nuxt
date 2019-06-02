<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs2>
        <v-card color="grey lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs8>
        <v-layout column wrap>
          <v-flex d-flex>
            <v-card color="blue-grey lighten-1" dark>
              <v-card-text>
                <p class="display-4 text-uppercase text-xs-center">
                  Quảng cáo here
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
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
                        <v-layout row wrap>
                          <v-flex d-flex xs8>
                            <v-card
                              color="yellow darken-1"
                              flat
                              nuxt
                              :to="{ name: 'index' }"
                            >
                              <v-img :src="require('~/assets/1.jpg')">
                                <v-layout
                                  align-end
                                  justify-start
                                  row
                                  wrap
                                  fill-height
                                >
                                  <v-flex xs12>
                                    <v-card-title>
                                      Cá chết hàng loạt nổi trắng hồ Văn Chương
                                    </v-card-title>
                                    <v-card-text>
                                      {{ text }}
                                    </v-card-text>
                                  </v-flex>
                                </v-layout>
                              </v-img>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs4>
                            <v-layout column wrap>
                              <v-flex>
                                <v-card
                                  color="yellow darken-4"
                                  flat
                                  nuxt
                                  :to="{ name: 'index' }"
                                >
                                  <v-img :src="require('~/assets/2.jpg')">
                                    <v-layout
                                      align-end
                                      justify-start
                                      row
                                      wrap
                                      fill-height
                                    >
                                      <v-flex xs12>
                                        <v-card-title>
                                          Ba năm Hà Nội trả hơn 7 tỷ thuê phần
                                          mềm của Nhật Cường
                                        </v-card-title>
                                      </v-flex>
                                    </v-layout>
                                  </v-img>
                                </v-card>
                              </v-flex>
                              <v-flex>
                                <v-card
                                  color="yellow darken-4"
                                  flat
                                  nuxt
                                  :to="{ name: 'index' }"
                                >
                                  <v-img :src="require('~/assets/3.jpg')">
                                    <v-layout
                                      align-end
                                      justify-start
                                      row
                                      wrap
                                      fill-height
                                    >
                                      <v-flex xs12>
                                        <v-card-title>
                                          Về "chung một nhà", 8 sở ngành Hà Nội
                                          hoạt động thế nào?
                                        </v-card-title>
                                      </v-flex>
                                    </v-layout>
                                  </v-img>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex
                            v-for="(news, index) in newsHN"
                            :key="index"
                            d-flex
                            xs6
                          >
                            <v-card flat nuxt :to="{ name: 'index' }">
                              <v-card-title primary-title>
                                {{ news.title }}
                              </v-card-title>
                              <v-layout row wrap>
                                <v-flex d-flex xs6>
                                  <v-img :src="news.img"></v-img>
                                </v-flex>
                                <v-flex d-flex xs6>
                                  <v-card-text>
                                    {{ news.content }}
                                  </v-card-text>
                                </v-flex>
                              </v-layout>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <v-card color="green lighten-3" flat>
                              <v-card-text>Quảng cáo here</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex d-flex xs6>
                            <v-card color="blue lighten-1" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs6>
                            <v-layout column wrap>
                              <v-flex v-for="n in 2" :key="n" d-flex xs6>
                                <v-card color="blue lighten-1" flat>
                                  <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-card color="yellow darken-4" flat>
                          <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex>
                        <v-card color="brown darken-2" flat>
                          <v-card-text>{{ text }}</v-card-text>
                        </v-card>
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
        <v-card color="grey lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheRight1 from '~/components/SubIndex/TheRight1'
import TheRight2 from '~/components/SubIndex/TheRight2'

export default {
  components: {
    TheRight1,
    TheRight2
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
    }
  }
}
</script>
