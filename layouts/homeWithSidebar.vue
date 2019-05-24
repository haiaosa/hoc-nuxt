<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheDrawer from '~/components/TheDrawer'
import TheToolbar from '~/components/TheToolbar'

export default {
  components: {
    TheDrawer,
    TheToolbar
  }
}
</script>
