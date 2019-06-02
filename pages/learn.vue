<template>
  <v-layout row justify-center>
    <v-flex d-flex xs8>
      <v-card color="yellow">
        <v-card-title primary-title @click="">
          {{ text }}
        </v-card-title>
        <v-layout row wrap>
          <v-flex d-flex xs6>
            <v-img :src="require('~/assets/1.jpg')"></v-img>
          </v-flex>
          <v-flex d-flex xs6>
            <v-card-text>
              {{ text }}
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'homeWithSidebar',
  data() {
    return {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  }
}
</script>
