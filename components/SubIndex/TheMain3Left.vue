<template>
  <v-layout column wrap>
    <v-card>
      <v-flex>
        <v-toolbar color="primary">
          <v-toolbar-items>
            <v-btn
              flat
              :ripple="false"
              class="custom-btn"
              nuxt
              :to="{ name: 'note' }"
              >{{ title }}</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
      <v-flex>
        <v-layout column wrap>
          <v-flex>
            <TheMain3LeftFirst :item="firstNews" />
          </v-flex>
          <v-flex>
            <TheMain3LeftLists :items="otherNews" />
          </v-flex>
          <v-flex>
            <TheMain3LeftPaginator />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
import TheMain3LeftFirst from '~/components/SubIndex/TheMain3LeftFirst'
import TheMain3LeftLists from '~/components/SubIndex/TheMain3LeftLists'
import TheMain3LeftPaginator from '~/components/SubIndex/TheMain3LeftPaginator'

export default {
  components: {
    TheMain3LeftFirst,
    TheMain3LeftLists,
    TheMain3LeftPaginator
  },
  props: ['items', 'lists', 'title'],
  computed: {
    firstNews() {
      return this.$store.state.newsHN.newsHN[0]
    },
    otherNews() {
      return this.$store.state.newsHN.newsHN
    }
  }
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
