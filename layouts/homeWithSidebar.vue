<template>
  <div>
    <div
      class="tile is-ancestor is-vertical is-paddingless is-marginless has-background-grey-dark"
    >
      <TimKiem />

      <nuxt />
    </div>
    <TheFooter />
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'
import TheSearching from '~/components/TheSearching'

export default {
  components: {
    TheNavbar,
    TheFooter,
    TheSearching
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-bottom'
    }
  }
}
</script>
