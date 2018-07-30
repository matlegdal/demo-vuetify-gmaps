<template>
    <v-toolbar
      clipped-left
      app
      flat
      floating
      class="top-toolbar"
    >
      <v-toolbar-side-icon @click.stop="toggleSidebar"/>
      <v-toolbar-title>Fujitsu GeoAnalysis</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'toggleSidebar',
    ])
  },
}
</script>


<style scoped>

.top-toolbar {
  background-color: rgba(255, 255, 255, 0);
  width: 295px;
  border: 0;
  margin: 0;
}
</style>
