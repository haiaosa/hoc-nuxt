<template>
  <v-layout row wrap>
    <v-flex d-flex xs6>
      <v-card color="blue lighten-1" flat>
        <v-card-title
          primary-title
          nuxt
          :to="{ name: 'index' }"
        >
          {{ items[0].title }}
        </v-card-title>
        <v-layout row wrap>
          <v-flex d-flex xs6>
            <v-img :src="items[0].img"></v-img>
          </v-flex>
          <v-flex d-flex xs6>
            <v-card-text>
              {{ items[0].content }}
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-list three-line dense>
          <template v-for="(item, index) in lists">
            <v-list-tile :key="item.title" @click="">
              <v-list-tile-content>
                <v-list-tile-sub-title>{{
                  item.title
                }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < lists.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex d-flex xs6>
      <v-layout column wrap>
        <v-flex v-for="n in 2" :key="n" d-flex xs6>
          <v-card color="blue lighten-1" flat>
            <v-card-text>daubouoiiiiiii</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    props: ['items', 'lists']
  }
</script>
