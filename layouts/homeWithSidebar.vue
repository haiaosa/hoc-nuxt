<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar />

    <v-content>
      <v-progress-linear :indeterminate="true" height="1"></v-progress-linear>
      <nuxt />
    </v-content>

    <TheFooter />
  </v-app>
</template>

<script>
import TheDrawer from '~/components/TheDrawer'
import TheToolbar from '~/components/TheToolbar'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheDrawer,
    TheToolbar,
    TheFooter
  },
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
  })
}
</script>
