export const state = () => ({
  isOvered: false,
  offset: {
    about: 0,
    skills: 0,
    projects: 0,
    carrer: 0,
    recommend: 0
  }
});

export const getters = {
  getIsOvered: state => state.isOvered,
  getOffset: state => state.offset
};

export const mutations = {
  setIsOvered(state, payload) {
    state.isOvered = payload;
  },
  setOffset(state, payload) {
    console.log("!");
    state.offset = payload;
  }
};

export const actions = {
  initialUI({ commit }, payload = false) {
    commit("setIsOvered", payload);
  },
  initOffset({ commit }, payload = {}) {
    console.log("commit");
    commit("setOffset", payload);
  }
};
