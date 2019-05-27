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
            <v-card>
              <v-card-title primary-title>
                <div>
                  <p class="display-2 mb-0">
                    Mỹ đang lo ngại vì nguy cơ bị thua thiệt trước Trung Quốc?
                  </p>
                  <br />
                  <p class="subheading mb-0 font-weight-medium">
                    Sự hiện diện quân sự ngày càng lớn của Trung Quốc ở Châu Phi
                    đang khiến Washington thực sự lo sợ, khi các quan chức Lầu
                    Năm Góc bày tỏ quan ngại rằng Bắc Kinh đang giành được lòng
                    tin từ nhiều nước vốn là đồng minh của Mỹ trong khu vực.
                  </p>
                  <br />
                  <p class="body-1">{{ lorem }}</p>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share Fanpage</v-btn>
                <v-btn flat color="blue">Share Facebook</v-btn>
                <v-spacer></v-spacer>
                <p class="body-1">Anh Tuấn (Infonet)</p>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="pink lighten-2" dark>
              <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
            </v-card>
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
