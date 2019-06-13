<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary" flat block>Dành cho phái đẹp</v-btn>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex v-for="i in 8" :key="i" xs6>
            <v-card flat hover nuxt :to="{ name: 'note' }">
              <v-layout row wrap class="ma-1">
                <v-flex xs1>
                  <v-card-actions>
                    <v-btn icon :ripple="false" class="custom-btn">
                      <v-icon class="green--text" small>play_arrow</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-flex>
                <v-flex xs11>
                  <v-tooltip color="purple" top>
                    <template v-slot:activator="{ on }">
                      <v-card-text v-on="on" class="text-truncate body-1">
                        Lớn bằng trẻ 4 tuổi, mẹ "vỡ kế hoạch" khi ân ái với
                        chồng, mang thai không ai chúc mừng
                      </v-card-text>
                    </template>
                    <span
                      >Chuyên gia Devlin cũng cho rằng robot tình dục chỉ thu
                      hút được nam giới, chứ không phải nữ giới. “Tôi không nghĩ
                      một robot tình dục nam có thể thu hút nữ giới. Bởi đã có
                      nhiều đồ chơi tình dục giành cho nữ giới”.</span
                    >
                  </v-tooltip>
                </v-flex>
              </v-layout>
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

<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
