<template>
  <v-card>
    <v-card-actions>
      <v-btn icon class="mt-1">
        <v-icon small>view_list</v-icon>
      </v-btn>
      <v-card-title primary-title>
        Top Most Visit Pages
      </v-card-title>
    </v-card-actions>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.order }}</td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '#', sortable: false },
        {
          text: 'URL',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Views', align: 'right', sortable: false, value: 'iron' }
      ],
      desserts: [
        {
          order: 1,
          name: 'Frozen Yogurt',
          iron: '6188 (Views)'
        },
        {
          order: 2,
          name: 'Ice cream sandwich',
          iron: '6188 (Views)'
        },
        {
          order: 3,
          name: 'Eclair',
          iron: '6188 (Views)'
        },
        {
          order: 4,
          name: 'Cupcake',
          iron: '6188 (Views)'
        },
        {
          order: 5,
          name: 'Gingerbread',
          iron: '6188 (Views)'
        },
        {
          order: 6,
          name: 'Jelly bean',
          iron: '6188 (Views)'
        },
        {
          order: 7,
          name: 'Lollipop',
          iron: '6188 (Views)'
        },
        {
          order: 8,
          name: 'Honeycomb',
          iron: '6188 (Views)'
        },
        {
          order: 9,
          name: 'Donut',
          iron: '6188 (Views)'
        },
        {
          order: 10,
          name: 'KitKat',
          iron: '6188 (Views)'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
