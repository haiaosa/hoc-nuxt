<template>
  <v-navigation-drawer app :value="drawer" class="secondary lighten-1">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.action"
        v-model="item.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          nuxt
          :to="{ name: 'note' }"
        >
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          action: 'dashboard',
          title: 'Dashboard',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'supervisor_account',
          title: 'User',
          active: true,
          items: [
            { action: 'fingerprint', title: 'Breakfast & brunch' },
            { action: 'fingerprint', title: 'New American' },
            { action: 'fingerprint', title: 'Sushi' },
            { action: 'fingerprint', title: 'Bướm' },
            { action: 'fingerprint', title: 'Lồn' },
            { action: 'fingerprint', title: 'Lỗ đít' },
            { action: 'fingerprint', title: 'Lưỡi' }
          ]
        },
        {
          action: 'bookmarks',
          title: 'Categories',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'local_parking',
          title: 'Posts',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'format_size',
          title: 'Tags',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'fingerprint',
          title: 'Roles',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'text_format',
          title: 'Advertisement',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'camera',
          title: 'View',
          items: [{ action: 'local_offer', title: 'Bướm thối khắm' }]
        }
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
