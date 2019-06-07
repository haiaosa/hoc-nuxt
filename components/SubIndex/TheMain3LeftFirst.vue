<template>
  <v-card hover nuxt :to="{ name: 'note' }">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card-title primary-title>
          <div class="body-1">{{ item.title }}</div>
        </v-card-title>
      </v-flex>
      <v-flex xs5>
        <v-img :src="item.img"></v-img>
      </v-flex>
      <v-flex xs7>
        <div>
          <v-card-text class="caption">
            {{ item.content }}
          </v-card-text>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props: ['item']
}
</script>
