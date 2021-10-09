import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCurrency: 'USD',
  },
  mutations: {
    SET_CURRENCY(state, currency) {
      state.currentCurrency = currency;
    },
  },
  actions: {
    changeCurrency({ commit }, currency) {
      commit('SET_CURRENCY', currency);
    },
  },
  modules: {},
});
