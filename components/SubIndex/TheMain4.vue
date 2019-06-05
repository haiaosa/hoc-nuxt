<template>
  <v-layout column wrap>
    <v-card color="yellow darken-3">
      <v-flex>
        <v-toolbar color="primary">
          <v-toolbar-items>
            <v-btn flat :ripple="false" class="custom-btn" nuxt :to="{ name: 'note' }">{{ title }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
            <v-flex xs12>
              <v-carousel>
                <v-card nuxt :to="{name: 'note'}">
                  <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                  ></v-carousel-item>
                </v-card>
              </v-carousel>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
  export default {
    props:['items','title']
  }
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
