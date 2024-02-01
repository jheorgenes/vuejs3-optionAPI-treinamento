
import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count++;
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
});

export default store;