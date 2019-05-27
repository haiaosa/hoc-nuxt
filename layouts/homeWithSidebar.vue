<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar />

    <v-content>
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
