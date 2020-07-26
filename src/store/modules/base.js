const state = {
  sidebar_toggle: false,
  window_width: "0",
};
const getters = {
  sidebar_toggle: (state) => state.sidebar_toggle,
};
const actions = {
  async toggleSidebar({ commit }) {
    commit("toggle_sidebar");
  },
};

const mutations = {
  toggle_sidebar(state) {
    state.sidebar_toggle = !state.sidebar_toggle;
  },
  set_width(state, width) {
    state.window_width = width;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
