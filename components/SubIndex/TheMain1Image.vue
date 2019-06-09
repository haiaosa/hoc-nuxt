<template>
  <v-responsive>
    <v-img
    :src="item.img"
    gradient="to bottom, rgba(255,255,255,.0), rgba(0,0,0,.9)"
    aspect-ratio="1.55">
      <v-layout
        align-end
        justify-start
        row
        wrap
        fill-height
      >
        <v-flex xs12>
          <v-card-title class="pb-0">
            {{ item.title }}
          </v-card-title>
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
