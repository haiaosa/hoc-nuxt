<template>
  <v-layout row wrap>
    <v-flex xs7 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-text-field label="Title"></v-text-field>
              <v-textarea label="Description"></v-textarea>
              <v-checkbox label="Is featured?"></v-checkbox>
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
            <TheCategories />
            <TheTags />
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TheStatus from '~/components/Admin/Posts/Form/TheStatus'
import TheCategories from '~/components/Admin/Posts/Form/TheCategories'
import TheTags from '~/components/Admin/Posts/Form/TheTags'

export default {
  components: {
    TheStatus,
    TheCategories,
    TheTags
  },
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true
    }
  }
}
</script>

<style scoped></style>
