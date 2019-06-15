<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
    <v-toolbar-title class="display-1">Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat nuxt :to="{ name: 'index' }">Dau buoi</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    drawer() {
      return this.$store.state.drawer
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'toggle'
    })
  }
}
</script>
