<template>
  <v-layout row wrap>
    <v-flex xs9 d-flex>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field label="First Name"></v-text-field>
              <v-text-field label="Username"></v-text-field>
              <v-text-field label="Password"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Last Name"></v-text-field>
              <v-text-field label="Email"></v-text-field>
              <v-text-field label="Re-type password"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-select :items="items" label="Role"></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs3 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-btn color="primary">Save</v-btn>
              <v-btn color="secondary">Save & Edit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: ['Administrators', 'Members']
    }
  }
}
</script>

<style scoped></style>
