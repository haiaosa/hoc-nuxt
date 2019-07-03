<template>
  <v-app dark>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout align-center column wrap fill-height>
          <v-flex>
            <v-toolbar class="secondary">
              <v-toolbar-title>Recieve Password</v-toolbar-title>
            </v-toolbar>
          </v-flex>
          <v-flex>
            <v-card>
              <v-card-text>
                Have you forgotten your password? Please enter your email
                account. System will send a email with active link to reset your
                password.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-text-field label="Email"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped></style>
