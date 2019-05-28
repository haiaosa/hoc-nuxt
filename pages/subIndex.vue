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
                          <v-flex d-flex xs7>
                            <v-card color="yellow darken-1" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs5>
                            <v-layout column wrap>
                              <v-flex>
                                <v-card color="yellow darken-4" flat>
                                  <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex>
                                <v-card color="yellow darken-4" flat>
                                  <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 4" :key="n" d-flex xs6>
                            <v-card color="green darken-5" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <v-card color="green lighten-3" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <v-card color="blue lighten-1" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
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
                  <v-flex d-flex>
                    <v-card color="blue lighten-3" dark>
                      <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex>
                    <v-card color="blue-grey lighten-3" dark>
                      <v-card-text>{{ lorem }}</v-card-text>
                    </v-card>
                  </v-flex>
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
export default {
  layout: 'homeWithSidebar',
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
