<template>
  <v-app>
    <app-sidebar />
    <app-top-toolbar />
    <app-map />
  </v-app>

</template>

<script>
import GMap from './components/Map.vue';
import Sidebar from './components/Sidebar.vue';
import TopToolbar from "./components/TopToolbar.vue";

export default {
  name: 'App',
  components: {
    'app-map': GMap,
    'app-sidebar': Sidebar,
    'app-top-toolbar': TopToolbar,
  },
};
</script>

<style>
html {
  overflow: hidden;
}
</style>
