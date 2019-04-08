<template>
  <v-layout row wrap>
    <v-flex v-for="n in 2" :key="n" d-flex lg12>
      <v-card color="indigo" dark>
        <v-card-text>{{ lorem.slice(0, 200) }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'homeWithSidebar',
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
