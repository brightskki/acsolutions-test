import Vue from 'vue';
import Vuex from 'vuex';

import { getUserProperties, getRequestHeaders, apiUrl } from '@/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: [
      ['First column', []],
      ['Second column', []],
      ['Third column', []],
    ],
    currentUser: {},
  },
  getters: {
    columns: (state) => state.columns,
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    SET_CARD: (state, [to = 0, user]) => {
      state.columns[to][1].push(user);
    },
    MOVE_CARD: (state, [from, to, index]) => {
      const user = state.columns[from][1][index];

      state.columns[from][1].splice(index, 1);
      state.columns[to][1].push(user);
    },
    SET_CURRENT_USER: (state, payload) => {
      state.currentUser = payload;
    },
  },
  actions: {
    async getUser({ commit }) {
      try {
        const response = await fetch(apiUrl, { method: 'GET', headers: getRequestHeaders });
        const { results } = await response.json();

        const user = getUserProperties(results?.[0]);

        commit('SET_CARD', [0, user]);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
