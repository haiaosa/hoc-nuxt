<template>
  <v-layout row wrap>
    <v-flex v-for="n in 2" :key="n" d-flex lg12>
      <v-card color="indigo" dark>
        <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
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
</template>

<script>
export default {
  layout: 'homeWithSidebar',
  data: function() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
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
