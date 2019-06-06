<template>
  <v-list three-line dense>
    <template v-for="(item, index) in items">
      <v-list-tile :key="item.title" @click="">
        <v-list-tile-content>
          <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>
<script>
export default {
  props: ['items']
}
</script>
