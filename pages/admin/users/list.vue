<template>
  <v-layout class="ma-2" column wrap>
    <v-flex>
      <v-btn color="primary">List Users page</v-btn>
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
import TheFilters from '~/components/Admin/Users/TheFilters'
import TheDatas from '~/components/Admin/Users/TheDatas'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheFilters,
    TheDatas
  }
}
</script>

<style scoped></style>
