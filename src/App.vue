<template>

  <Nav />
  <router-view></router-view>
  <br>

  <input type="text" placeholder="Search" @keyup="search">
</template>

<script>
import Nav from '@/components/Nav.vue'; 
import CountChild from './components/CountChild.vue';
import _ from 'lodash';

export default {
  components: {
    Nav,
    CountChild
  },
  data: () => ({
    count: 0,
    items: [
      {
        name: 'Fulano',
      },
      {
        name: 'Ciclano'
      }
    ]
  }),
  mounted() {
    // console.log(document.querySelectorAll('#item'));
    // console.log(this.$refs.img['src']);
  },
  methods: {
    add(value) {
      this.count+= value;
    },
    /* Usando o lodash para executar funções conforme a necessidade de atraso dessas funções */
    /* No exemplo abaixo, usando o debounce: É identificado o momento da pausa da digitação e então roda o tempo determinado para executar a função */
    // search: _.debounce(() => {
    //   console.log('search');
    // }, 1000),
    /* No exemplo abaixo, usando o throttle: Começa a rodar o tempo de espera determinado, no momento em que foi chamado essa função, e então é executado o evento dentro da função anônima abaixo */
    search: _.throttle(() => {
      console.log('search');
    }, 1000),
  }
}
</script>

<style scoped>

</style>