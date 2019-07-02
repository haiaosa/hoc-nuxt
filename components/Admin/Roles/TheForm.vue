<template>
  <v-layout row wrap>
    <v-flex xs9 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-text-field label="Role Name"></v-text-field>
              <v-textarea label="Description"></v-textarea>
              <v-checkbox label="Is default?"></v-checkbox>
            </v-flex>
            <v-flex>
              <ThePermissionTree />
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
import ThePermissionTree from '~/components/Admin/Roles/Form/ThePermissionTree'
export default {
  components: {
    ThePermissionTree
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
