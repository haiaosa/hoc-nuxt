<template>
  <v-app dark>
    <TheToolbar />
    <v-content>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex d-flex lg9>
            <nuxt />
          </v-flex>
          <v-flex d-flex lg3>
            <TheSidebar />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from '~/components/TheToolbar'
import TheSidebar from '~/components/TheSidebar'

export default {
  components: {
    TheToolbar,
    TheSidebar
  },
  props: {
    source: String
  }
}
</script>
<style></style>
