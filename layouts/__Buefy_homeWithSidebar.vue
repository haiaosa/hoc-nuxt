<template>
  <div
    class="tile is-ancestor is-vertical is-paddingless is-marginless has-background-grey-dark"
  >
    <div class="tile is-vertical">
      <div class="tile is-parent">
        <TheSearching />
      </div>
      <div class="tile">
        <div class="tile is-9 is-parent">
          <nuxt />
        </div>
        <div class="tile is-parent">
          <TheSidebar />
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <TheFooter />
    </div>
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'
import TheSearching from '~/components/TheSearching'
import TheSidebar from '~/components/TheSidebar'

export default {
  components: {
    TheNavbar,
    TheFooter,
    TheSearching,
    TheSidebar
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-bottom'
    }
  }
}
</script>
