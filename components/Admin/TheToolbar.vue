<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click="toggle"></v-toolbar-side-icon>
    <v-toolbar-title class="display-1">Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat nuxt :to="{ name: 'admin' }">Admin</v-btn>
      <v-divider vertical></v-divider>
      <v-btn flat nuxt :to="{ name: 'learn' }">learn</v-btn>
      <v-divider vertical></v-divider>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn flat dark v-on="on">
            haiaosa
            <v-icon right>keyboard_arrow_down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in user"
            :key="index"
            nuxt
            :to="{ name: 'admin-login' }"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      user: [{ title: 'Profile' }, { title: 'Logout' }]
    }
  },
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
