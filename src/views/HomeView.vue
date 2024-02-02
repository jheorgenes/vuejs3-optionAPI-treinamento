<template>
  <!-- <button @click="increment">Add</button> -->
  <button @click="$store.dispatch('increment')">Add</button>
  {{ count }}
  <hr>
  {{ getCounter }}
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCounter'])
  },
  methods: {
    // ...mapActions(['increment']),
    ...mapMutations(['increment'])
  }
}
</script>
