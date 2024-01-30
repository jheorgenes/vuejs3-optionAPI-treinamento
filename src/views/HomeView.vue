<template>
  <Currency type="text" v-model="dolar" placeholder="Dolar" :options="{ currency: 'USD' }" />
  <hr>
  <ul>
    <li>{{ dolarTodayValue }}</li>
    <li>{{ dolarToReaisValue }}</li>
  </ul>
</template>

<script>
import format from '../services/format';
import Currency from '@/components/Currency.vue';
import http from '@/services/http';

export default {
  components: {
    Currency
  },
  data: () => ({
    dolar: 0,
    dolarToday: 0,
    dolarToReais: 0
  }),
  async mounted(){
    try {
      const dolarToday = await this.getDolar();
      this.dolarToday = dolarToday['high']; //Extraindo o valor de high (contém o valor do dolar)
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async getDolar(type = 'USD-BRL') {
      const { data } = await http.get('https://economia.awesomeapi.com.br/json/last/'+type);
      const typeCurrency = type.split('-').join(''); // Fazendo a junção do tipo. Ex.: 'USD-BRL' em 'USDBRL'
      return data[typeCurrency];
    }
  },
  computed: {
    dolarToReaisValue() {
      return `O valor em reais de ${format(this.dolar, 'en-US', 'USD')} é de: ${format(this.dolarToReais, 'pt-BR', 'BRL')}`;
    },
    dolarTodayValue() {
      return `O dólar hoje está em: ${format(this.dolarToday, 'en-US', 'USD')}`;
    }
  },
  watch: {
    dolar(value) {
      this.dolarToReais = value * this.dolarToday;
    }
  }
}
</script>
