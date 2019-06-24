<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-flex>
        <TheSiteAnalytics />
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs6>
            <TheRecentPosts />
          </v-flex>
          <v-flex xs6>
            <TheTopMostVisitPages />
          </v-flex>
          <v-flex xs6>
            <TheTopBrowsers />
          </v-flex>
          <v-flex xs6>
            <TheTopReferrers />
          </v-flex>
          <v-flex xs6>
            <TheActivitiesLogs />
          </v-flex>
          <v-flex xs6>
            <TheRequestErrors />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheSiteAnalytics from '~/components/Admin/Dashboard/TheSiteAnalytics'
import TheRecentPosts from '~/components/Admin/Dashboard/TheRecentPosts'
import TheTopMostVisitPages from '~/components/Admin/Dashboard/TheTopMostVisitPages'
import TheTopBrowsers from '~/components/Admin/Dashboard/TheTopBrowsers'
import TheTopReferrers from '~/components/Admin/Dashboard/TheTopReferrers'
import TheActivitiesLogs from '~/components/Admin/Dashboard/TheActivitiesLogs'
import TheRequestErrors from '~/components/Admin/Dashboard/TheRequestErrors'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheSiteAnalytics,
    TheRecentPosts,
    TheTopMostVisitPages,
    TheTopBrowsers,
    TheTopReferrers,
    TheActivitiesLogs,
    TheRequestErrors
  }
}
</script>

<style scoped></style>
