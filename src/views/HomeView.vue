<template>
  <!-- <button @click="increment">Add</button> -->
  <button @click="$store.dispatch('increment')">Add</button>
  {{ $store.state.count }}
  <hr>
  {{ $store.getters.getCounter }}
</template>

<script>
export default {
  methods: {
    increment() {
      /* Acionando o store através da action */
      this.$store.dispatch('increment');
    }
  }
}
</script>
