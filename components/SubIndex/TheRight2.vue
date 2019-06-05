<template>
  <v-flex d-flex shrink>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-items>
          <v-btn flat large block :ripple="false" class="custom-btn">{{
            items[0].header
          }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list three-line dense>
        <template v-for="(item, index) in items[1]">
          <v-list-tile :key="item.subtitle" avatar @click="">
            <v-list-tile-avatar>
              {{ index + 1 }}
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="index + 1 < items[1].length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ['items']
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
