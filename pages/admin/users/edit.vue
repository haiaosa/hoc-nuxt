<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-flex>
        <v-btn color="primary">Edit Users page</v-btn>
      </v-flex>
      <v-flex>
        <TheForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheForm from '~/components/Admin/Users/Form/TheEditForm'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheForm
  }
}
</script>

<style scoped></style>
