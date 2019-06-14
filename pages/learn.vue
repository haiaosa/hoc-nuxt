<template>
  <v-flex>
    <v-list three-line dense>
      <template v-for="(item, index) in items">
        <v-tooltip color="purple" top>
          <template v-slot:activator="{ on }">
            <v-list-tile v-on="on" :key="item.title" avatar @click="">
              <v-list-tile-action>
                <v-icon color="pink darken-4">minimize</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </template>
    </v-list>
  </v-flex>
</template>
<script>
export default {
  layout: 'homeWithSidebar',

  data() {
    return {
      valueDeterminate: 80
    }
  }
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
