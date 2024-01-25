<template>
<ul>
  <!-- Aqui está percorrendo uma lista de produtos e inserindo a tag slot para cada produto da lista -->
  <!-- Dentro de cada item da lista percorrido, está sendo ENVIADO o conteúdo do item com o nome de 'product' -->
  <slot v-for="(product, index) in products" :key="index" :product="product"></slot>
</ul>
</template>

<script>
export default {
  props: ['products']
}
</script>