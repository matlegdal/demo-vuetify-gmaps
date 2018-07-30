<template>
  <v-navigation-drawer
    :value="sidebarIsOpen"
    persistent
    app
    mobile-break-point="560"
    class="sidebar"
  >
    <v-container>
      <app-add-location/>
    </v-container>

  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from 'vuex';
import AddLocation from './AddLocation.vue';

export default {
  name: 'Sidebar',
  components: {
    'app-add-location': AddLocation,
  },
  computed: {
    sidebarIsOpen() {
      return this.$store.state.sidebarIsOpen;
    }
  },
  methods: {
    ...mapMutations([
      'addMarker',
    ]),
  },
};
</script>

<style scoped>
.sidebar {
  box-shadow: 3px 4px 12px -1px rgba(0, 0, 0, 0.125);
  height: 100%;
  padding-top: 64px;
  max-height: calc(100% - 64px);
}
</style>
