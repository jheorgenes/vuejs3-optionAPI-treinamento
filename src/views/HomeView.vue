<template>
  <input type="text" v-model="user.firstName" placeholder="FirstName">
  <input type="text" v-model="user.lastName" placeholder="LastName">
  <!-- <input type="text" v-model="user.address.street" placeholder="Street Adress"> -->
  <hr>
  
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.name }} <input type="text" v-model="item.price"></li>
  </ul>
</template>

<script>

export default {
  data: () => ({
    firstName: '',
    lastName: '',
    user: {
      firstName: '',
      lastName: '',
      address: {
        street: ''
      }
    },
    items: [
      {
        id: 1,
        name: 'teste1',
        price: 10
      },
      {
        id: 2,
        name: 'teste2',
        price: 100
      },
    ]
  }),
  mounted() {
    console.log('mounted');
  },
  watch: {
    firstName(value) {
      console.log('new =>', value);
    },
    'user.firstName': function(value, oldValue) {
      console.log('new =>', value);
      console.log('old =>', oldValue);
    },
    items: { /* Escutando mudanças em um array */
      handler(item) {
        console.log('carregou');
        // item.forEach(element => {
        //   if(!Number.isInteger(Number(element.price))) {
        //     console.log('Não é um integer ' + element.price);
        //   }
        //   console.log(element);
        // });
      },
      deep: true, // O deep aqui, habilita uma escuta profunda
      immediate: true //O immediate habilita que a escuta seja executada assim que o componente for montado (antes do mounted hook)
    }

  }
}
</script>
