<template>
  <v-card>
    <v-card-title>
      Posts
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-1"
      :loading="true"
      :search="search"
    >
      <v-progress-linear
        v-slot:progress
        color="blue"
        indeterminate
      ></v-progress-linear>
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              {{ props.header.text }}
            </span>
          </template>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template v-slot:items="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.carbs }}</td>
        <td class="text-xs-left">{{ props.item.calories }}</td>
        <td class="text-xs-left">{{ props.item.calories }}</td>
        <td class="text-xs-left">{{ props.item.fat }}</td>
        <td class="text-xs-left">{{ props.item.protein }}</td>
        <td class="text-xs-left">{{ props.item.iron }}</td>
        <td class="justify-left layout px-0">
          <v-icon small class="secondary--text mr-2" @click="">
            edit
          </v-icon>
          <v-icon small class="secondary--text " @click="">
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
      <template v-slot:pageText="props">
        Hiển thị từ {{ props.pageStart }} đến {{ props.pageStop }} trong tổng số
        {{ props.itemsLength }} bản ghi.
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      pagination: { sortBy: 'name' },
      selected: [],
      headers: [
        { text: 'ID', value: 'id', align: 'left' },
        { text: 'Username', value: 'name', align: 'left' },
        { text: 'Email', value: 'fat', align: 'left' },
        { text: 'Role', value: 'calories', align: 'left' },
        { text: 'Created At', value: 'protein', align: 'left' },
        { text: 'Status', value: 'iron', align: 'left' },
        { text: 'Is SUPER?', value: 'calories', align: 'left' },
        { text: 'Mark', value: 'carbs', align: 'left', sortable: false },
        { text: 'Action', value: 'name', align: 'left', sortable: false }
      ],
      desserts: [
        {
          id: 1,
          name: 'Top Search Engine Optimization Strategies!',
          calories: 'Events',
          fat: 'haiaosa',
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          id: 2,
          name: 'A Skin Cream That’s Proven To Work',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          id: 3,
          name: 'Are You Still Using That Slow, Old Typewriter?',
          calories: 'Events',
          fat: 'haiaosa',
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          id: 4,
          name: '10,000 Web Site Visitors In One Month:Guaranteed',
          calories: 'Events',
          fat: 'haiaosa',
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          id: 5,
          name: 'Unlock The Secrets Of Selling High Ticket Items',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          id: 6,
          name: '10 Reasons To Start Your Own, Profitable Website!',
          calories: 'Events',
          fat: 'haiaosa',
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          id: 7,
          name: 'Apple iMac with Retina 5K display review',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          id: 8,
          name: 'Simple Ways To Reduce Your Unwanted Wrinkles',
          calories: 'New & Updates',
          fat: 'haiaosa',
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          id: 9,
          name: 'A Skin Cream That’s Proven To Work1',
          calories: 'Business',
          fat: 'haiaosa',
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          id: 10,
          name: 'Are You Still Using That Slow, Old Typewriter',
          calories: 'Projects',
          fat: 'haiaosa',
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          id: 11,
          name: 'Used Car Dealer Sales Tricks Exposed',
          calories: 'Portfolio',
          fat: 'haiaosa',
          carbs: 165,
          protein: 74,
          iron: '30%'
        }
      ]
    }
  }
}
</script>
