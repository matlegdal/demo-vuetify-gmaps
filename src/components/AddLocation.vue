<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    />
    <v-text-field
      v-model="lat"
      :rules="positionRules"
      label="Latitude"
    />
    <v-text-field
      v-model="lng"
      :rules="positionRules"
      label="Longitude"
    />
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    />

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    id: 10,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    lat: '',
    lng: '',
    positionRules: [
      v => !!v || 'Latitude is required',
      v => (v && !isNaN(parseFloat(v))) || 'Latitude must be a number',
    ],
    select: null,
    items: [
      'Client',
      'Service center',
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const marker = {
          id: this.id,
          name: this.name,
          position: {
            lat: parseFloat(this.lat),
            lng: parseFloat(this.lng),
          },
        };
        this.$store.commit('addMarker', marker);
        this.id += 1;
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
