<template>
  <v-layout class="ma-2" column wrap>
    <v-flex>
      <v-btn color="primary">List Posts page</v-btn>
    </v-flex>
    <v-flex>
      <TheFilters />
    </v-flex>
    <v-flex>
      <TheDatas />
    </v-flex>
    <v-flex>
      <v-card class="yellow">
        <v-card-title primary-title>
          testing
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TheFilters from '~/components/Admin/Posts/TheFilters'
import TheDatas from '~/components/Admin/Posts/TheDatas'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheFilters,
    TheDatas
  }
}
</script>

<style scoped></style>
