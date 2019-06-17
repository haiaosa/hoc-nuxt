<template>
  <v-navigation-drawer app :value="drawer" class="secondary lighten-1">
    <v-list>
      <v-list-tile nuxt :to="{ name: 'admin' }">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
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
          :to="{ name: subItem.link }"
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
          action: 'supervisor_account',
          title: 'User',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'bookmarks',
          title: 'Categories',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'local_parking',
          title: 'Posts',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'format_size',
          title: 'Tags',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'fingerprint',
          title: 'Roles',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'text_format',
          title: 'Advertisement',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
        },
        {
          action: 'camera',
          title: 'View',
          items: [
            {
              action: 'list',
              title: 'Lists',
              link: 'admin-posts-list'
            },
            {
              action: 'note_add',
              title: 'Add',
              link: 'admin-posts-add'
            },
            {
              action: 'lock_open',
              title: 'Edit',
              link: 'admin-posts-edit'
            },
            {
              action: 'priority_high',
              title: 'Delete',
              link: 'admin-posts-delete'
            }
          ]
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
