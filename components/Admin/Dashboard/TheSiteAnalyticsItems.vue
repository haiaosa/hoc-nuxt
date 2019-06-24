<template>
  <v-card>
    <v-layout row wrap>
      <v-flex xs3 v-for="(item, index) in items" :key="index">
        <v-card>
          <v-layout>
            <v-flex xs5>
              <v-icon>{{ item.icon }}</v-icon>
            </v-flex>
            <v-flex xs7>
              <v-card-text>
                <div>
                  <div class="headline">{{ item.name }}</div>
                  <div>{{ item.value }}</div>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
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
