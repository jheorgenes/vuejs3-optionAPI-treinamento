<template>
  <h2>Admin</h2>

  <ul>
    <template v-for="(user, index) in users" :key="index">
      <li v-if="user.is_Admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not Admin</h2>
  <ul>
    <li v-for="(user, index) in usersIsNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

  {{ funtionCount() }}
  <button @click="countFunction++">add function</button>
  <br>
  {{ countComputed }}
  <button @click="countComputed++">add Computed</button>
</template>

<script>
export default {
  data: () => ({
    countComputed: 0,
    countFunction: 0,
    user: {
      firstName: 'Alexandre',
      lastName: 'Cardoso'
    },
    users: [
      {
        firstName: 'Alexandre',
        is_Admin: 1
      },
      {
        firstName: 'Maria',
        is_Admin: 0
      },
      {
        firstName: 'João',
        is_Admin: 1
      },
      {
        firstName: 'Pedro',
        is_Admin: 0
      }
    ]
  }),
  computed: {
    fullname() {
      return this.user.firstName + ' ' + this.user.lastName;
    },
    usersIsNotAdmin() {
      return this.users.filter((user) => user.is_Admin === 0);
    },
    computedCount() {
      console.log('called computed');
      return this.countComputed;
    }
  },
  methods: {
    funtionCount() {
      console.log('called function');
      return this.countFunction;
    }
  }
}
</script>

