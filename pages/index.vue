<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        trang-beo-lun
      </h1>
      <h2 class="subtitle">
        Quyet tam giam can thanh sieu mau
      </h2>
      <div class="links">
        <nuxt-link
          v-for="(post, buom) in posts"
          :to="{ name: 'posts-id', params: { id: post.id } }"
          :key="buom"
          class="button--green"
          >{{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'homeWithSidebar',
  components: {
    Logo
  },
  async fetch({ store }) {
    // dispatch the action fetchAllPosts
    await store.dispatch('posts/fetchAllPosts')
  },
  computed: {
    posts() {
      return this.$store.state.posts.all
    }
  }
  // async asyncData({ $axios }) {
  //   let posts = await $axios.$get("posts");
  //   return { posts };
  // }
}
</script>
