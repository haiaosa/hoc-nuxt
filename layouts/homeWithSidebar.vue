<template>
  <v-app>
    <!-- <TheNavigationDrawer /> -->
    <TheToolbar />
    <TheContent />
  </v-app>
</template>

<script>
import TheToolbar from '~/components/cores/TheToolbar'
import TheNavigationDrawer from '~/components/cores/TheNavigationDrawer'
import TheContent from '~/components/cores/TheContent'

export default {
  components: {
    TheToolbar,
    TheNavigationDrawer,
    TheContent
  }
}
</script>
<style></style>
