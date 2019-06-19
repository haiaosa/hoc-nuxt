<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar />

    <v-content>
      <v-progress-linear
        color="warning"
        :indeterminate="true"
        height="1"
      ></v-progress-linear>
      <nuxt />
    </v-content>

    <TheFooter />
  </v-app>
</template>

<script>
import TheDrawer from '~/components/Admin/TheDrawer'
import TheToolbar from '~/components/Admin/TheToolbar'
import TheFooter from '~/components/Admin/TheFooter'

export default {
  components: {
    TheDrawer,
    TheToolbar,
    TheFooter
  }
}
</script>

<style scoped></style>
