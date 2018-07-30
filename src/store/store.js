/* global google */
import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarIsOpen: true,
  },
  getters: {
    sidebarIsOpen: state => state.sidebarIsOpen,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
  },
  actions: {

  },
  modules: {
    map,
  },
});
