<template>
  <v-card>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs7>
            <v-text-field label="Title"></v-text-field>
            <v-textarea name="input-7-1" label="Description"></v-textarea>
            <v-checkbox
              label="Is featured?"
              v-model="checkbox"
              value="value"
            ></v-checkbox>
          </v-flex>
          <v-flex xs5>
            <v-layout column wrap>
              <v-flex>
                <v-btn color="success">Save</v-btn>
                <v-btn color="success">Save & Edit</v-btn>
              </v-flex>
              <v-select :items="items" label="Published"></v-select>
              <TheCategories />
              <v-text-field label="Tag"></v-text-field>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import TheCategories from '~/components/Admin/Posts/Form/TheCategories'

export default {
  components: {
    TheCategories
  },
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>

<style scoped></style>
