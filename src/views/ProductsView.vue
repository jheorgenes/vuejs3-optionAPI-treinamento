<template>
  <h2 id="app-products">Products</h2>
  <h2 id="my-app">Products my app</h2>

  <h2>Product 1</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aut animi voluptate in rem odit officiis hic culpa deleniti commodi, veritatis assumenda nulla, vero enim reiciendis asperiores autem harum laboriosam.</p>
  <ProductInfo :likes="product.likes" :comments="product.comments" />

</template>

<script>
import ProductInfo from '@/components/ProductInfo.vue';

export default {
  components: {
    ProductInfo
  },
  name: 'Products.vue',
  data: () => ({
    product: {
      likes: 20,
      comments: 30
    }
  }),
}
</script>

<style>
#app-products {
  color: red;
}
</style>