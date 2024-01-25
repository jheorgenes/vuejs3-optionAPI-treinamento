<template>
<!-- Abaixo, está sendo chamado o componente Products, enviando a propriedade 'products' desse View para o componente e obtendo (através do v-slot="props") o acesso as propriedades do componente 'Products' de forma indireta -->
<!-- No corpo do componente, estamos enviando um conteúdo que será exibido dentro da tag slot -->
<!-- Mas esse conteúdo que estamos enviando para o slot, foi obtido indiretamente do componente 'Products' através do (v-slot="props") -->
<!-- O conteúdo que está sendo obtido dessa (v-slot="props"), é resultado de uma iteração no componente, e é colocada aqui nesse View, dentro da estrutura de uma tag li, para então enviá-la dentro do slot anteriormente definido. -->
<Products :products="products" v-slot="props">
  <li @click="getProdutct(props.product.id)">{{ props.product.name }}</li>
</Products>
</template>

<script>
import ProductInfo from '@/components/ProductInfo.vue';
import Products from '@/components/Products.vue';

export default {
  components: {
    ProductInfo,
    Products
  },
  name: 'Products.vue',
  data: () => ({
    products: [
      {
        id: 1,
        name: 'Imac'
      },
      {
        id: 2,
        name: 'MacBook'
      },
      {
        id: 3,
        name: 'Mouse'
      },
    ],
    product: {
      likes: 20,
      comments: 30
    }
  }),
  methods: {
    getProdutct(id) {
      console.log(id);
    }
  }
}
</script>

<style>
#app-products {
  color: red;
}
</style>