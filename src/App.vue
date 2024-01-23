<template>
  <input type="text" v-model="userName">

  <template v-for="user in users" :key="user.id">
    <input type="checkbox" @click="userName = user.firsName" :checked="userName == user.firsName">{{ user.firsName }}
  </template>

  <select name="" id="" v-model="userName">
    <option :value="user.firsName" v-for="user in users" :key="user.id">{{ user.firsName }}</option>
  </select>
</template>

<script>

export default {
  data: () => ({
    userName: 'Alexandre',
    users: [
      {
        id: 1,
        firsName: 'Alexandre'
      },
      {
        id: 2,
        firsName: 'João'
      },
      {
        id: 1,
        firsName: 'Maria'
      }
    ]
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>