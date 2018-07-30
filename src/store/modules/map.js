import * as api from '../../api';

export default {
  state: {
    map: null,
    markers: [{
      id: 1,
      name: 'America center',
      position: {
        lat: 40,
        lng: -100,
      },
    },
    {
      id: 2,
      name: 'whatever',
      position: {
        lat: 46,
        lng: -71,
      },
    },
    ],
  },
  getters: {
    markers: state => state.markers,
    map: state => state.map,
  },
  mutations: {
    setMap(state, map) {
      state.map = map;
    },
    addMarker(state, marker) {
      state.markers.push(marker);
    },
  },
  actions: {
    async addLayer({ commit }, key) {
      const data = await api.get(key);
      if (data.status !== 'NO_RESULTS') {
        data.features.forEach((feature) => {
          commit('addMarker', {
            id: feature.id,
            name: feature.properties.name,
            position: {
              lat: feature.geometry.coordinates[1],
              lng: feature.geometry.coordinates[0],
            },
          });
        });
      }
    },
  },
};
