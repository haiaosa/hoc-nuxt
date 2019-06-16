<template>
  <v-flex>
    <v-list>
      <v-list-group
        v-model="item.active"
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ subItem.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-flex>
</template>
<script>
export default {
  layout: 'adminWithSidebar',
  data() {
    return {
      items: [
        {
          action: 'restaurant',
          title: 'Dining',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
            { title: 'Bướm' },
            { title: 'Lồn' },
            { title: 'Lỗ đít' },
            { title: 'Lưỡi' }
          ]
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'fingerprint',
          title: 'Office',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'commute',
          title: 'Bướm khắm',
          active: true,
          items: [{ action: 'pregnant_woman', title: 'Bướm thối khắm' }]
        }
      ]
    }
  }
}
</script>
