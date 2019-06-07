<template>
  <v-layout column wrap>
    <v-flex>
      <v-toolbar color="primary">
        <v-toolbar-items>
          <v-btn flat :ripple="false" class="custom-btn" nuxt :to="{ name: 'note' }">{{ title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>
    <v-flex>
      <v-layout row wrap>
        <v-flex v-for="(news, index) in items" :key="index" d-flex xs6>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              nuxt
              :to="{ name: 'note' }">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div class="body-1">{{ news.title }}</div>
                  </v-card-title>
                </v-flex>
                <v-flex xs4 pl-4>
                  <v-img :src="news.img"></v-img>
                </v-flex>
                <v-flex xs8>
                  <div>
                    <v-card-text class="caption pt-0">
                      {{ news.content }}
                    </v-card-text>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="4"
        ></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['items','title'],
  data: () => ({
    reviews: 413,
    value: 4.5,
    page: 2
  })
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
