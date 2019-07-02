<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-flex>
        <TheBreadcrumbs />
      </v-flex>
      <v-flex>
        <v-btn color="primary">Add Tags page</v-btn>
      </v-flex>
      <v-flex>
        <TheForm />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrumbs from '~/components/Admin/Tags/TheBreadcrumbs'
import TheForm from '~/components/Admin/Tags/TheForm'

export default {
  layout: 'adminWithSidebar',
  components: {
    TheBreadcrumbs,
    TheForm
  }
}
</script>

<style scoped></style>
