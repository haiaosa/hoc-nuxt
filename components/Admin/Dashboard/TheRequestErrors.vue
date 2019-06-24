<template>
  <v-card>
    <v-card-title primary-title>
      Request Errors
    </v-card-title>
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
        { text: 'Status Code', align: 'right', sortable: false, value: 'iron' }
      ],
      desserts: [
        {
          order: 1,
          name: 'Frozen Yogurt',
          iron: '404'
        },
        {
          order: 2,
          name: 'Ice cream sandwich',
          iron: '404'
        },
        {
          order: 3,
          name: 'Eclair',
          iron: '404'
        },
        {
          order: 4,
          name: 'Cupcake',
          iron: '404'
        },
        {
          order: 5,
          name: 'Gingerbread',
          iron: '404'
        },
        {
          order: 6,
          name: 'Jelly bean',
          iron: '404'
        },
        {
          order: 7,
          name: 'Lollipop',
          iron: '404'
        },
        {
          order: 8,
          name: 'Honeycomb',
          iron: '404'
        },
        {
          order: 9,
          name: 'Donut',
          iron: '404'
        },
        {
          order: 10,
          name: 'KitKat',
          iron: '404'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
