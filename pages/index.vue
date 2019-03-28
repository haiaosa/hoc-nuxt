<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card dark color="primary">
        <v-card-text class="px-0">trang-beo-lun</v-card-text>
      </v-card>
    </v-flex>
    <!-- <h2>
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
      </div> -->
  </v-layout>
</template>

<script>
export default {
  layout: 'homeWithSidebar',
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
