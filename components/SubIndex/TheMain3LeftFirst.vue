<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      nuxt
      :to="{ name: 'note' }"
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card-title primary-title>
            <div class="body-1">{{ item.title }}</div>
          </v-card-title>
        </v-flex>
        <v-flex xs5 pl-4>
          <v-img :src="item.img"></v-img>
        </v-flex>
        <v-flex xs7>
          <div>
            <v-card-text class="caption pt-0">
              {{ item.content }}
            </v-card-text>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: ['item'],
  data: () => ({
    reviews: 413,
    value: 4.5
  })
}
</script>
