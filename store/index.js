export const state = () => ({
  sidebarCollapsed: false,
})

export const mutations = {
  SET_SIDEBAR_COLLAPSED(state, value) {
    state.sidebarCollapsed = value
  },
}

export const actions = {
  toggleSidebar({ commit, state }) {
    commit('SET_SIDEBAR_COLLAPSED', !state.sidebarCollapsed)
  },
}
