<template>
  <v-layout row wrap>
    <v-flex xs7 d-flex>
      <v-card>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-text-field label="Title"></v-text-field>
              <v-select
                :items="items"
                label="Parent"
                placeholder="None"
              ></v-select>
              <v-textarea label="Description"></v-textarea>
              <v-switch v-model="switch1" label="Is default?"></v-switch>
              <v-text-field
                label="Icon"
                placeholder="Ex: fa fa-home"
              ></v-text-field>
              <v-select :items="items2" label="Order"></v-select>
              <v-switch v-model="switch2" label="Is featured?"></v-switch>
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
    return {
      switch1: true,
      switch2: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      items2: ['-3', '-2', '-1', '0', '1', '2', '3']
    }
  }
}
</script>

<style scoped></style>
