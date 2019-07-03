<template>
  <v-layout row wrap>
    <v-flex xs3 v-for="(item, index) in items" :key="index">
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
            {{ item.name }}
          </p>
          <p class="title secondary--text">
            {{ item.value }}
          </p>
        </v-flex>
        <v-flex xs12>
          <v-divider class="primary"></v-divider>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'disc_full',
          name: 'Session',
          value: 5911
        },
        {
          icon: 'disc_full',
          name: 'Visitors',
          value: 4824
        },
        {
          icon: 'disc_full',
          name: 'Pageviews',
          value: 29805
        },
        {
          icon: 'disc_full',
          name: 'Bounce Rate',
          value: '43.08%'
        },
        {
          icon: 'disc_full',
          name: 'Percent new session',
          value: '42.96%'
        },
        {
          icon: 'disc_full',
          name: 'Pages/Session',
          value: 5.03
        },
        {
          icon: 'disc_full',
          name: 'Avg. Duration',
          value: '00:05:29'
        },
        {
          icon: 'disc_full',
          name: 'New visitors',
          value: 2548
        }
      ]
    }
  }
}
</script>

<style scoped></style>
