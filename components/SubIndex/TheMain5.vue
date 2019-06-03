<template>
  <v-layout column wrap>
    <v-card color="purple lighten-2">
      <v-flex>
        <v-card nuxt :to="{ name: 'note' }">
          <v-card-title primary-title>
            title
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-flex v-for="n in 8" :key="n" xs6>
            <v-card class="purple lighten-2" flat nuxt :to="{ name: 'note' }">
              <v-card-text>
                noi dung day ne
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  props: ['items']
}
</script>
