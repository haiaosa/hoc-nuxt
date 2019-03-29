<template>
  <v-layout row wrap>
    <v-flex d-flex>
      <v-card-text>
        <v-text-field
          label="Tìm kiếm truyện"
          prepend-icon="search"
          single-line
          clearable
        ></v-text-field>
      </v-card-text>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex v-for="n in 5" :key="n" d-flex lg12>
      <v-card color="red lighten-2" dark>
        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>

<style scoped></style>
