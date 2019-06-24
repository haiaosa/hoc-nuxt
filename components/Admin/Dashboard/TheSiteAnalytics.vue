<template>
  <v-card>
    <v-card-title primary-title>
      Site analytics
    </v-card-title>
    <v-layout row wrap>
      <v-flex xs7>
        <TheGraps />
      </v-flex>
      <v-flex xs5>
        <TheMaps />
      </v-flex>
      <v-flex xs12>
        <TheSiteAnalyticsItems />
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import TheGraps from '~/components/Admin/Dashboard/TheGraps'
import TheMaps from '~/components/Admin/Dashboard/TheMaps'
import TheSiteAnalyticsItems from '~/components/Admin/Dashboard/TheSiteAnalyticsItems'

export default {
  components: {
    TheGraps,
    TheMaps,
    TheSiteAnalyticsItems
  }
}
</script>

<style scoped></style>
