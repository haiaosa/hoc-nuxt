<template>
  <div>
    <h1>
      trang-beo-lun
    </h1>
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
  </div>
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
