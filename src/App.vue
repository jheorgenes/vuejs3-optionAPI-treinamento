<template>

  <Nav />
  <router-view></router-view>
  <br>
  <br>
  <button @click="count++">Add - {{ count }}</button>

  <!-- <CountChild @addCount="add" /> -->
  <CountChild @addCount="(value) => count+= value" />
</template>

<script>
import Nav from '@/components/Nav.vue'; 
import CountChild from './components/CountChild.vue';

export default {
  components: {
    Nav,
    CountChild
  },
  data: () => ({
    count: 0
  }),
  methods: {
    add(value) {
      this.count+= value;
    }
  }
}
</script>

<style scoped>

</style>