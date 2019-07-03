<template>
  <v-app dark>
    <v-content>
      <v-container fluid grid-list-md fill-height>
        <v-layout align-center justify-center row wrap>
          <v-flex xs6>
            <v-layout column wrap>
              <v-flex>
                <v-toolbar class="secondary">
                  <v-toolbar-title>Login System</v-toolbar-title>
                </v-toolbar>
              </v-flex>
              <v-flex>
                <v-form>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        name="Username"
                        label="Username"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        name="Password"
                        label="Password"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-checkbox
                        v-model="checkbox"
                        label="Remember me?"
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs8>
                      <v-layout row wrap align-content-end>
                        <v-flex xs5 offset-xs7>
                          <v-card
                            class="grey darken-3"
                            nuxt
                            :to="{ name: 'note' }"
                          >
                            <v-card-text>
                              Quên mật khẩu?
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn
                        color="secondary"
                        large
                        block
                        nuxt
                        :to="{ name: 'admin' }"
                      >
                        <v-icon left>swap_horiz</v-icon>Login</v-btn
                      >
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true
    }
  }
}
</script>

<style scoped></style>
