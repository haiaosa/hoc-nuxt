<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-avatar :color="color" :tile="tile" :size="avatarSize">
        <img
          v-if="img"
          src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
          alt="avatar"
        />
        <span v-else>VJ</span>
      </v-avatar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    slider: 156,
    tile: true,
    color: 'primary',
    colors: [
      'primary',
      'accent',
      'warning lighten-2',
      'teal',
      'grey lighten-4'
    ],
    img: true
  }),

  computed: {
    avatarSize() {
      return `${this.slider}px`
    }
  }
}
</script>
