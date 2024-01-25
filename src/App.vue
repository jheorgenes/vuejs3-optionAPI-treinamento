<template>

  <Nav />
  <router-view></router-view>
  <br>

  <ul>
    <li v-for="(item, index) in items" :key="index" ref="item">{{ item.name }}</li>
  </ul>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="img">
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
    console.log(this.$refs.img['src']);
  },
  methods: {
    add(value) {
      this.count+= value;
    }
  }
}
</script>

<style scoped>

</style>