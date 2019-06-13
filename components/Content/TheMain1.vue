<template>
  <v-card>
    <v-layout column wrap>
      <v-flex>
        <v-breadcrumbs :items="items" large>
          <template v-slot:divider>
            <v-icon>forward</v-icon>
          </template>
        </v-breadcrumbs>
      </v-flex>
      <v-flex>
        <v-card-title primary-title>
          <div>
            <p class="display-2 mb-0">
              Mỹ đang lo ngại vì nguy cơ bị thua thiệt trước Trung Quốc?
            </p>
            <br />
            <p class="subheading mb-0 font-weight-medium">
              Sự hiện diện quân sự ngày càng lớn của Trung Quốc ở Châu Phi đang
              khiến Washington thực sự lo sợ, khi các quan chức Lầu Năm Góc bày
              tỏ quan ngại rằng Bắc Kinh đang giành được lòng tin từ nhiều nước
              vốn là đồng minh của Mỹ trong khu vực.
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
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: ''
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'subIndex'
        },
        {
          text: 'Link 2',
          disabled: false,
          href: 'content'
        },
        {
          text: 'Link 3',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
