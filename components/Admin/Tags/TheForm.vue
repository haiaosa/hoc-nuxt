<template>
  <v-layout row wrap>
    <v-flex xs7 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-text-field label="Title"></v-text-field>
              <v-textarea label="Description"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs5 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-btn color="primary">Save</v-btn>
              <v-btn color="secondary">Save & Edit</v-btn>
            </v-flex>
            <TheStatus />
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TheStatus from '~/components/Admin/Categories/Form/TheStatus'

export default {
  components: {
    TheStatus
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
