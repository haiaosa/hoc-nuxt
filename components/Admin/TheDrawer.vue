<template>
  <v-navigation-drawer app :value="drawer" class="primary lighten-1">
    <v-treeview
      :items="items"
      :search="search"
      :filter="filter"
      :open.sync="open"
    >
      <template v-slot:prepend="{ item }">
        <v-icon
          v-if="item.children"
          v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
        ></v-icon>
      </template>
    </v-treeview>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Vuetify Human Resources',
        children: [
          {
            id: 2,
            name: 'Core team',
            children: [
              {
                id: 201,
                name: 'John'
              },
              {
                id: 202,
                name: 'Kael'
              },
              {
                id: 203,
                name: 'Nekosaur'
              },
              {
                id: 204,
                name: 'Jacek'
              },
              {
                id: 205,
                name: 'Andrew'
              }
            ]
          },
          {
            id: 3,
            name: 'Administrators',
            children: [
              {
                id: 301,
                name: 'Ranee'
              },
              {
                id: 302,
                name: 'Rachel'
              }
            ]
          },
          {
            id: 4,
            name: 'Contributors',
            children: [
              {
                id: 401,
                name: 'Phlow'
              },
              {
                id: 402,
                name: 'Brandon'
              },
              {
                id: 403,
                name: 'Sean'
              }
            ]
          }
        ]
      }
    ],
    open: [1, 2],
    search: null,
    caseSensitive: false
  }),
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined
    },
    drawer() {
      return this.$store.state.drawer
    }
  }
}
</script>
