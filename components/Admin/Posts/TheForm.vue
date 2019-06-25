<template>
  <v-card>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form>
            <v-text-field name="name" label="Email" id="id"></v-text-field>
            <v-textarea
              name="input-7-1"
              label="Default style"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            ></v-textarea>
            <v-checkbox
              label="label"
              v-model="checkbox"
              value="value"
            ></v-checkbox>
            <v-text-field
              name="name"
              label="Noi dung"
              id="id"
              value="rieng phan nay se dung CKFinder"
            ></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
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
