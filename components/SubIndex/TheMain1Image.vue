<template>
  <v-responsive :aspect-ratio="2/1">
    <v-img
    :src="item.img"
    gradient="to bottom, rgba(255,255,255,.0), rgba(0,0,0,.9)">
      <v-layout
        align-end
        justify-start
        row
        wrap
        fill-height
      >
        <v-flex xs12>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.content }}
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-img>
  </v-responsive>
</template>
<script>
  export default {
    props: ['item']
  }
</script>
