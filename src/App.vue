<template>
  <v-app>
    <v-navigation-drawer
      persistent
      mobile-break-point="960"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      class="top-toolbar"
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title>Fujitsu Retail</v-toolbar-title>
    </v-toolbar>

      <gmap-map
      ref="map"
      class="map"
      :center="{lat:40, lng:-100}"
      :zoom="6"
      :options="{
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: google && google.maps.ControlPosition.RIGHT_CENTER,
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
      :style="{width: drawer ? 'calc(100% - 300px)': '100%'}"
      >
        <gmap-marker
        v-for="marker in markers"
        :key="marker.id"
        :position="marker.position"
        ></gmap-marker>
      </gmap-map>
  </v-app>

</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'App',
  components: {
  },
  computed: {
    google: gmapApi,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],

      markers: [{
        id: 1,
        position: {
          lat: 40,
          lng: -100,
        },
      },
      ],
    };
  },
  mounted() {
    this.$refs.map.$mapPromise.then((map) => {
      this.$store.commit('setMap', map);
      // this.$store.dispatch('addLayer', 'clients');
      // this.$store.dispatch('addLayer', 'stores');
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

.top-toolbar {
  /* background-color: rgba(255, 255, 255, 0); */
}
</style>
