<template>
  <v-container fluid grid-list-md fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs6>
        <v-layout column wrap>
          <v-flex>
            <v-toolbar class="secondary">
              <v-toolbar-title>Take Password again?</v-toolbar-title>
            </v-toolbar>
          </v-flex>
          <v-flex>
            <p class="body-1 font-italic">
              Input your email address, system will send you a reset-password
              link.
            </p>
          </v-flex>
          <v-flex>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field label="Email"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-btn color="secondary" large block>
                    <v-icon left>swap_horiz</v-icon>Send</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
          <v-flex>
            <v-card nuxt :to="{ name: 'admin-login' }">
              <v-card-text class="text-xs-center body-1">
                Back to Login page
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'adminNoSidebar',
  data() {
    return {
      checkbox: true
    }
  }
}
</script>

<style scoped></style>
