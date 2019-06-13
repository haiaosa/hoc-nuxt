<template>
  <v-progress-linear :indeterminate="true" height="1"></v-progress-linear>
</template>
<script>
export default {
  layout: 'homeWithSidebar',
  data() {
    return {
      valueDeterminate: 80
    }
  }
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
