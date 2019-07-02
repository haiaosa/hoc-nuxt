<template>
  <v-select :items="items" label="Status"></v-select>
</template>

<script>
export default {
  data() {
    return {
      items: ['Published', 'Draft', 'Pending']
    }
  }
}
</script>

<style scoped></style>
