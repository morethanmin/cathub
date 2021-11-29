export const state = () => ({
  isOvered: false,
});

export const getters = {
  getIsOvered: (state) => state.isOvered,
};

export const mutations = {
  setIsOvered(state, payload) {
    state.isOvered = payload;
  },
};

export const actions = {
  initialUI({ commit }, payload = false) {
    commit("setIsOvered", payload);
  },
  nuxtServerInit() {},
};
