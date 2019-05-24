export const state = () => ({
  drawer: true
})

export const mutations = {
  toggle(state) {
    state.drawer = !state.drawer
  }
}

export const actions = {}
