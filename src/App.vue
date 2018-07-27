<template>
  <v-app>
    <app-sidebar :sidebar-is-open="sidebarIsOpen" />
    <v-toolbar
      clipped-left
      app
      flat
      floating
      class="top-toolbar"
    >
      <v-toolbar-side-icon @click.stop="sidebarIsOpen = !sidebarIsOpen"/>
      <v-toolbar-title>Fujitsu GeoAnalysis</v-toolbar-title>
    </v-toolbar>

    <app-map :sidebar-is-open="sidebarIsOpen" />
  </v-app>

</template>

<script>
import GMap from './components/Map.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    'app-map': GMap,
    'app-sidebar': Sidebar,
  },
  data() {
    return {
      sidebarIsOpen: true,
    };
  },
};
</script>

<style scoped>


.top-toolbar {
  background-color: rgba(255, 255, 255, 0);
  width: 295px;
  border: 0;
  margin: 0;
}
</style>
