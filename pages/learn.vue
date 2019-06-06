<template>
  <v-layout row wrap>
    <v-flex v-for="(news, index) in items" :key="index" d-flex xs6>
      <v-card flat nuxt :to="{ name: 'index' }">
        <v-card-title primary-title>
          {{ news.title }}
        </v-card-title>
        <v-layout row wrap>
          <v-flex d-flex xs6>
            <v-img :src="news.img"></v-img>
          </v-flex>
          <v-flex d-flex xs6>
            <v-card-text>
              {{ news.content }}
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      card_text:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>
