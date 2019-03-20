<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item"
        >Home page</nuxt-link
      >

      <nuxt-link :to="{ name: 'note' }" class="navbar-item">Note</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
