<template>
  <v-app>
    <v-main>
      <v-col cols="2" class="mx-auto text-center">
        <v-select v-model="currency" :items="currencies"></v-select>
        <h1>{{ price }}</h1>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',

  components: {},

  data: () => ({
    price: 500,
    currencies: [
      '$',
      '€',
      '£',
    ],
  }),
  computed: {
    ...mapState(['currentCurrency']),
    currency: {
      get() {
        return this.currentCurrency;
      },
      set(value) {
        this.changeCurrency(value);
      },
    },
    convertedPrice() {
      return this.price;
    },
  },
  methods: {
    ...mapActions(['changeCurrency']),
  },
};
</script>
