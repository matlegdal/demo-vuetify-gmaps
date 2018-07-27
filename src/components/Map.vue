<template>
  <gmap-map
    ref="map"
    :center="{lat:40, lng:-100}"
    :zoom="6"
    :options="{
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: google && google.maps.ControlPosition.RIGHT_TOP,
        mapTypeIds: ['roadmap', 'hybrid'],
        style: google && google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google && google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      minZoom: 3
    }"
    :style="{width: sidebarIsOpen ? 'calc(100% - 300px)': '100%'}"
    class="map"
  >
    <gmap-marker
      v-for="marker in markers"
      :key="marker.id"
      :title="marker.name"
      :position="marker.position"
    />
  </gmap-map>
</template>

<script>
import { mapGetters } from 'vuex';
import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'Map',
  props: {
    sidebarIsOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    google: gmapApi,
    ...mapGetters([
      'map',
      'markers',
    ]),
  },
  mounted() {
    this.$refs.map.$mapPromise.then((map) => {
      this.$store.commit('setMap', map);
      this.$store.dispatch('addLayer', 'clients');
      this.$store.dispatch('addLayer', 'stores');
    });
  },

};
</script>

<style scoped>
.map {
  height: 100vh;
  position: absolute;
  right: 0;
  transition: width 0.2s ease-out;
}
</style>
