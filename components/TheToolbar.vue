<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
    <v-toolbar-title class="display-1">24h - Neighbours</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat nuxt :to="{ name: 'index' }">Bóng đá</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Kinh doanh</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Hi - Tech</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Showbiz</v-btn>
      <v-btn flat nuxt :to="{ name: 'note' }">Phái đẹp</v-btn>
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
