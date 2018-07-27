<template>
  <v-app>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      persistent
      mobile-break-point="960"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn @click.stop="add">
        Add
      </v-btn>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      app
      class="top-toolbar"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title>Fujitsu Retail</v-toolbar-title>
    </v-toolbar>

    <app-map :drawer="drawer" />
  </v-app>

</template>

<script>
import Map from './components/Map.vue';

export default {
  name: 'App',
  components: {
    'app-map': Map,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
    };
  },
  methods: {
    add() {
      this.$store.commit('addMarker', {
        id: 3,
        name: 'new',
        position: {
          lat: 44,
          lng: -110,
        },
      });
    },
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
