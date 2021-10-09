<template>
  <v-app>
    <v-main>
      <v-col cols="2" class="mx-auto text-center">
        <v-select v-model="currency" :items="currencies"></v-select>
        <h1>{{ convertedPrice }}</h1>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'App',

  components: {},

  data: () => ({
    price: 500,
    convertedPrice: 500,
    currencies: ['USD', 'EUR', 'GBP'],
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
  },
  methods: {
    ...mapActions(['changeCurrency']),
  },
  watch: {
    async currentCurrency() {
      if (this.currency !== 'USD') {
        const options = {
          method: 'GET',
          url: 'https://currency-converter13.p.rapidapi.com/convert',
          params: { from: 'USD', to: this.currency, amount: this.price },
          headers: {
            'x-rapidapi-host': 'currency-converter13.p.rapidapi.com',
            'x-rapidapi-key':
              'c80a6ea198msh767274c437f9b12p1e13bcjsn03a726b483c3',
          },
        };
        console.log(options.url);
        const { data } = await axios.request(options);
        this.convertedPrice = data.amount;
      } else {
        this.convertedPrice = this.price;
      }
    },
  },
};
</script>
