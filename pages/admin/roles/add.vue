<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-flex>
        <TheBreadcrumbs />
      </v-flex>
      <v-flex>
        <v-btn color="primary">Add Roles page</v-btn>
      </v-flex>
      <v-flex>
        <TheForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrumbs from '~/components/Admin/Roles/TheBreadcrumbs'
import TheForm from '~/components/Admin/Roles/TheForm'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheBreadcrumbs,
    TheForm
  }
}
</script>

<style scoped></style>
