<template>
  <v-layout row wrap>
    <v-flex xs8>
      <v-card
        color="yellow darken-1"
        flat
        tile
        nuxt
        :to="{ name: 'index' }"
      >
        <TheMain1Image :item="newsHN"/>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-layout column wrap>
        <v-flex>
          <v-card
            color="yellow darken-4"
            flat
            tile
            nuxt
            :to="{ name: 'index' }"
          >
            <TheMain1Image :item="newsHN"/>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card
            color="yellow darken-4"
            flat
            tile
            nuxt
            :to="{ name: 'index' }"
          >
            <TheMain1Image :item="newsHN"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import TheMain1Image from '~/components/SubIndex/TheMain1Image'
export default {
  components: {
    TheMain1Image
  },
  props: ['items'],
  computed: {
    newsHN() {
      return this.$store.state.newsHN.newsHN[0]
    }
  }
}
</script>
