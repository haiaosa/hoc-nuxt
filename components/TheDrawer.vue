<template>
  <v-navigation-drawer app v-model="drawer" class="primary lighten-1">
    <v-list>
      <v-list-tile v-for="link in links" :key="link.text" nuxt :to="link.route">
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
</template>
<script>
export default {
  data: function() {
    return {
      links: [
        { icon: 'accessibility', text: 'Pháp luật', route: '/' },
        { icon: 'accessibility_new', text: 'Ẩm thực', route: '/foods' },
        { icon: 'accessible', text: 'Tin Phụ Nữ', route: '/woman' },
        { icon: 'accessible_forward', text: 'Du lịch', route: '/travel' },
        { icon: 'account_box', text: 'Ô tô', route: '/oto' }
      ]
    }
  },
  computed: {
    drawer() {
      return this.$store.state.drawer
    }
  }
}
</script>
