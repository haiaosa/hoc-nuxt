<template>
  <v-layout class="ma-2" column wrap>
    <v-flex>
      <v-btn color="primary">List Categories page</v-btn>
    </v-flex>
    <v-flex>
      <TheFilters />
    </v-flex>
    <v-flex>
      <TheDatas />
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
