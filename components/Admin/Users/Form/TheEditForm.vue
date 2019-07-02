<template>
  <v-layout row wrap>
    <v-flex xs3 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-avatar size="200" color="grey lighten-4">
                <img
                  src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                  alt="avatar"
                />
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs9 d-flex>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field label="First Name"></v-text-field>
              <v-text-field label="Username"></v-text-field>
              <v-text-field label="Secondary Email"></v-text-field>
              <v-text-field label="Secondary Address"></v-text-field>
              <v-text-field label="Job Position"></v-text-field>
              <v-text-field label="Secondary Phone"></v-text-field>
              <v-textarea label="Interest"></v-textarea>
              <v-text-field label="Skype"></v-text-field>
              <v-text-field label="Twitter"></v-text-field>
              <v-text-field label="Youtube"></v-text-field>
              <v-text-field label="Website"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Last Name"></v-text-field>
              <v-text-field label="Email"></v-text-field>
              <v-text-field label="Address"></v-text-field>
              <v-text-field label="Date of birth"></v-text-field>
              <v-text-field label="Mobile Number"></v-text-field>
              <v-text-field label="Gender"></v-text-field>
              <v-textarea label="About"></v-textarea>
              <v-text-field label="Facebook"></v-text-field>
              <v-text-field label="Google Plus"></v-text-field>
              <v-text-field label="Github"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn color="primary">Update?</v-btn>
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
