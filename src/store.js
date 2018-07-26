/* global google */
import Vue from 'vue';
import Vuex from 'vuex';
import * as api from './api';
import { MARKERS } from './constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    google: null,
    map: null,
    layers: new Map(),
    filters: new Map(),
    files: new Map(),
    legend: null,
    defaultMarker: {
      icon: MARKERS.clients.grey.icon,
      visible: true,
    },
    sidebarIsOpen: true,
    autocomplete: null,
    circle: null,
    place: null,
    locationMarker: null,
    directionsService: null,
    directionsRenderers: [null, null, null],
  },
  mutations: {
    setMap(state, map) {
      state.map = map;
    },
    setLayer(state, { key, layer }) {
      state.layers.set(key, layer);
    },
  },
  actions: {
    async addLayer({ state, commit }, key) {
      const layer = new google.maps.Data({ map: state.map });
      const data = await api.get(key);
      if (data.features.length) {
        layer.addGeoJson(data);
      }
      commit('setLayer', { key, layer });
    },
  },
});
