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
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  async fetch({ store }) {
    // dispatch the action fetchAllPosts
    await store.dispatch("posts/fetchAllPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    }
  }
  // async asyncData({ $axios }) {
  //   let posts = await $axios.$get("posts");
  //   return { posts };
  // }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
