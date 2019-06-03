<template>
  <v-layout column wrap>
    <v-card color="purple lighten-2">
      <v-flex>
        <v-subheader>Title</v-subheader>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-list>
            <v-list-tile v-for="n in 8" :key="n" xs6>
              <v-flex>
                <v-list-tile-content>
                  <v-list-tile-sub-title>subTitle</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-flex>
            </v-list-tile>
          </v-list>
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
