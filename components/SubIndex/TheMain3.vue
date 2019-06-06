<template>
  <v-layout row wrap>
    <v-flex d-flex xs6>
      <TheMain3Left :items="items" :lists="lists" title="Tin tức trong ngày" />
    </v-flex>
    <v-flex d-flex xs6>
      <v-layout column wrap>
        <v-flex d-flex xs6>
          <TheMain3Left :items="items" :lists="lists" title="Tin Hà Nội" />
        </v-flex>
        <v-flex d-flex xs6>
          <TheMain3Left :items="items" :lists="lists" title="Tin Pháp luật" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import TheMain3Left from '~/components/SubIndex/TheMain3Left'
export default {
  components: {
    TheMain3Left
  },
  props: ['items', 'lists']
}
</script>
