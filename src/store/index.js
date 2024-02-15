import Vue from 'vue';
import Vuex from 'vuex';

import { getUserProperties, getRequestHeaders } from '@/helpers';

Vue.use(Vuex);

const API_URL = 'https://randomuser.me/api';

export default new Vuex.Store({
  state: {
    columns: [
      ['First column', []],
      ['Second column', []],
      ['Third column', []],
    ],
  },
  getters: {
    columns: (state) => state.columns,
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
  },
  actions: {
    async getUser({ commit }) {
      try {
        const response = await fetch(API_URL, { method: 'GET', headers: getRequestHeaders });
        const { results } = await response.json();

        const user = getUserProperties(results?.[0]);

        commit('SET_CARD', [0, user]);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
