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
    /* O lodash serve para executar as funções com um tempo programado, conforme o tipo de atributo passado, como nos exemplos abaixo. */
    /* Usando debounce: Ao iniciar digitação, aguarda parar de digitar e então é executado a espera (do tempo programado) e depois executado a função de callback */
    search: _.debounce(() => {
      console.log('search');
    }, 1000),
    
    /* Usando throttle: Quando é iniciado a digitação, é executado a espera (do tempo programado) e depois executado a função de callback */
    // search: _.throttle(() => {
    //   console.log('search');
    // }, 1000),
  }
}
</script>

<style scoped>

</style>