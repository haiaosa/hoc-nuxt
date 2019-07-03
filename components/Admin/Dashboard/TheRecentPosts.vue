<template>
  <v-card>
    <v-card-actions>
      <v-btn icon class="mt-1">
        <v-icon small>border_color</v-icon>
      </v-btn>
      <v-card-title primary-title>
        Recent Posts
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
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Create At', align: 'right', sortable: false, value: 'iron' }
      ],
      desserts: [
        {
          order: 1,
          name: 'Frozen Yogurt',
          iron: '1%'
        },
        {
          order: 2,
          name: 'Ice cream sandwich',
          iron: '1%'
        },
        {
          order: 3,
          name: 'Eclair',
          iron: '7%'
        },
        {
          order: 4,
          name: 'Cupcake',
          iron: '8%'
        },
        {
          order: 5,
          name: 'Gingerbread',
          iron: '16%'
        },
        {
          order: 6,
          name: 'Jelly bean',
          iron: '0%'
        },
        {
          order: 7,
          name: 'Lollipop',
          iron: '2%'
        },
        {
          order: 8,
          name: 'Honeycomb',
          iron: '45%'
        },
        {
          order: 9,
          name: 'Donut',
          iron: '22%'
        },
        {
          order: 10,
          name: 'KitKat',
          iron: '6%'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
