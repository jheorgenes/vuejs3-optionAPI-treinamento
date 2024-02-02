export default {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state, payload) {
      state.count+= payload;
    }
  },
  actions: {
    /* Acionando a mutation através do commit */
    increment(state, payload) {
      state.commit('increment');
    }
  },
  getters: {
    getCounter(state) {
      return 'Total count' + state.count;
    }
  }
}