<template>
  <v-app dark>
    <v-navigation-drawer app v-model="drawer" class="primary lighten-1">
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          nuxt
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="lime--text text--lighten-4">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
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

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'accessibility', text: 'Pháp luật', route: '/' },
        { icon: 'accessibility_new', text: 'Ẩm thực', route: '/foods' },
        { icon: 'accessible', text: 'Tin Phụ Nữ', route: '/woman' },
        { icon: 'accessible_forward', text: 'Du lịch', route: '/travel' },
        { icon: 'account_box', text: 'Ô tô', route: '/oto' }
      ]
    }
  }
}
</script>
<style></style>
