<template>
  <v-navigation-drawer
    v-model="sidebarIsOpen"
    clipped
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
    <v-btn
      @click.stop="addMarker({
        id: 3,
        name: 'new',
        position: {
          lat: 44,
          lng: -110,
        },
    })">
      Add
    </v-btn>
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
  props: {
    sidebarIsOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations([
      'addMarker',
    ]),
  },
};
</script>
