<template>
  <!-- <button @click="$store.commit('counter/increment')">Add</button> -->
  <button @click="increment(10)">Add</button>
  {{ count }}
  <hr>
  {{ totalCount }}
  <hr>
  <h2>Users</h2>
  <template v-if="data.length > 0">
    <button @click="hideUsers">Hide Users</button>
    <ul>
      <li v-for="(user, index) in data" :key="index">{{ user.firstName }}</li>
    </ul>
  </template>
  <template v-else>
    <button @click="getUsers">Get Users</button>
  </template>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.counter.count, //state.namespaceModule.attributte.
      data: state => state.users.data
    }),
    ...mapGetters({
      totalCount: 'counter/getCounter'
    })
  },
  methods: {
    ...mapActions('users', ['getUsers', 'hideUsers']), //params: ('namespaceModule', ['nameMethodStore'])
    ...mapMutations('counter', ['increment'])
  }
}
</script>
