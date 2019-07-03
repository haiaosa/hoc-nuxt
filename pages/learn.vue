<template>
  <v-app dark>
    <v-content>
      <v-container fluid grid-list-md fill-height>
        <v-layout row wrap align-center justify-center>
          <v-flex xs3 v-for="n in 8" :key="n">
            <v-layout row wrap>
              <v-flex xs4>
                <v-avatar size="75" color="primary">
                  <img
                    src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                    alt="alt"
                  />
                </v-avatar>
              </v-flex>
              <v-flex xs8>
                <p class="body-1 font-italic">
                  Percent new session
                </p>
                <p class="title secondary--text">
                  40.74%
                </p>
              </v-flex>
              <v-flex xs12>
                <v-divider class="primary"></v-divider>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped></style>
