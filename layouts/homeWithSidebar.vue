<template>
  <v-app dark>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content>
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex d-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from '~/components/TheToolbar'
import TheNavigationDrawer from '~/components/TheNavigationDrawer'

export default {
  components: {
    TheToolbar,
    TheNavigationDrawer
  },
  props: {
    source: String
  }
}
</script>
<style></style>
