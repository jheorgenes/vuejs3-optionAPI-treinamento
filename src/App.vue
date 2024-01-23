<template>
  <input type="text" v-model="userName">

  <template v-for="user in users" :key="user.id">
    <input type="checkbox" @click="userName = user.firstName" :checked="userName == user.firstName">{{ user.firstName }}
  </template>

  <select name="" id="" v-model="userName">
    <option :value="user.firstName" v-for="user in users" :key="user.id">{{ user.firstName }}</option>
  </select>
</template>

<script>

export default {
  data: () => ({
    userName: 'Alexandre',
    users: [
      {
        id: 1,
        firstName: 'Alexandre'
      },
      {
        id: 2,
        firstName: 'João'
      },
      {
        id: 1,
        firstName: 'Maria'
      }
    ]
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>