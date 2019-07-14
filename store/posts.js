export const state = () => ({
  posts: []
})

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post)
  },
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  // fetchAllPosts ({commit}) {
  //   return this.$axios.$get('posts')
  //     .then(posts => commit('SET_POSTS', posts))
  // }
  // ham tren tuong duoi voi async/await nhu sau
  async fetchAllPosts({ commit }) {
    let posts = await this.$axios.$get('posts')

    commit('SET_POSTS', posts)
  },

  async fetchPost({ commit }, id) {
    let post = await this.$axios.$get(`posts/${id}`)

    commit('ADD_POST', post)
  },

  getPosts({ commit }) {
    // get API
    return console.log('get Posts tu API').then(posts => {
      commit('SET_POSTS', posts)
    })
  }
}
