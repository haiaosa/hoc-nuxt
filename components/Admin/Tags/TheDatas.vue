<template>
  <v-card>
    <v-card-title>
      Tags
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
        <td class="text-xs-left">{{ props.item.fat }}</td>
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
        { text: 'Title', value: 'name', align: 'left' },
        { text: 'Status', value: 'iron', align: 'left' },
        { text: 'Created At', value: 'calories', align: 'left' },
        { text: 'Action', value: 'fat', align: 'left', sortable: false }
      ],
      desserts: [
        {
          id: 1,
          name: 'Top Search Engine Optimization Strategies!',
          calories: 'Events',
          fat: 'haiaosa',
          iron: '1%'
        },
        {
          id: 2,
          name: 'A Skin Cream That’s Proven To Work',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          iron: '1%'
        },
        {
          id: 3,
          name: 'Are You Still Using That Slow, Old Typewriter?',
          calories: 'Events',
          fat: 'haiaosa',
          iron: '7%'
        },
        {
          id: 4,
          name: '10,000 Web Site Visitors In One Month:Guaranteed',
          calories: 'Events',
          fat: 'haiaosa',
          iron: '8%'
        },
        {
          id: 5,
          name: 'Unlock The Secrets Of Selling High Ticket Items',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          iron: '16%'
        },
        {
          id: 6,
          name: '10 Reasons To Start Your Own, Profitable Website!',
          calories: 'Events',
          fat: 'haiaosa',
          iron: '0%'
        },
        {
          id: 7,
          name: 'Apple iMac with Retina 5K display review',
          calories: 'Uncategorized',
          fat: 'haiaosa',
          iron: '2%'
        },
        {
          id: 8,
          name: 'Simple Ways To Reduce Your Unwanted Wrinkles',
          calories: 'New & Updates',
          fat: 'haiaosa',
          protein: 6.5,
          iron: '45%'
        },
        {
          id: 9,
          name: 'A Skin Cream That’s Proven To Work1',
          calories: 'Business',
          fat: 'haiaosa',
          iron: '22%'
        },
        {
          id: 10,
          name: 'Are You Still Using That Slow, Old Typewriter',
          calories: 'Projects',
          fat: 'haiaosa',
          iron: '6%'
        },
        {
          id: 11,
          name: 'Used Car Dealer Sales Tricks Exposed',
          calories: 'Portfolio',
          fat: 'haiaosa',
          iron: '30%'
        }
      ]
    }
  }
}
</script>
