<template>
  <v-layout column wrap>
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
        <v-layout row wrap>
          <v-flex v-for="(item, index) in items" :key="index" xs6>
            <v-card
              flat
              hover
              nuxt
              :to="{ name: 'note' }"
            >
              <v-layout row wrap class="ma-1">
                <v-flex xs1>
                  <v-card-actions>
                    <v-btn icon :ripple="false" class="custom-btn">
                      <v-icon class="green--text" small>play_arrow</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-flex>
                <v-flex xs11>
                  <v-tooltip color="purple" top>
                    <template v-slot:activator="{ on }">
                      <v-card-text v-on="on" class="text-truncate body-1">
                        {{ item.title }}
                      </v-card-text>
                    </template>
                    <span>{{ item.title }}</span>
                  </v-tooltip>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <div class="text-xs-center">
          <v-pagination
            v-model="page"
            :length="6"
          ></v-pagination>
        </div>
      </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['items', 'title'],
  data () {
    return {
      page: 1
    }
  }
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
</style>
