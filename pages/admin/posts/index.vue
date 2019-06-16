<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-flex>
        <TheFilters />
      </v-flex>
      <v-flex>
        <v-card>
          <TheDatas />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
